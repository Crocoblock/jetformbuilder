<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Attributes_Trait {

	/**
	 * Add attribute
	 *
	 * @param $attr
	 * @param null $value
	 */
	abstract public function add_attribute( $attr, $value = null );

	/**
	 * Reset attributes array
	 */
	abstract public function reset_attributes();

	abstract public function get_all_attrs();

	/**
	 * Render current attributes string
	 *
	 * @return void
	 */
	public function render_attributes_string() {
		$this->render_attributes_string_save();
		$this->reset_attributes();
	}

	public function render_attributes_string_save() {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- every value is escaped with esc_attr() in get_attributes_string_save().
		echo Tools::esc_template_string( $this->get_attributes_string_save() );
	}

	public function get_attributes_string_save() {
		$response = '';
		$attrs    = $this->get_all_attrs();

		if ( $this instanceof Base ) {
			$attrs = apply_filters(
				"jet-form-builder/render/{$this->get_name()}/attributes",
				$attrs,
				$this
			);
		}

		/*
		 * Core do_shortcode() over the page runs a shortcode found in an
		 * attribute value of any tag (the output is kept only for some tags,
		 * but the shortcode runs). Field values, the referrer URL, option
		 * values and similar attributes can hold visitor data, so their square
		 * brackets are encoded; the browser decodes them, values do not change.
		 *
		 * These attributes are left as they are: they hold settings the form
		 * author may write with a shortcode on purpose (a formula, Dynamic
		 * Value, validation rules). Values a preset put into them are marked
		 * where the JSON is built, see Tools::mark_json_brackets().
		 */
		$author_shortcode_attributes = array( 'data-formula', 'data-value', 'data-dynamic-value', 'data-validation-rules' );

		foreach ( $attrs as $attr => $value ) {
			if ( is_array( $value ) ) {
				$value = implode( ' ', $value );
			}
			$value = esc_attr( $value );

			if ( ! in_array( $attr, $author_shortcode_attributes, true ) ) {
				$value = Tools::neutralize_shortcodes( $value );
			}

			$response .= sprintf( ' %1$s="%2$s"', $attr, $value );
		}

		return $response;
	}

	public function get_attributes_string() {
		$response = $this->get_attributes_string_save();
		$this->reset_attributes();

		return $response;
	}

}
