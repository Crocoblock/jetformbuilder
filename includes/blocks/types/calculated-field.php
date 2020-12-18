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

	public function __construct() {
		$this->unregister_attributes(
			array(
				'required',
				'placeholder',
			)
		);

		parent::__construct();
	}

	public function general_style_unregister() {
		return array( 'required' );
	}


	public function get_field_input() {
		return 'div.jet-form-builder-row .jet-form-builder__calculated-field';
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
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Calculated Field';
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

	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetFormCalculatedFieldData', array(
			'help_messages' => array(
				'calc_hidden' => __(
					'Check this to hide calculated field',
					'jet-form-builder'
				),
			),
		) );
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'calc_formula' => array(
				'type'    => 'string',
				'default' => ''
			),
			'precision'    => array(
				'type'    => 'number',
				'default' => 2
			),
			'calc_prefix'  => array(
				'type'    => 'string',
				'default' => ''
			),
			'calc_suffix'  => array(
				'type'    => 'string',
				'default' => ''
			),
			'calc_hidden'  => array(
				'type'    => 'boolean',
				'default' => false
			),
		);
	}

}
