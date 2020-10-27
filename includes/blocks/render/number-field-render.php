<?php
namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Number_Field_Render extends Base {

	public function get_name() {
		return 'number-field';
	}

	public function render() {

		$args = $this->args;
		$defaults = array(
			'field_value' => '',
			'name'        => '',
		);

		$sanitized_args = array();

		foreach ( $args as $key => $value ) {
			$sanitized_args[ $key ] = $value;
		}

		$args          = wp_parse_args( $sanitized_args, $defaults );
		$template_name = $this->get_name();
		$template      = $this->get_template( 'fields/' . $template_name . '.php' );

	}

}
