<?php


namespace JFB_Modules\Rich_Content;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Carries macro -> token replacements for a single top-level `rich()` /
 * `rich_trusted()` / `rich_without_preset()` invocation.
 *
 * Passed as an object (not an array) through the `jet-form-builder/rich-content`
 * filter chain so `apply_submit_macros()` can hand tokens to `apply_shortcodes()`
 * on the same pass: WordPress copies array filter arguments by value, but an
 * object is shared by handle, so mutations made by one callback are visible to
 * the next without any extra plumbing.
 *
 * Each outer call creates its own instance (see Module::rich() and friends), so
 * tokens from one invocation never leak into - or get resolved by - a nested
 * invocation triggered from inside a macro/preset/shortcode callback.
 *
 * @see Module::apply_submit_macros()
 * @see Module::apply_shortcodes()
 */
class Macro_Runtime_Values {

	private $values = array();

	public function set( string $token, string $value ) {
		$this->values[ $token ] = $value;
	}

	public function all(): array {
		return $this->values;
	}

	public function is_empty(): bool {
		return empty( $this->values );
	}
}
