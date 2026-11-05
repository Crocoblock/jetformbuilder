<?php

namespace JFB_Modules\Rich_Content;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use JFB_Modules\Block_Parsers\Fields\Hidden_Field_Parser;
use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	const HOOK = 'jet-form-builder/rich-content';

	/**
	 * @var Macros_Parser
	 */
	private $parser;

	/**
	 * @var Dynamic_Preset
	 */
	private $dynamic_preset;

	/**
	 * @var Macro_Shortcode_Notice
	 */
	private $macro_shortcode_notice;

	/**
	 * One entry per currently-active jet-form-builder/rich-content pass,
	 * pushed by begin_pass() (the first callback on this filter, priority 9)
	 * and popped by end_pass() (the last, priority PHP_INT_MAX) - so EVERY
	 * pass, including one started by a third-party apply_filters( self::HOOK,
	 * $text ) call that passes no Macro_Runtime_Values, and a NESTED pass
	 * started from inside a custom-macro filter callback, a shortcode
	 * callback, or a dynamic-preset source while an OUTER pass is still
	 * resolving, gets its own isolated slot. LIFO, so a nested pass's entry
	 * sits on top only for its own duration and the outer pass's entry is
	 * exactly restored once it is done - apply_submit_macros(),
	 * apply_dynamic_preset(), apply_shortcodes() and restore_runtime_tokens()
	 * all read ONLY the top of this stack (via current_pass()) for the
	 * CURRENT pass's trusted/trusted_content/without_preset/runtime_values,
	 * so a nested pass's own bookkeeping can never leak into, or get
	 * clobbered by, an unrelated outer one's - in particular, a dynamic
	 * preset JSON template in the OUTER pass that itself contains a macro is
	 * still looked up against the outer pass's own resolved value even if a
	 * nested pass ran and finished in between (a single shared slot caching
	 * "the current runtime values" - an earlier revision of this fix used
	 * one - does not have this property: a nested pass would overwrite it
	 * and the outer pass would then read the nested pass's values, or
	 * nothing at all, once the nested pass cleared it).
	 *
	 * This is also how apply_submit_macros()/apply_shortcodes()/
	 * restore_runtime_tokens() learn that data without widening their OWN
	 * public method signature beyond `apply_submit_macros( string $content
	 * ): string` / `apply_shortcodes( string $content ): string` - their
	 * exact, original, already-released (pre-issues-tracker-#20703) shape.
	 * A subclass overriding either with that original one-argument signature
	 * against an earlier revision of this fix that had widened the parent's
	 * signature to five parameters hits a PHP fatal ("Declaration ... must
	 * be compatible with ...") the moment its class loads - PHP does not
	 * allow a child method to drop a parent's additional parameters even
	 * when every one of them has a default value (verified empirically).
	 * apply_dynamic_preset() is the one exception: it already had a public
	 * four-argument signature (trusted/trusted_content/without_preset) before
	 * issues-tracker #20703 (released, in production), so widening it was
	 * never actually necessary; it still receives those three directly from
	 * WP_Hook as before, and only $runtime_values (which never existed in
	 * its signature at all) is read from here instead.
	 *
	 * @var array[] Each entry: array{trusted: bool, trusted_content: string, without_preset: bool, runtime_values: Macro_Runtime_Values}.
	 */
	private $pass_stack = array();

	/**
	 * One `shutdown` safety-net closure per entry in $pass_stack, same keys,
	 * pushed/popped together - see begin_pass()'s docblock for why this
	 * exists.
	 *
	 * @var callable[]
	 */
	private $pass_cleanups = array();

	public function rep_item_id() {
		return 'rich-content';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			self::HOOK,
			array( $this, 'begin_pass' ),
			9,
			5
		);
		add_filter(
			self::HOOK,
			array( $this, 'apply_submit_macros' ),
			10,
			1
		);
		add_filter(
			self::HOOK,
			array( $this, 'apply_dynamic_preset' ),
			10,
			4
		);
		add_filter(
			self::HOOK,
			array( $this, 'apply_shortcodes' ),
			10,
			1
		);
		add_filter(
			self::HOOK,
			array( $this, 'restore_runtime_tokens' ),
			PHP_INT_MAX,
			1
		);
		add_filter(
			self::HOOK,
			array( $this, 'end_pass' ),
			PHP_INT_MAX,
			1
		);

		$this->macro_shortcode_notice = new Macro_Shortcode_Notice();
		$this->macro_shortcode_notice->init_hooks();
	}

	public function remove_hooks() {
		remove_filter(
			self::HOOK,
			array( $this, 'begin_pass' ),
			9
		);
		remove_filter(
			self::HOOK,
			array( $this, 'apply_submit_macros' )
		);
		remove_filter(
			self::HOOK,
			array( $this, 'apply_dynamic_preset' )
		);
		remove_filter(
			self::HOOK,
			array( $this, 'apply_shortcodes' )
		);
		remove_filter(
			self::HOOK,
			array( $this, 'restore_runtime_tokens' ),
			PHP_INT_MAX
		);
		remove_filter(
			self::HOOK,
			array( $this, 'end_pass' ),
			PHP_INT_MAX
		);

		if ( $this->macro_shortcode_notice ) {
			$this->macro_shortcode_notice->remove_hooks();
		}
	}

	public static function rich( string $value ): string {
		return self::apply_pass_filter( $value, false, '', false );
	}

	/**
	 * Same pipeline as rich(), for a block attribute that is printed into the
	 * page HTML (label, description, prefix...). A dynamic preset inside it
	 * resolves to visitor-controlled data (query var, meta), so the preset
	 * result is kept from being expanded as a shortcode - both by this pass
	 * and by core do_shortcode() over the rendered page. Brackets are encoded
	 * as entities, so the visible text stays the same.
	 *
	 * Not used for redirect/webhook URLs or e-mail fields, where HTML
	 * entities would change the value.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public static function rich_html( string $value ): string {
		return self::apply_pass_filter(
			$value,
			false,
			'',
			false,
			( new Macro_Runtime_Values() )->neutralize_preset_brackets()
		);
	}

	/**
	 * Field types whose value is HTML on purpose. In a text/html e-mail body
	 * every other field value is escaped (see rich_email_html()). WYSIWYG
	 * content is sanitized with wp_kses_post() when it is submitted.
	 */
	const HTML_FIELD_TYPES = array(
		'wysiwyg-field',
	);

	/**
	 * Macro filters that need the exact value and never return it as is, so
	 * the value is passed to them unescaped:
	 * - md5: the result is a hex hash;
	 * - embed_url: the value is a URL for wp_oembed_get() ("&" must stay "&");
	 *   the result is the embed HTML, or empty when the URL has no embed, and
	 *   it is sanitized with wp_kses_post() (Base_Multiple_Filter).
	 */
	const RAW_INPUT_FILTERS = array(
		'md5',
		'embed_url',
	);

	/**
	 * Dynamic preset results kept as rich HTML in a text/html e-mail body
	 * (through wp_kses_post()): source => post fields. These core post fields
	 * are sanitized by WordPress on save for authors without unfiltered_html.
	 * Every other result (post meta, user, term, options page, query var,
	 * form record, add-on sources) can be written by visitors through forms
	 * and is escaped.
	 */
	const RICH_PRESET_FIELDS = array(
		'post' => array( 'post_content', 'post_title', 'post_excerpt' ),
	);

	/**
	 * Same pipeline as rich(), for the body of a text/html e-mail. Request
	 * data cannot add markup to the notification:
	 *
	 * - `%field%` values are HTML-escaped, except fields that are HTML on
	 *   purpose (HTML_FIELD_TYPES) and the author's static value of a hidden
	 *   field with "Render in HTML" off (is_author_static_hidden_value());
	 * - with macro filters (`%field|filter%`) the value is escaped before the
	 *   filters run: IDs, dates and lists are not changed by escaping, so
	 *   galleries, links and titles built by filters stay the same, and a
	 *   filter that returns its input cannot return markup;
	 * - repeater rows keep their `<br>` layout, the values inside are escaped;
	 * - custom macros (`%Name::macro%`) are code of the site, kept as they are;
	 * - dynamic preset results are escaped, except core post fields
	 *   (RICH_PRESET_FIELDS) that pass through wp_kses_post().
	 *
	 * Markup written by the author in the template is kept. Filters
	 * `jet-form-builder/send-email/escape-field-value` and
	 * `jet-form-builder/send-email/escape-preset-value` (bool) decide per
	 * value.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public static function rich_email_html( string $value ): string {
		return self::apply_pass_filter(
			$value,
			false,
			'',
			false,
			( new Macro_Runtime_Values() )->escape_html_field_values()
		);
	}

	/**
	 * Value callback for Macros_Parser in a text/html e-mail pass.
	 *
	 * @param mixed  $value   Field value before macro filters and formatting.
	 * @param string $name    Field name or a repeater child path ('rows.0.title').
	 * @param array  $filters Macro filters, e.g. `format_date(d.m.Y)`.
	 *
	 * @return mixed
	 */
	public static function escape_email_field_value( $value, string $name, array $filters = array() ) {
		foreach ( $filters as $filter ) {
			// Same name rule as Filters_Manager::apply_single(), which also
			// accepts leading spaces ("%field| md5%").
			if ( preg_match( '/[-\w]+/', (string) $filter, $match ) && in_array( $match[0], self::RAW_INPUT_FILTERS, true ) ) {
				return $value;
			}
		}

		$type     = jet_fb_context()->get_field_type( $name );
		$settings = '' === $type ? array() : jet_fb_context()->get_settings( $name );
		$escape   = ! in_array( $type, self::HTML_FIELD_TYPES, true );

		if ( 'hidden-field' === $type && self::is_author_static_hidden_value( $name, $settings ) ) {
			$escape = false;
		}

		/**
		 * Whether to HTML-escape a field value inserted into a text/html e-mail.
		 *
		 * @param bool         $escape Default: true, except WYSIWYG and the author's static value of a hidden field.
		 * @param string|array $value  The value, before macro filters.
		 * @param string       $name   Field name; for a repeater row value the child's path, e.g. 'rows.0.title'.
		 * @param string       $type   Field type, e.g. 'hidden-field'.
		 */
		$escape = apply_filters( 'jet-form-builder/send-email/escape-field-value', $escape, $value, $name, $type );

		return $escape ? self::esc_html_deep( $value ) : $value;
	}

	/**
	 * A hidden field with "Render in HTML" off is computed on the server and
	 * the value sent by the browser is ignored (Hidden_Field_Parser). Only a
	 * value the author set is trusted. The check uses the provenance of the
	 * value the parser actually returned, not the field settings: an empty
	 * Manual Input falls back to the default, which a preset may fill from a
	 * query var, and other sources (post or user meta, referer URL, custom
	 * callbacks) read data that visitors can write.
	 *
	 * @param string $name     Field name.
	 * @param array  $settings Hidden field block attributes.
	 *
	 * @return bool
	 */
	private static function is_author_static_hidden_value( string $name, array $settings ): bool {
		if ( false !== ( $settings['render'] ?? true ) ) {
			return false;
		}

		try {
			$parser = jet_fb_context()->resolve_parser( $name );
		} catch ( \Exception $exception ) {
			return false;
		}

		return $parser instanceof Hidden_Field_Parser && ! $parser->is_value_from_source();
	}

	/**
	 * @param mixed $value
	 *
	 * @return mixed
	 */
	private static function esc_html_deep( $value ) {
		if ( is_array( $value ) ) {
			return array_map( array( self::class, 'esc_html_deep' ), $value );
		}

		return is_string( $value ) ? esc_html( $value ) : $value;
	}

	/**
	 * Dynamic preset result in a text/html e-mail body.
	 *
	 * @param string $result      Preset source value.
	 * @param string $preset_json Preset JSON the result was resolved from.
	 *
	 * @return string
	 */
	private static function escape_email_preset_result( string $result, string $preset_json ): string {
		$preset = json_decode( $preset_json, true );
		$preset = is_array( $preset ) ? $preset : array();
		$source = (string) ( $preset['from'] ?? '' );
		$field  = (string) ( $preset['current_field_prop'] ?? '' );
		$escape = ! in_array( $field, self::RICH_PRESET_FIELDS[ $source ] ?? array(), true );

		/**
		 * Whether to HTML-escape a dynamic preset result inserted into a
		 * text/html e-mail. When false the result passes through wp_kses_post().
		 *
		 * @param bool   $escape Default: false for post content, title and excerpt, true otherwise.
		 * @param string $result Preset source value.
		 * @param string $source Preset source, e.g. 'query_var', 'post'.
		 * @param string $field  Source field, e.g. 'post_content', 'post_meta'.
		 */
		$escape = apply_filters( 'jet-form-builder/send-email/escape-preset-value', $escape, $result, $source, $field );

		return $escape ? esc_html( $result ) : wp_kses_post( $result );
	}

	/**
	 * Runs one pass of this filter and, if anything inside it throws, drops
	 * the pass_stack entries it left behind before rethrowing - including an
	 * exception from a third-party callback on this filter, which the guards
	 * in this module's own callbacks (see guard_pass()) cannot see. Otherwise
	 * a caller that catches the exception and lets an OUTER pass continue
	 * would leave this pass's entry on top of the stack until shutdown, and
	 * the outer pass would restore its tokens with the wrong runtime values.
	 *
	 * Core's apply_filters() does not pop $wp_current_filter when a callback
	 * throws either. If the caller catches inside another filter (e.g. a
	 * `jet-form-builder/custom-macro` callback), that filter's own array_pop()
	 * then removes this stale entry instead of its own, current_filter() no
	 * longer reports this hook for the outer pass, and current_pass() returns
	 * null there - so the entry this call pushed is dropped here as well.
	 *
	 * Uses the registered module instance, not $this: callers such as
	 * Message_Content_Processor may hold a separate, unhooked instance.
	 *
	 * @param string $value
	 * @param bool $trusted
	 * @param string $trusted_content
	 * @param bool $without_preset
	 * @param Macro_Runtime_Values|null $runtime_values Flags for this pass (escaping, preset brackets).
	 *
	 * @return string
	 * @throws \Throwable Rethrows whatever a callback of this pass threw, after unwinding.
	 */
	private static function apply_pass_filter(
		string $value,
		bool $trusted,
		string $trusted_content,
		bool $without_preset,
		$runtime_values = null
	): string {
		$module       = function_exists( 'jet_form_builder' ) && jet_form_builder()->has_module( 'rich-content' )
			? jet_form_builder()->module( 'rich-content' )
			: null;
		$module       = $module instanceof self ? $module : null;
		$depth        = $module ? count( $module->pass_stack ) : 0;
		$filter_depth = self::count_current_filters();

		try {
			return apply_filters(
				self::HOOK,
				$value,
				$trusted,
				$trusted_content,
				$without_preset,
				$runtime_values instanceof Macro_Runtime_Values ? $runtime_values : new Macro_Runtime_Values()
			);
		} catch ( \Throwable $exception ) {
			if ( $module ) {
				$module->unwind_passes( $depth );
			}

			self::truncate_current_filters( $filter_depth );

			throw $exception;
		}
	}

	/**
	 * Same macros/preset/shortcodes pipeline as rich(), but for a value that
	 * is provably admin-authored - a block attribute stored in the form's
	 * own post content, never a value submitted with the request. Declares
	 * the preset trusted, so an explicit `restricted: false` saved through
	 * the field's own "Restrict access" toggle is honoured, the same way it
	 * already is for validation rules, date limits, conditions and dynamic
	 * value. See Preset_Manager::get_field_value() and
	 * jet_fb_parse_dynamic_trusted() for the same distinction elsewhere.
	 *
	 * The regular dynamic-preset callback stays registered in its original
	 * position on the shared filter. Filter arguments identify this invocation
	 * and its exact original content, preserving the established macros ->
	 * preset -> shortcodes order without mutable hook state. If macros change
	 * the content, its result is parsed as untrusted request-derived data.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public function rich_trusted( string $value ): string {
		return self::apply_pass_filter( $value, true, $value, false );
	}

	/**
	 * Runs macros and shortcodes while deliberately skipping dynamic presets.
	 * Kept as a filter argument rather than removing/re-adding the callback so
	 * its position and accepted-arguments count never change for later calls.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public function rich_without_preset( string $value ): string {
		return self::apply_pass_filter( $value, false, '', true );
	}

	/**
	 * First callback on this filter (priority 9, immediately before
	 * apply_submit_macros() at priority 10) - see $pass_stack's own docblock
	 * for why this exists and how it keeps a nested pass from clobbering an
	 * outer one's context, and for why this is a brand-new method name (free
	 * to take whatever parameters it needs - no subclass could already be
	 * overriding a method that never existed before).
	 *
	 * @param string $content
	 * @param bool $trusted
	 * @param string $trusted_content
	 * @param bool $without_preset
	 * @param Macro_Runtime_Values|null $runtime_values Null for a
	 *        third-party apply_filters( self::HOOK, $text ) call that passes
	 *        only the text - a fresh one is created here so that call shape
	 *        gets the exact same protection as Module::rich() (fail-closed).
	 *
	 * @return string $content, unchanged - this callback is bookkeeping only.
	 */
	public function begin_pass(
		string $content,
		bool $trusted = false,
		string $trusted_content = '',
		bool $without_preset = false,
		// No type declaration (only the @param tag above): `?Macro_Runtime_
		// Values` is PHP 7.1+ syntax, and the plain, typed `Macro_Runtime_
		// Values $runtime_values = null` a PHP-version-agnostic implicit-
		// nullable default still triggers "Implicitly marking parameter as
		// nullable is deprecated" on PHP 8.4+ (confirmed on 8.4.4) - the
		// deprecation fires for that default regardless of whether `?` is
		// written, not only for the explicit nullable syntax. readme.txt
		// declares PHP 7.0 support, so the only form compatible with 7.0
		// that also never deprecates on 8.4+ is no declared type at all.
		$runtime_values = null
	): string {
		if ( null === $runtime_values ) {
			$runtime_values = new Macro_Runtime_Values();
		}

		$this->pass_stack[] = array(
			'trusted'         => $trusted,
			'trusted_content' => $trusted_content,
			'without_preset'  => $without_preset,
			'runtime_values'  => $runtime_values,
		);

		// array_key_last() is PHP 7.3+; readme.txt declares PHP 7.0 support,
		// so Array_Tools::last_key() (same fallback-to-end()/key() shim used
		// elsewhere in the plugin) is used instead.
		$index = Array_Tools::last_key( $this->pass_stack );

		// Safety net for a later callback on this SAME pass (a third-party
		// apply_dynamic_preset()/apply_shortcodes() override, a shortcode
		// callback, or a custom-macro filter) throwing before end_pass()
		// (registered at PHP_INT_MAX, the very last callback on this filter)
		// gets to pop the entry above. Without this, an uncaught \Throwable
		// leaves the entry on $pass_stack for the rest of the PHP process -
		// not just this one request, but also a long-running
		// WP-CLI/Action Scheduler/persistent-worker run that keeps
		// processing further, unrelated form submissions in the same
		// process - and a later, unrelated pass's current_pass() ( end() )
		// would then restore ITS OWN content using THIS entry's resolved
		// values, leaking one submission's field values into another's
		// output. end_pass() removes this same closure when it pops the
		// entry normally (the happy path, every pass that completes without
		// a mid-pass exception), so it never fires then. A pass that throws
		// is normally unwound right away by guard_pass()/apply_pass_filter();
		// this only remains for a direct apply_filters( self::HOOK, ... ) call
		// whose exception came from a third-party callback.
		$cleanup = function () use ( $index ) {
			unset( $this->pass_stack[ $index ], $this->pass_cleanups[ $index ] );
		};

		$this->pass_cleanups[ $index ] = $cleanup;
		add_action( 'shutdown', $cleanup, PHP_INT_MAX );

		return $content;
	}

	/**
	 * Replaces every `%field_name%` / custom-macro / repeater-verbose macro
	 * with a unique token instead of its resolved value, and records the
	 * token -> value pair in the current pass's Macro_Runtime_Values (see
	 * $pass_stack). apply_shortcodes() restores the tokens after
	 * do_shortcode() has already fixed the shortcode tag and attribute
	 * structure, so a submitted value can never complete a tag name or
	 * escape a quoted attribute.
	 *
	 * Kept at its exact original (pre-#20703), one-argument public signature
	 * - see $pass_stack's own docblock - so no third-party override of this
	 * method breaks. Two cases, told apart by current_pass() (itself gated
	 * on current_filter() === self::HOOK, i.e. "is a pass actually running
	 * on this exact filter right now"):
	 * - called directly as a plain method, outside any active pass: nothing
	 *   parses shortcodes afterwards, so the tokens are resolved before
	 *   returning;
	 * - called as this filter's own priority-10 callback, with begin_pass()
	 *   (priority 9) having already pushed this pass's context: the tokens
	 *   are left in place for apply_dynamic_preset()/apply_shortcodes()/
	 *   restore_runtime_tokens() of the same pass to consume.
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	public function apply_submit_macros( string $content ): string {
		$pass = $this->current_pass();

		if ( null !== $pass ) {
			return $this->guard_pass(
				function () use ( $content, $pass ) {
					return $this->tokenize_submit_macros( $content, $pass['runtime_values'] );
				}
			);
		}

		$runtime_values = new Macro_Runtime_Values();
		$content        = $this->tokenize_submit_macros( $content, $runtime_values );

		return Runtime_Shortcode_Renderer::restore( $content, $runtime_values->all() );
	}

	/**
	 * Uses Macros_Parser::MACRO_PATTERN - the same, single definition of the
	 * macro syntax Macros_Parser::macros_replace() resolves - so every
	 * `%...%` segment it would resolve is tokenized here first, by
	 * construction, with no separate copy of the pattern that could drift
	 * out of sync with it. Each match is resolved in isolation through
	 * parse_macros(), matching the approach used by
	 * Message_Content_Processor::tokenize_macros().
	 *
	 * @param string $content
	 * @param Macro_Runtime_Values $runtime_values
	 *
	 * @return string
	 */
	private function tokenize_submit_macros( string $content, Macro_Runtime_Values $runtime_values ): string {
		$parser = $this->get_parser();

		$tokenized = preg_replace_callback(
			Macros_Parser::MACRO_PATTERN,
			function ( array $macro_match ) use ( $parser, $content, $runtime_values ) {
				// The parser instance is shared: set this pass's value callback
				// for this one call and restore whatever a caller had set.
				$previous = $parser->get_value_callback();
				$parser->set_value_callback(
					$runtime_values->should_escape_html_field_values()
						? array( self::class, 'escape_email_field_value' )
						: null
				);

				try {
					$resolved = $parser->parse_macros( $macro_match[0] );
				} finally {
					$parser->set_value_callback( $previous );
				}

				// Unresolved macro syntax (no matching field/custom-macro) comes back
				// unchanged from parse_macros() - it is template text, not
				// request-derived data, so it must not be tokenized away. Checked
				// through the parser's own has_resolved_last() flag, not by
				// comparing $resolved to $macro_match[0]: a submitted value that happens
				// to equal its own `%name%` syntax (e.g. field `jfbname` submitted
				// with the literal value `%jfbname%`) would otherwise look
				// byte-identical to "nothing matched" and skip tokenization even
				// though it is real request-derived data.
				if ( ! $parser->has_resolved_last() ) {
					return $macro_match[0];
				}

				$token = Runtime_Shortcode_Renderer::generate_token( $content, $runtime_values->all() );
				$runtime_values->set( $token, $resolved );

				return $token;
			},
			$content
		);

		return is_string( $tokenized ) ? $tokenized : $content;
	}

	/**
	 * Unchanged signature/accepted_args (still 4) on purpose: already public,
	 * released API before issues-tracker #20703 - see $pass_stack's own
	 * docblock. $runtime_values (which never existed in this signature) is
	 * read from current_pass() instead, by parse_dynamic_preset_json().
	 *
	 * @param string $content
	 * @param bool $trusted
	 * @param string $trusted_content
	 * @param bool $without_preset
	 *
	 * @return string
	 */
	public function apply_dynamic_preset(
		string $content,
		bool $trusted = false,
		string $trusted_content = '',
		bool $without_preset = false
	): string {
		if ( $without_preset ) {
			return $content;
		}

		return $this->guard_pass(
			function () use ( $content, $trusted, $trusted_content ) {
				// Macros execute before this callback and can expand request-controlled
				// values. A trusted parse is safe only when the content is still the
				// exact admin-authored string passed to rich_trusted().
				if ( $trusted && $content === $trusted_content ) {
					$result = $this->apply_dynamic_preset_trusted( $content );

					// The attribute is admin-authored, but the preset SOURCE
					// value it resolves to is still data.
					return $result === $content
						? $result
						: $this->protect_preset_result( $result, $this->current_pass(), $content );
				}

				return $this->parse_dynamic_preset_json( $content );
			}
		);
	}

	/**
	 * apply_submit_macros() now hands this method a tokenized $content
	 * instead of one with macro values already inlined, so a preset JSON
	 * blob built from an admin-authored attribute (rich_trusted(), e.g. a
	 * Number/Range/Media/Textarea/Switcher value-limit attribute whose
	 * `default` contains `%field%`) would otherwise have Dynamic_Preset::
	 * parse_json() run its field-map/source lookups against a meaningless
	 * `jfbmacro...` placeholder instead of the real submitted value - a
	 * functional regression, not by itself a new injection (apply_shortcodes()
	 * still runs after this, and still only ever sees whatever this method
	 * returns).
	 *
	 * Fixed by resolving the current pass's tokens back to their real values
	 * in a local copy (read via current_pass(), see $pass_stack) and letting
	 * Dynamic_Preset parse/look up against that, exactly like before this
	 * fix - so the LOOKUP itself (which field, which post, which $_GET key,
	 * ...) is correct again, including when a NESTED pass (triggered from a
	 * custom-macro callback, a shortcode callback, or a preset source while
	 * this outer pass was still tokenizing) ran to completion in between:
	 * current_pass() still finds this exact outer pass's own entry, because
	 * the nested pass pushed and popped its own separate one.
	 *
	 * The result is intentionally NOT re-tokenized before returning. Earlier
	 * revisions of this method tried to, via str_replace() for every
	 * resolved value still found in the output, but Dynamic_Preset::
	 * parse_json() only ever returns one of two things: the input
	 * untouched (not valid preset JSON - the untokenized $content is then
	 * identical to $parsed, handled below, no preset ever ran), or
	 * get_result() - the preset SOURCE's own value ($_GET/post meta/user
	 * meta/...), wholesale, with no structural relationship to the macro's
	 * resolved value at all. str_replace()-ing any coincidental substring
	 * match of the macro's value inside that unrelated source value would
	 * corrupt it by splicing the macro's value into a position it never
	 * belonged in once restore_runtime_tokens() ran. A source resolving to
	 * request-influenceable data (e.g. query_var reading $_GET) and that
	 * then reaching do_shortcode() is pre-existing behaviour this method
	 * does not change either way - it predates and is unrelated to
	 * issues-tracker #20703, which is specifically about a *submitted field*
	 * macro, not a preset source's own lookup.
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	private function parse_dynamic_preset_json( string $content ): string {
		$pass        = $this->current_pass();
		$values      = $pass ? $pass['runtime_values']->all() : array();
		$untokenized = $values ? Runtime_Shortcode_Renderer::restore( $content, $values ) : $content;
		$parsed      = Tools::to_string( $this->get_dynamic_preset()->parse_json( $untokenized ) );

		if ( $parsed === $untokenized ) {
			// Identity pass-through (the overwhelming majority of content:
			// not valid preset JSON at all - Dynamic_Preset::
			// is_active_preset_json()'s Plain_Default_Exception branch
			// returns $source unchanged). Nothing here came from a preset
			// source, so keep $content tokenized exactly as it was, matching
			// what apply_shortcodes() downstream expects for every other
			// (non-preset) caller of this filter.
			return $content;
		}

		return $this->protect_preset_result( $parsed, $pass, $untokenized );
	}

	/**
	 * A dynamic preset result is the SOURCE's own value (query var, post /
	 * user meta, form record...), i.e. data that visitors can control. It must
	 * never be parsed as shortcode syntax by apply_shortcodes() later in this
	 * pass:
	 *
	 * - rich_html() passes (block attributes printed into the page) encode
	 *   the brackets, because core do_shortcode() runs over the page again
	 *   after the pass has finished;
	 * - every other pass (e-mail fields, redirect and webhook URLs) gets the
	 *   result as a runtime token, the same way `%field%` macro values are
	 *   handled, and restore_runtime_tokens() puts the exact value back at
	 *   the end of the pass - so the final string is unchanged.
	 *
	 * Outside an own pass (a direct third-party call of the callback) there
	 * is nothing to restore a token, so the result is returned as before.
	 *
	 * In a text/html e-mail pass the result is escaped or sanitized first,
	 * see escape_email_preset_result().
	 *
	 * @param string $result
	 * @param array|null $pass
	 * @param string $preset_json Preset JSON the result was resolved from.
	 *
	 * @return string
	 */
	private function protect_preset_result( string $result, $pass, string $preset_json = '' ): string {
		if ( ! $pass ) {
			return $result;
		}

		/** @var Macro_Runtime_Values $runtime_values */
		$runtime_values = $pass['runtime_values'];

		if ( $runtime_values->should_escape_html_field_values() ) {
			$result = self::escape_email_preset_result( $result, $preset_json );
		}

		if ( $runtime_values->should_neutralize_preset_brackets() ) {
			// Printed into the form: the frontend script would treat a
			// data-jfb-macro element from the preset value as an HTML macro.
			$result = Tools::strip_macro_attributes( $result );
		}

		// "&#91;" counts too: do_shortcode() turns it back into "[" on its way
		// out (unescape_invalid_shortcodes()), so a later pass would expand it.
		if ( false === strpos( $result, '[' ) && false === strpos( $result, '&#91;' ) ) {
			return $result;
		}

		/**
		 * Backward compatibility opt-in: before 3.6.9 a shortcode contained in a
		 * dynamic preset result was expanded. Return true only for sources that
		 * visitors can never write (the query var source is always writable).
		 *
		 * @param bool   $allow  Default false.
		 * @param string $result Preset source value.
		 */
		if ( apply_filters( 'jet-form-builder/rich-content/allow-preset-shortcodes', false, $result ) ) {
			return $result;
		}

		if ( $runtime_values->should_neutralize_preset_brackets() ) {
			return Tools::neutralize_shortcodes( $result );
		}

		$token = Runtime_Shortcode_Renderer::generate_token( $result, $runtime_values->all() );
		$runtime_values->set( $token, $result );

		return $token;
	}

	public function apply_dynamic_preset_trusted( string $content ): string {
		// Do not use get_dynamic_preset(): it is shared by ordinary rich() calls.
		// A preset-sanitize callback may make a nested ordinary call while this
		// source is resolving, so the trusted origin must be invocation-local.
		$preset = new Dynamic_Preset();
		$preset->trust_restriction_flag( true );

		return Tools::to_string( $preset->parse_json( $content ) );
	}

	/**
	 * Runs do_shortcode() on $content. Any `%field_name%`-derived value
	 * tokenized by apply_submit_macros() is restored only after WordPress has
	 * already fixed the shortcode tag/attribute structure, so a submitted
	 * value can supply shortcode *data* but never shortcode *grammar*.
	 *
	 * Every token is restored to plain text before this method returns,
	 * regardless of whether any shortcode tag matched: a `%field%` value with
	 * no brackets at all (the overwhelming majority of existing forms) must
	 * come back out byte-identical, not as a `jfbmacro...` placeholder.
	 *
	 * Kept at its exact original (pre-#20703), one-argument public signature
	 * - see $pass_stack's own docblock - so no third-party override of this
	 * method breaks. $runtime_values is read from current_pass() instead:
	 * null there covers both a third-party apply_filters( self::HOOK, $text )
	 * call (begin_pass() still runs first and pushes a fresh one, so this is
	 * actually never null while this filter is genuinely running) and a
	 * plain direct method call made outside any active pass (e.g.
	 * Message_Content_Processor's own private apply_shortcodes() calls this
	 * directly as a drop-in do_shortcode() replacement for its own,
	 * separately-tokenized content) - current_pass() returns null for the
	 * latter and this falls through to a plain do_shortcode(), exactly like
	 * before this fix.
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	public function apply_shortcodes( string $content ): string {
		$pass           = $this->current_pass();
		$runtime_values = $pass ? $pass['runtime_values'] : null;

		if ( null === $pass ) {
			return do_shortcode( $content );
		}

		if ( $runtime_values->is_empty() ) {
			return $this->guard_pass(
				function () use ( $content ) {
					return do_shortcode( $content );
				}
			);
		}

		$values = $runtime_values->all();
		$result = $this->guard_pass(
			function () use ( $content, $values ) {
				return Runtime_Shortcode_Renderer::do_shortcode( $content, $values, 'do_shortcode' );
			}
		);

		return Runtime_Shortcode_Renderer::restore( $result, $values );
	}

	/**
	 * Second-to-last callback of every pass (priority PHP_INT_MAX, right
	 * before end_pass() at the same priority). Restores tokens left by a
	 * pass whose apply_shortcodes() was removed by third-party code, so a
	 * `jfbmacro...` placeholder never leaks into the result.
	 *
	 * Kept at its exact original one-argument signature too (it is a
	 * brand-new method added by this same fix, so there is no existing
	 * subclass to break either way, but the public API surface this fix
	 * adds should not itself invite the same problem later) - see
	 * $pass_stack's own docblock.
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	public function restore_runtime_tokens( string $content ): string {
		$pass = $this->current_pass();

		if ( null === $pass || $pass['runtime_values']->is_empty() ) {
			return $content;
		}

		return Runtime_Shortcode_Renderer::restore( $content, $pass['runtime_values']->all() );
	}

	/**
	 * Last callback on this filter (priority PHP_INT_MAX, registered right
	 * after restore_runtime_tokens() at the same priority) - pops the entry
	 * begin_pass() pushed for this exact pass and removes its shutdown
	 * safety net (see begin_pass()'s docblock), now that it is no longer
	 * needed: this is the "happy path" pop, reached only when nothing earlier
	 * in this same pass threw.
	 *
	 * @param string $content
	 *
	 * @return string $content, unchanged - this callback is bookkeeping only.
	 */
	public function end_pass( string $content ): string {
		if ( ! $this->is_running_own_filter() || ! $this->pass_stack ) {
			return $content;
		}

		$this->pop_pass();

		return $content;
	}

	/**
	 * Runs work of the CURRENT pass (macros, dynamic preset, shortcodes -
	 * where custom-macro, preset-source and shortcode callbacks execute). If
	 * it throws, this pass's entry and anything a nested pass left above it
	 * are popped before rethrowing: end_pass() never runs for a pass that
	 * threw, and a caller that catches the exception and lets an outer pass
	 * continue must not leave this entry on top of the stack, or the outer
	 * pass would read this one's runtime values and return `jfbmacro...`
	 * placeholders instead of its own field values.
	 *
	 * The $wp_current_filter entry of this pass (its last element while the
	 * pass is current) is dropped too, see apply_pass_filter(): nothing of
	 * core's apply_filters() runs for this pass once the exception leaves
	 * here, so it would otherwise stay behind. This also covers a nested pass
	 * started with a bare apply_filters( self::HOOK, ... ) call.
	 *
	 * @param callable $callback
	 *
	 * @return mixed
	 * @throws \Throwable Rethrows whatever $callback threw, after unwinding.
	 */
	private function guard_pass( callable $callback ) {
		// A direct method call outside any active pass owns no entry.
		if ( null === $this->current_pass() ) {
			return $callback();
		}

		$depth        = count( $this->pass_stack ) - 1;
		$filter_depth = self::count_current_filters() - 1;

		try {
			return $callback();
		} catch ( \Throwable $exception ) {
			$this->unwind_passes( $depth );
			self::truncate_current_filters( $filter_depth );

			throw $exception;
		}
	}

	private static function count_current_filters(): int {
		global $wp_current_filter;

		return is_array( $wp_current_filter ) ? count( $wp_current_filter ) : 0;
	}

	/**
	 * @param int $depth
	 */
	private static function truncate_current_filters( int $depth ) {
		global $wp_current_filter;

		if ( is_array( $wp_current_filter ) && count( $wp_current_filter ) > max( 0, $depth ) ) {
			array_splice( $wp_current_filter, max( 0, $depth ) );
		}
	}

	/**
	 * Pops pass_stack entries (and their shutdown safety nets) until only
	 * $depth remain.
	 *
	 * @param int $depth
	 */
	private function unwind_passes( int $depth ) {
		$depth = max( 0, $depth );

		for ( $count = count( $this->pass_stack ); $count > $depth; $count-- ) {
			$this->pop_pass();
		}
	}

	private function pop_pass() {
		$index = Array_Tools::last_key( $this->pass_stack );

		unset( $this->pass_stack[ $index ] );

		$cleanup = $this->pass_cleanups[ $index ] ?? null;
		unset( $this->pass_cleanups[ $index ] );

		if ( $cleanup ) {
			remove_action( 'shutdown', $cleanup, PHP_INT_MAX );
		}
	}

	private function is_running_own_filter(): bool {
		return self::HOOK === current_filter();
	}

	/**
	 * The top of $pass_stack - the CURRENT pass's context - or null when
	 * this filter is not actually running right now (a plain direct method
	 * call made outside any active pass; see each caller's own docblock for
	 * what that means for it). Gated on is_running_own_filter(), not merely
	 * "the stack is non-empty", so a direct method call that happens to be
	 * nested inside a DIFFERENT, unrelated already-active pass still does
	 * not pick up that outer pass's context by accident.
	 *
	 * Declares no return TYPE (only the @return tag below): a nullable
	 * return type (`: ?array`) has no PHP 7.0-compatible equivalent at all
	 * (unlike a nullable parameter, which a plain `null` default already
	 * covers on every version) - readme.txt declares PHP 7.0 support, so
	 * this method is left without an enforced return type rather than
	 * requiring 7.1+ just for this one declaration.
	 *
	 * @return array{trusted: bool, trusted_content: string, without_preset: bool, runtime_values: Macro_Runtime_Values}|null
	 */
	private function current_pass() {
		if ( ! $this->pass_stack || ! $this->is_running_own_filter() ) {
			return null;
		}

		return end( $this->pass_stack );
	}

	/**
	 * @return Macros_Parser
	 */
	public function get_parser(): Macros_Parser {
		if ( is_null( $this->parser ) ) {
			$this->parser = new Macros_Parser();
		}

		return $this->parser;
	}

	/**
	 * @return Dynamic_Preset
	 */
	public function get_dynamic_preset(): Dynamic_Preset {
		if ( is_null( $this->dynamic_preset ) ) {
			$this->dynamic_preset = new Dynamic_Preset();
		}

		return $this->dynamic_preset;
	}
}
