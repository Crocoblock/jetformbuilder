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
		return '-row .%1$s__calculated-field, {{WRAPPER}} .%1$s-row .%1$s__calculated-field--child';
	}

	public function additional_selectors_for_controls() {
		return array(
			'input_alignment' => array(
				'options'      => array(
					'flex-start' => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center'     => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'flex-end'   => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'input' ) => 'justify-content: {{VALUE}};',
				),

			),
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

	public function render_row_layout() {
		return false;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$is_hidden = $this->block_attrs['calc_hidden'] ?? false;

		if ( $is_hidden ) {
			return ( new Calculated_Field_Render( $this ) )->render_without_layout();
		}

		return implode(
			"\n",
			array(
				$this->start_form_row( true ),
				( new Calculated_Field_Render( $this ) )->render(),
				$this->end_form_row( true ),
			)
		);
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'JetFormCalculatedField', apply_filters( "jet-form-builder/field-data/{$this->get_name()}", array(
			'field_desc' => __( "
			Set math formula to calculate field value.<br/>
			For example:<br/><br/>
			%FIELD::quantity%*%META::price%<br/><br/>
			Where:<br/>
			- %FIELD::quantity% - macro for form field value. \"quantity\" - is a field name to get value from<br/>
			- %META::price% - macro for current post meta value. \"price\" - is a meta key to get value from<br/><br/>
		", 'jet-form-builder' )
		) ) );
	}

}
