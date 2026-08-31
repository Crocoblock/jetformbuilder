<?php


namespace Jet_Form_Builder\Presets\Types;

use Jet_Form_Builder\Exceptions\Plain_Default_Exception;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Sources\Base_Source;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Base_Preset
 *
 * @package Jet_Form_Builder\Presets\Types
 */
abstract class Base_Preset {

	public $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);
	public $data     = array();

	/**
	 * Set by the call site that built this preset, NOT by the preset data.
	 *
	 * @see Base_Preset::trust_restriction_flag()
	 * @var bool|null
	 */
	protected $trusted_origin = null;

	abstract public function get_fields_map();

	/**
	 * Slug to be able to overwrite preset classes.
	 *
	 * @return string
	 */
	abstract public function get_slug(): string;

	abstract public function is_unique(): bool;

	/**
	 * @param $args
	 *
	 * @throws Plain_Default_Exception
	 */
	abstract public function is_active_preset( $args );

	/**
	 * Whether this preset instance's $data originates from a trusted,
	 * admin-authored source (post meta saved by the form editor, gated by
	 * its own `edit_post` capability check) rather than from a
	 * request-influenced string (e.g. a submitted field value passed
	 * through rich-content).
	 *
	 * Only such presets may honour an explicit `restricted: false` opt-out
	 * of the permission check in Base_Source::has_permission() - see
	 * issues-tracker #20359.
	 *
	 * NOTE: trust is a property of the CALL SITE, not of the preset class.
	 * Dynamic_Preset is used both for trusted block attributes (a field's
	 * "Default Value", stored in the form's post meta) and for untrusted
	 * runtime strings (Rich_Content parsing a submitted value). Deciding by
	 * class alone would either reopen the vulnerability or break every
	 * field whose author deliberately switched "Restrict access" off - so
	 * the decision is delegated to whoever constructs the preset.
	 *
	 * @return bool
	 */
	public function trusts_restriction_flag(): bool {
		if ( is_null( $this->trusted_origin ) ) {
			return $this->trusts_restriction_flag_by_default();
		}

		return $this->trusted_origin;
	}

	/**
	 * Fallback used when no call site declared the origin explicitly.
	 * Secure by default: untrusted unless a preset type knows its $data can
	 * only ever come from admin-authored storage (see General_Preset).
	 *
	 * @return bool
	 */
	protected function trusts_restriction_flag_by_default(): bool {
		return false;
	}

	/**
	 * Declare where this preset's $data came from.
	 *
	 * Call with `true` ONLY from a call site that can guarantee the data is
	 * admin-authored (i.e. read from the form's own post meta / block
	 * attributes, which require `edit_post` to write). Never call it with a
	 * value derived from the preset data itself or from the request.
	 *
	 * @param bool $trusted
	 *
	 * @return $this
	 */
	public function trust_restriction_flag( bool $trusted ): Base_Preset {
		$this->trusted_origin = $trusted;

		return $this;
	}

	public function set_init_data( $data = array() ): Base_Preset {
		if ( ! is_array( $data ) ) {
			$data = array();
		}
		if ( empty( $this->data ) ) {
			$this->data = $data;
		} else {
			$this->data = array_merge( $this->data, $data );
		}
		return $this;
	}

	/**
	 * @param $args array - Field attributes
	 *
	 * @return Base_Source
	 * @throws Preset_Exception
	 */
	public function get_source( $args = array() ): Base_Source {
		$from = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];

		$source = Preset_Manager::instance()->get_source_by_type( $from );

		// Always set programmatically, never taken from $this->data itself,
		// so an attacker can't smuggle this key through the same JSON/array
		// that carries `restricted`.
		$data = $this->data;

		$data['_trusts_restriction_flag'] = $this->trusts_restriction_flag();

		return $source->init_source(
			$this->get_fields_map(),
			$data,
			$args
		)->maybe_query_source()->after_init();
	}

	/**
	 * Reset $data instead of merging into it.
	 *
	 * Merging is what set_init_data() does (see above), and callers that
	 * build a preset up in several steps rely on it. But preset instances
	 * are not always fresh - Preset_Manager::general() hands out one shared
	 * General_Preset for the whole request - so anything that loads a NEW
	 * form's config into an existing instance must clear the old config
	 * first. Otherwise keys the new config doesn't set (notably
	 * `restricted`) survive the merge and are evaluated against the wrong
	 * form. See issues-tracker #20359.
	 *
	 * NOTE: this resets the preset DATA only, not $trusted_origin. Trust is a
	 * property of the call site, declared before the data is loaded (see
	 * jet_fb_parse_dynamic_trusted(), which sets it and then calls
	 * parse_json() - and parse_json() resets data on the way in). Clearing it
	 * here would silently discard that declaration.
	 *
	 * Call sites that reuse one instance for *differently trusted* payloads
	 * must re-declare trust themselves via trust_restriction_flag().
	 *
	 * @param array $data
	 *
	 * @return $this
	 */
	public function reset_init_data( $data = array() ): Base_Preset {
		$this->data = array();

		return $this->set_init_data( $data );
	}

	/**
	 * @deprecated Use trust_restriction_flag() instead.
	 *
	 * The `_check_restriction` key this used to set is no longer read
	 * anywhere: Base_Source::has_permission() evaluates can_get_preset()
	 * unless the call site declared the preset data trusted AND the source
	 * allows the bypass. Historically this method was the *only* thing that
	 * turned the permission check on at all, which is precisely how
	 * issues-tracker #20359 happened - every other consumer silently ran
	 * unchecked. It is now a no-op kept for third-party callers.
	 *
	 * Do not resurrect `_check_restriction` handling in Base_Source without
	 * re-reading issues-tracker #20359 first.
	 *
	 * @param bool $check Ignored.
	 *
	 * @noinspection PhpUnusedParameterInspection
	 */
	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function set_check_restriction( bool $check ) {
		_doing_it_wrong(
			esc_html( __METHOD__ ),
			'Preset permission checks are always enabled. Use trust_restriction_flag() to declare a trusted origin.',
			esc_html( JET_FORM_BUILDER_VERSION )
		);
	}

}
