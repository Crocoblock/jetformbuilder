<?php

namespace Jet_Form_Builder\Classes\Security;

use Jet_Form_Builder\Blocks\Block_Helper;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Binds a submitted post context to the form that rendered it.
 *
 * The signature is cacheable. Access to the post is checked separately on
 * every request, so a signature does not grant access to private content.
 */
class Submitted_Post_Context {

	const SIGNATURE_FIELD = '__queried_post_signature';

	/**
	 * Form status when a form that reads the current post on the server is
	 * submitted without a valid signed context (usually an outdated cached page).
	 */
	const EXPIRED_STATUS = 'post_context_expired';

	const KEY_OPTION = 'jet_fb_post_context_key';

	/**
	 * The post was rendered by the server for this form (signed context, the
	 * global post of a listing item or a single page).
	 */
	const RENDERED = 'rendered';

	/**
	 * The post was chosen by the client (AJAX referer). Only publicly viewable
	 * posts or posts the user may read.
	 */
	const STRICT = 'strict';

	/**
	 * A regular (not AJAX/REST) page render, or a submission carrying the
	 * signature of such a render: the server chose the global post (main
	 * query, a listing built by the site owner). Published items of non-public,
	 * non-internal post types are allowed here only.
	 */
	const PAGE = 'page';

	/**
	 * Hidden field sources that never read the current post or its author.
	 */
	const INDEPENDENT_HIDDEN_SOURCES = array(
		'manual_input',
		'user_id',
		'user_email',
		'user_name',
		'user_meta',
		'query_var',
		'referer_url',
		'current_date',
		'random_string',
		'current_term_id',
		'term_url',
	);

	/**
	 * General preset sources that never read the current post.
	 */
	const INDEPENDENT_PRESET_SOURCES = array( 'user', 'query_var', 'term', 'form_record' );

	/**
	 * Hidden field sources that always produce a value, so the field never
	 * falls back to its default or the form preset.
	 */
	const NEVER_EMPTY_HIDDEN_SOURCES = array( 'current_date', 'random_string' );

	/**
	 * Post types that are public in WordPress terms but store plugin internals
	 * (form settings, templates). They are never a submission context.
	 */
	const INTERNAL_POST_TYPES = array(
		'jet-form-builder',
		'jet-engine-booking',
		'jet-block-template',
		'jet-engine',
		'jet-popup',
		'jet-theme-core',
		'jet-woo-builder',
		'jet-menu',
		'elementor_library',
		'wp_block',
		'wp_template',
		'wp_template_part',
		'wp_navigation',
		'wp_global_styles',
		'wp_font_family',
		'wp_font_face',
		'custom_css',
		'customize_changeset',
		'oembed_cache',
		'user_request',
		'revision',
		'nav_menu_item',
		'shop_coupon',
		'shop_order',
		'shop_order_refund',
		'shop_order_placehold',
		'shop_subscription',
		'acf-field-group',
		'acf-field',
		'acf-post-type',
		'acf-taxonomy',
		'acf-ui-options-page',
		'nf_sub',
		'jet-smart-filters',
		'elementor_snippet',
		'elementor_font',
		'elementor_icons',
		'elementor_component',
		'e_global_class',
		'e_default_style',
		'jet-page-template',
		'jet_options_preset',
		'feedback',
		'jp_mem_plan',
		'memberships_coupon',
		'jetpack_migration',
		'wpcf7_contact_form',
		'flamingo_inbound',
		'flamingo_contact',
		'flamingo_outbound',
		'wpforms',
		'edd_payment',
		'edd_discount',
		'give_payment',
		'tribe_rsvp_attendees',
		'tec_tc_attendee',
		'scheduled-action',
		'wpcode',
	);

	/** @var string */
	private static $key = '';

	/** @var bool[] */
	private static $requires_cache = array();

	public static function sign( $form_id, $post_id ): string {
		$form_id = self::normalize_id( $form_id );
		$post_id = self::normalize_id( $post_id );

		if ( ! $form_id || null === $post_id ) {
			return '';
		}

		// Separate domain for non-public types: such a signature exists only
		// where a regular page render accepted the post (self::PAGE).
		$domain = $post_id && ! self::is_public_type( $post_id ) ? 'submitted-post:np:1:' : 'submitted-post:1:';

		return hash_hmac( 'sha256', $domain . $form_id . ':' . $post_id, self::key() );
	}

	public static function verify( $form_id, $post_id, $signature ): bool {
		if ( ! is_string( $signature ) || '' === $signature ) {
			return false;
		}

		$expected = self::sign( $form_id, $post_id );

		return '' !== $expected && hash_equals( $expected, $signature );
	}

	/**
	 * A key of its own: rotating WordPress salts (security plugins, hosts) must
	 * not invalidate every cached form.
	 *
	 * @return string
	 */
	private static function key(): string {
		if ( '' === self::$key ) {
			$key = get_option( self::KEY_OPTION );

			if ( ! is_string( $key ) || strlen( $key ) < 32 ) {
				$key = self::create_key();
			}

			self::$key = $key;
		}

		/**
		 * Key for the post context signatures. Changing it invalidates
		 * the context of every cached form.
		 *
		 * @param string $key
		 */
		$filtered = apply_filters( 'jet-form-builder/post-context/signing-key', self::$key );

		// A short or empty key would make signatures guessable.
		return is_string( $filtered ) && strlen( $filtered ) >= 32 ? $filtered : self::$key;
	}

	/**
	 * Concurrent first requests must end with one shared key: add_option()
	 * would let the last writer replace a key that is already in cached pages.
	 *
	 * @return string
	 */
	private static function create_key(): string {
		global $wpdb;

		// phpcs:disable WordPress.DB.DirectDatabaseQuery -- Atomic create-once; caches are cleared below.
		$wpdb->query(
			$wpdb->prepare(
				"INSERT IGNORE INTO {$wpdb->options} (option_name, option_value, autoload) VALUES (%s, %s, %s)",
				self::KEY_OPTION,
				wp_generate_password( 64, true, true ),
				'yes'
			)
		);

		wp_cache_delete( 'notoptions', 'options' );
		wp_cache_delete( 'alloptions', 'options' );
		wp_cache_delete( self::KEY_OPTION, 'options' );

		$key = $wpdb->get_var(
			$wpdb->prepare( "SELECT option_value FROM {$wpdb->options} WHERE option_name = %s", self::KEY_OPTION )
		);
		// phpcs:enable WordPress.DB.DirectDatabaseQuery

		if ( is_string( $key ) && strlen( $key ) >= 32 ) {
			return $key;
		}

		// A broken stored value (manual edit): replace it once.
		$key = wp_generate_password( 64, true, true );
		update_option( self::KEY_OPTION, $key, true );

		return $key;
	}

	/**
	 * Drop the per-request caches (key, form scan). For tests and after the key
	 * option was changed in the same request.
	 */
	public static function flush_cache() {
		self::$key            = '';
		self::$requires_cache = array();
	}

	/**
	 * Public content is readable by guests; other content follows WP meta caps.
	 * A login alone does not unlock a password-protected post.
	 *
	 * @param int|\WP_Post $post Post object or positive ID.
	 * @param string       $mode self::RENDERED, self::PAGE or self::STRICT.
	 * @return bool
	 */
	public static function can_read_post( $post, string $mode = self::RENDERED ): bool {
		return self::can_read_post_with_parents( $post, array(), $mode );
	}

	/**
	 * @return string[]
	 */
	public static function internal_post_types(): array {
		/**
		 * Post types that never become the post context of a form.
		 *
		 * @param string[] $post_types
		 */
		$types = apply_filters( 'jet-form-builder/post-context/internal-post-types', self::INTERNAL_POST_TYPES );

		return is_array( $types ) ? array_map( 'strval', $types ) : self::INTERNAL_POST_TYPES;
	}

	/**
	 * Inherited attachments follow the visibility and password of every parent.
	 * Keep our own cycle guard before WordPress resolves inherited statuses.
	 *
	 * @param int|\WP_Post $post Post object or positive ID.
	 * @param array        $seen Previously visited post IDs.
	 * @param string       $mode self::RENDERED, self::PAGE or self::STRICT.
	 * @return bool
	 */
	private static function can_read_post_with_parents( $post, array $seen, string $mode ): bool {
		if ( ! ( $post instanceof \WP_Post ) ) {
			$post_id = self::normalize_id( $post );
			$post    = $post_id ? get_post( $post_id ) : null;
		}

		if ( ! ( $post instanceof \WP_Post ) || isset( $seen[ $post->ID ] ) ) {
			return false;
		}

		$seen[ $post->ID ] = true;

		if ( 'attachment' === $post->post_type && 'inherit' === $post->post_status && $post->post_parent &&
			! self::can_read_post_with_parents( $post->post_parent, $seen, $mode ) ) {
			return false;
		}

		if ( post_password_required( $post ) && ! current_user_can( 'edit_post', $post->ID ) ) {
			return false;
		}

		if ( in_array( $post->post_type, self::internal_post_types(), true ) ) {
			return is_user_logged_in() && current_user_can( 'edit_post', $post->ID );
		}

		$can_read = is_post_publicly_viewable( $post ) ||
			self::user_can_read( $post ) ||
			// A published post of a public type without single pages (listing of a
			// CPT with "Publicly Queryable" off). Only when the server rendered it.
			( self::STRICT !== $mode && self::is_published_public_type( $post ) ) ||
			// A published item of a non-public type shown by a regular page
			// render (listing of a CPT with "Is Public" off). Never in AJAX or
			// REST renders, where add-ons switch to a post ID sent by the client.
			( self::PAGE === $mode && self::is_published_listed_type( $post ) );

		/**
		 * Whether the visitor may use this post as the form context. Use it to
		 * allow published items of a non-public post type that the site shows
		 * in listings. Password, internal types and private parents are
		 * checked before this filter.
		 *
		 * RENDERED also covers AJAX renders where an add-on switched the global
		 * post to an ID sent by the client (JetPopup dynamic popups, JetEngine
		 * popups). Allow only types whose data may be shown to everyone.
		 *
		 * @param bool     $can_read
		 * @param \WP_Post $post
		 * @param string   $mode Submitted_Post_Context::RENDERED (AJAX/REST render), ::PAGE (regular
		 *                       page render or its signature) or ::STRICT (client-chosen post).
		 */
		return (bool) apply_filters( 'jet-form-builder/post-context/can-read-post', $can_read, $post, $mode );
	}

	/**
	 * WordPress maps read_post of any published post to the plain "read"
	 * capability, also for non-public types (coupons, menu items, field
	 * groups) and revisions. Those need edit rights here.
	 *
	 * @param \WP_Post $post
	 * @return bool
	 */
	private static function user_can_read( \WP_Post $post ): bool {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		$type = get_post_type_object( $post->post_type );

		if ( $type && ! empty( $type->public ) ) {
			return current_user_can( 'read_post', $post->ID );
		}

		return current_user_can( 'edit_post', $post->ID );
	}

	/**
	 * Mode for the global post of the current render.
	 *
	 * @return string
	 */
	public static function render_mode(): string {
		$remote = wp_doing_ajax() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || wp_is_json_request() ||
			// JetSmartFilters "self"/"referrer" requests render the listing on the
			// page URL without DOING_AJAX, with the query taken from the request.
			defined( 'JET_SMART_FILTERS_DOING_REQUEST' );

		/**
		 * Whether the global post of this render was chosen by the server
		 * (Submitted_Post_Context::PAGE) or may come from client data
		 * (::RENDERED). Return RENDERED for builders that render listings or
		 * popups from request parameters on regular URLs.
		 *
		 * @param string $mode
		 */
		$mode = apply_filters( 'jet-form-builder/post-context/render-mode', $remote ? self::RENDERED : self::PAGE );

		return self::PAGE === $mode && ! $remote ? self::PAGE : self::RENDERED;
	}

	private static function is_public_type( $post_id ): bool {
		$type = get_post_type_object( (string) get_post_type( $post_id ) );

		return $type && ! empty( $type->public );
	}

	/**
	 * Non-public post types whose published items the site shows in listings
	 * on regular pages. Opt-in only: a regular URL does not prove that the
	 * server chose the post (JetSmartFilters reload-mode query parameters,
	 * search results list non-public JetEngine types), so every published
	 * item of an opted-in type is open to visitors as form context.
	 *
	 * @return string[]
	 */
	public static function listed_post_types(): array {
		/**
		 * Non-public post types usable as form context on regular page renders.
		 *
		 * @param string[] $post_types
		 */
		$types = apply_filters( 'jet-form-builder/post-context/listed-post-types', array() );

		return is_array( $types ) ? array_values( array_diff( array_map( 'strval', $types ), self::internal_post_types() ) ) : array();
	}

	/**
	 * Internal types are rejected before this check.
	 *
	 * @param \WP_Post $post
	 * @return bool
	 */
	private static function is_published_listed_type( \WP_Post $post ): bool {
		return in_array( $post->post_type, self::listed_post_types(), true ) &&
			get_post_type_object( $post->post_type ) && 'publish' === get_post_status( $post );
	}

	private static function is_published_public_type( \WP_Post $post ): bool {
		$type = get_post_type_object( $post->post_type );

		return $type && ! empty( $type->public ) && is_post_status_viewable( get_post_status( $post ) );
	}

	/**
	 * "<post ID>.<signature>" for the post being rendered, or '' when the
	 * visitor may not use it as context. The same check and signature as a
	 * form rendered for this post, so it grants nothing a render would not.
	 *
	 * @param int $form_id
	 * @return string
	 */
	public static function token_for_current_post( $form_id ): string {
		$form_id = absint( $form_id );
		$post    = get_post();

		if ( ! $form_id || ! Block_Helper::is_valid_form_post( get_post( $form_id ) ) ) {
			return '';
		}

		if ( ! ( $post instanceof \WP_Post ) || ! self::can_read_post( $post, self::render_mode() ) ) {
			return '';
		}

		$signature = self::sign( $form_id, $post->ID );

		return '' === $signature ? '' : $post->ID . '.' . $signature;
	}

	/**
	 * Post of a URL (the submitted referrer) when the visitor could open it
	 * anyway. Informational use only, e.g. "submitted from" of a form record.
	 *
	 * @param string $url
	 * @return \WP_Post|null
	 */
	public static function public_post_from_url( $url ) {
		$post_id = is_string( $url ) && '' !== $url ? url_to_postid( $url ) : 0;
		$post    = $post_id ? get_post( $post_id ) : null;

		return $post && self::can_read_post( $post, self::STRICT ) ? $post : null;
	}

	/**
	 * Whether the form is placed in the content of this post: every guest who
	 * opens the post gets this form rendered for it (and its signature). Used
	 * as a proof for submissions without a signature (pages cached before the
	 * signature existed). Readability is checked by the caller.
	 *
	 * @param int          $form_id
	 * @param int|\WP_Post $post
	 * @return bool
	 */
	public static function form_is_placed_in( $form_id, $post ): bool {
		$form_id = absint( $form_id );
		$post    = get_post( $post );

		if ( ! $form_id || ! ( $post instanceof \WP_Post ) ) {
			return false;
		}

		$placed = self::content_has_form( (string) $post->post_content, $form_id, array() ) ||
			self::elementor_has_form( $post, $form_id );

		/**
		 * Whether the form is placed in the post (page builders that keep
		 * their layout outside post_content).
		 *
		 * @param bool     $placed
		 * @param int      $form_id
		 * @param \WP_Post $post
		 */
		return (bool) apply_filters( 'jet-form-builder/post-context/form-is-placed', $placed, $form_id, $post );
	}

	private static function content_has_form( string $content, int $form_id, array $seen ): bool {
		if ( '' === $content ) {
			return false;
		}

		// Block content: only blocks that are rendered count, shortcodes
		// included. The whole text is scanned only for classic content.
		if ( has_blocks( $content ) ) {
			return self::blocks_have_form( parse_blocks( $content ), $form_id, $seen );
		}

		return self::shortcodes_have_form( $content, $form_id );
	}

	private static function blocks_have_form( array $blocks, int $form_id, array $seen ): bool {
		foreach ( $blocks as $block ) {
			if ( ! is_array( $block ) ) {
				continue;
			}

			$name  = (string) ( $block['blockName'] ?? '' );
			$attrs = is_array( $block['attrs'] ?? null ) ? $block['attrs'] : array();

			// Hidden or conditional blocks may not be rendered; a query loop
			// renders its template for the loop items, not for the host post.
			if ( self::is_conditional_block( $name, $attrs ) ) {
				continue;
			}

			if ( 'jet-forms/form-block' === $name && absint( $attrs['form_id'] ?? 0 ) === $form_id ) {
				return true;
			}

			// The block's own markup (without inner blocks, which are checked
			// below with the same exclusions); classic content between blocks
			// comes as blocks without a name.
			if ( is_string( $block['innerHTML'] ?? null ) && self::shortcodes_have_form( $block['innerHTML'], $form_id ) ) {
				return true;
			}

			$ref = 'core/block' === $name ? absint( $attrs['ref'] ?? 0 ) : 0;

			if ( $ref && ! isset( $seen[ $ref ] ) ) {
				$seen[ $ref ] = true;
				$reusable     = get_post( $ref );

				if ( $reusable instanceof \WP_Post && 'wp_block' === $reusable->post_type && 'publish' === $reusable->post_status &&
					'' === $reusable->post_password &&
					self::content_has_form( (string) $reusable->post_content, $form_id, $seen ) ) {
					return true;
				}
			}

			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) &&
				self::blocks_have_form( $block['innerBlocks'], $form_id, $seen ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Blocks whose content some visitors may not get. Counting them would let
	 * a submission without a signature claim a pair that was never rendered;
	 * skipping a visible one only means an old cached page asks to reload.
	 *
	 * @param string $name
	 * @param array  $attrs
	 * @return bool
	 */
	private static function is_conditional_block( string $name, array $attrs ): bool {
		return 'core/post-template' === $name ||
			// Core "Hide" (block visibility).
			false === ( $attrs['metadata']['blockVisibility'] ?? null ) ||
			// Block Visibility plugin.
			! empty( $attrs['blockVisibility'] ) ||
			// JetEngine Dynamic Visibility.
			! empty( $attrs['jetDynamicVisibility']['jedv_enabled'] );
	}

	/**
	 * Elementor elements shown only under conditions (Elementor Pro Display
	 * Conditions, JetEngine Dynamic Visibility). Their children are skipped too.
	 *
	 * @param array $settings
	 * @return bool
	 */
	private static function is_conditional_element( array $settings ): bool {
		return ! empty( $settings['e_display_conditions'] ) || ! empty( $settings['jedv_enabled'] );
	}

	private static function shortcodes_have_form( string $content, int $form_id ): bool {
		if ( false === strpos( $content, '[jet_fb_form' ) ) {
			return false;
		}

		// Shortcodes inside HTML comments (switched off, block attributes) never run.
		$content = (string) preg_replace( '/<!--.*?-->/s', '', $content );

		// Content of JetEngine condition shortcodes is shown only under conditions.
		if ( false !== strpos( $content, '[jet_engine_condition' ) ) {
			$content = (string) preg_replace( '/' . get_shortcode_regex( array( 'jet_engine_condition' ) ) . '/', '', $content );
		}

		preg_match_all( '/' . get_shortcode_regex( array( 'jet_fb_form' ) ) . '/', $content, $matches, PREG_SET_ORDER );

		foreach ( $matches as $match ) {
			// [[jet_fb_form]] is an escaped shortcode, printed as text.
			if ( '[' === $match[1] && ']' === $match[6] ) {
				continue;
			}

			$atts = shortcode_parse_atts( $match[3] );

			if ( is_array( $atts ) && absint( $atts['form_id'] ?? 0 ) === $form_id ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Only a page that Elementor renders: after switching back to the block
	 * editor the stale _elementor_data stays in meta but is not shown.
	 *
	 * @param \WP_Post $post
	 * @param int      $form_id
	 * @return bool
	 */
	private static function elementor_has_form( \WP_Post $post, int $form_id ): bool {
		if ( ! did_action( 'elementor/loaded' ) || 'builder' !== get_post_meta( $post->ID, '_elementor_edit_mode', true ) ) {
			return false;
		}

		$data = get_post_meta( $post->ID, '_elementor_data', true );
		$data = is_string( $data ) ? json_decode( $data, true ) : $data;

		return is_array( $data ) && self::elementor_elements_have_form( $data, $form_id );
	}

	private static function elementor_elements_have_form( array $elements, int $form_id ): bool {
		foreach ( $elements as $element ) {
			if ( ! is_array( $element ) ) {
				continue;
			}

			$settings = is_array( $element['settings'] ?? null ) ? $element['settings'] : array();

			if ( self::is_conditional_element( $settings ) ) {
				continue;
			}

			if ( 'jet-form-builder-form' === ( $element['widgetType'] ?? '' ) &&
				absint( $element['settings']['form_id'] ?? 0 ) === $form_id ) {
				return true;
			}

			if ( ! empty( $element['elements'] ) && is_array( $element['elements'] ) &&
				self::elementor_elements_have_form( $element['elements'], $form_id ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Whether the form reads the current post on the server while it is
	 * submitted. Such a form must not run with a missing or rejected context:
	 * its server-computed values would silently become empty.
	 *
	 * Only a hidden field without render is computed again on submit. Option
	 * fields (meta, generators), calculated META macros and the JetBooking /
	 * JetAppointments fields read the post only while rendering; on submit
	 * their value comes from the browser, as before.
	 *
	 * When in doubt the form is treated as dependent: the safe side.
	 *
	 * @param int $form_id
	 * @return bool
	 */
	public static function form_requires_post_context( $form_id ): bool {
		$form_id = absint( $form_id );

		if ( ! isset( self::$requires_cache[ $form_id ] ) ) {
			$blocks = $form_id ? Block_Helper::get_blocks_by_post( $form_id, true, true ) : array();

			self::$requires_cache[ $form_id ] = self::blocks_require_post_context( $blocks, self::has_post_preset( $form_id ) );
		}

		/**
		 * Whether a submission of this form must carry a valid signed post
		 * context. Return true when an add-on block or action reads the
		 * current post on submit.
		 *
		 * @param bool $requires
		 * @param int  $form_id
		 */
		return (bool) apply_filters(
			'jet-form-builder/post-context/form-requires-context',
			self::$requires_cache[ $form_id ],
			$form_id
		);
	}

	/**
	 * General form preset that may read the current post: a server-only
	 * hidden field falls back to it when its own source is empty.
	 *
	 * @param int $form_id
	 * @return bool
	 */
	private static function has_post_preset( int $form_id ): bool {
		if ( ! $form_id ) {
			return false;
		}

		$preset = jet_form_builder()->post_type->get_preset( $form_id );

		if ( ! is_array( $preset ) || empty( $preset['enabled'] ) ) {
			return false;
		}

		// Same defaults as Base_Preset::get_source() and Preset_Source_Post.
		$from = ! empty( $preset['from'] ) ? (string) $preset['from'] : 'post';

		if ( 'post' === $from ) {
			return 'query_var' !== ( $preset['post_from'] ?? '' );
		}

		// Add-on sources (booking, relations, CCT...) may read the current object.
		return ! in_array( $from, self::INDEPENDENT_PRESET_SOURCES, true );
	}

	private static function blocks_require_post_context( array $blocks, bool $post_preset ): bool {
		foreach ( $blocks as $block ) {
			if ( ! is_array( $block ) ) {
				continue;
			}

			$name  = (string) ( $block['blockName'] ?? '' );
			$attrs = is_array( $block['attrs'] ?? null ) ? $block['attrs'] : array();

			if ( 'jet-forms/hidden-field' === $name && self::hidden_requires_post_context( $attrs, $post_preset ) ) {
				return true;
			}

			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) &&
				self::blocks_require_post_context( $block['innerBlocks'], $post_preset ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Only a hidden field without render is computed again on submit
	 * (Hidden_Field_Parser::get_response()).
	 *
	 * @param array $attrs
	 * @param bool  $post_preset
	 * @return bool
	 */
	private static function hidden_requires_post_context( array $attrs, bool $post_preset ): bool {
		if ( self::is_rendered( $attrs['render'] ?? true ) || ! empty( $attrs['_static_value'] ) ) {
			return false;
		}

		// block.json default of "field_value" is "post_id" and is not serialized.
		$source = $attrs['field_value'] ?? 'post_id';

		// "--" placeholder: nothing is computed, the default decides (below).
		if ( ! is_string( $source ) || ( '' !== $source && ! in_array( $source, self::INDEPENDENT_HIDDEN_SOURCES, true ) ) ) {
			return true;
		}

		$never_empty = in_array( $source, self::NEVER_EMPTY_HIDDEN_SOURCES, true ) ||
			( 'manual_input' === $source && '' !== (string) ( $attrs['hidden_value'] ?? '' ) );

		if ( $never_empty ) {
			return false;
		}

		// An empty value falls back to the default: the form preset or a
		// dynamic default (macro, preset JSON).
		$default = $attrs['default'] ?? '';

		if ( is_array( $default ) ) {
			return true;
		}

		return $post_preset || ( is_string( $default ) &&
			( false !== strpos( $default, 'jet_preset' ) || preg_match( '/%[^%\s]+%/', $default ) ) );
	}

	/**
	 * @param mixed $value Saved "render" attribute.
	 * @return bool
	 */
	private static function is_rendered( $value ): bool {
		if ( is_bool( $value ) ) {
			return $value;
		}

		$value = filter_var( $value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );

		// Unknown values are treated as "not rendered": the safe side.
		return true === $value;
	}

	/**
	 * JetEngine takes its current object from $_REQUEST['post_id'] on AJAX
	 * requests. During a submission it must be the accepted context only.
	 *
	 * @param mixed $default_object Default object of JetEngine listings data.
	 * @return mixed
	 */
	public static function pin_jet_engine_object( $default_object ) {
		if ( ! function_exists( 'jet_fb_handler' ) || ! jet_fb_handler()->has_submitted_post_context() ) {
			return $default_object;
		}

		if ( false !== $default_object && null !== $default_object && ! ( $default_object instanceof \WP_Post ) ) {
			// Terms, users: not a post context.
			return $default_object;
		}

		$post = \Jet_Form_Builder\Live_Form::instance()->post;

		return $post instanceof \WP_Post ? $post : false;
	}

	/**
	 * Message for EXPIRED_STATUS, editable in the form Messages settings.
	 *
	 * @param array $messages
	 * @return array
	 */
	public static function add_message_type( $messages ) {
		if ( ! is_array( $messages ) ) {
			return $messages;
		}

		$messages[ self::EXPIRED_STATUS ] = array(
			'label' => __( 'Page is out of date', 'jet-form-builder' ),
			'value' => __( 'This page is out of date. Please reload it and submit the form again.', 'jet-form-builder' ),
		);

		return $messages;
	}

	/**
	 * Preserve the legacy no-post sentinel without turning -1 into post 1.
	 *
	 * @param mixed $value ID from the renderer or the submitted core field.
	 * @return int|null
	 */
	private static function normalize_id( $value ) {
		if ( -1 === $value || '-1' === $value ) {
			return 0;
		}

		if ( is_int( $value ) ) {
			return $value >= 0 ? $value : null;
		}

		return is_string( $value ) && preg_match( '/^[0-9]+$/D', $value ) ? (int) $value : null;
	}
}
