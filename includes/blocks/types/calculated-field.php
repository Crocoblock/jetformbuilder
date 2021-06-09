<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Calculated_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Calculated_Field extends Base {

	public function general_style_unregister() {
		return array( 'required' );
	}


	public function get_field_input() {
		return '-row .jet-form-builder__calculated-field, {{WRAPPER}} .%s-row .jet-form-builder__calculated-field--child';
	}

	public function additional_selectors_for_controls() {
		return array(
			'input_alignment' => array(
				'options'      => [
					'flex-start'   => [
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					],
					'center' => [
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					],
					'flex-end'  => [
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					],
				],
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['input'] => 'justify-content: {{VALUE}};',
				),

			)
		);
	}


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'calculated-field';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Calculated_Field_Render( $this ) )->render();
	}

}
