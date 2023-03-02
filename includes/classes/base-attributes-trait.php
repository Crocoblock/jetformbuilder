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
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
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

		foreach ( $attrs as $attr => $value ) {
			if ( is_array( $value ) ) {
				$value = implode( ' ', $value );
			}
			$response .= sprintf( ' %1$s="%2$s"', $attr, esc_attr( $value ) );
		}

		return $response;
	}

	public function get_attributes_string() {
		$response = $this->get_attributes_string_save();
		$this->reset_attributes();

		return $response;
	}

}
