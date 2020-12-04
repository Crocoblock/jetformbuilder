<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Heading_Field_Render;
use Jet_Form_Builder\Blocks\Render\Submit_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Submit_Field extends Base {

	public function __construct() {
		$this->unregister_attribute( 'required' );

		parent::__construct();
	}

	public function general_style_attributes() {
		return array();
	}

	public function general_style_manager_options() {
	}

	public function get_css_scheme() {
		return array(
			'button' => '.jet-form-builder__submit',
			'wrap'   => '.jet-form-builder__submit-wrap'
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'submit_style',
				'title' => __( 'Submit Button', 'jet-forms-builder' )
			]
		);

		$this->add_margin_padding(
			$this->css_scheme['wrap'],
			array(
				'padding' => 'submit_padding'
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'submit_alignment',
			'type'         => 'choose',
			'separator'    => 'after',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'options'      => [
				'flex-start' => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center'     => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'flex-end'   => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['wrap'] => 'align-items: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'flex-start'
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_background_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();
	}

	public function get_style_attributes() {
		return array(
			'submit_typography'       => array(
				'type' => 'object',
			),
			'submit_typography_color' => array(
				'type' => 'object',
			),
			'submit_background_color' => array(
				'type' => 'object',
			),
			'submit_border'           => array(
				'type' => 'object',
			),
			'submit_alignment'        => array(
				'type' => 'object',
			),
		);
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Submit Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'submit-field';
	}

	/**
	 * Returns icon class name
	 *
	 * @return [type] [description]
	 */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Submit_Field_Render( $this ) )->render();
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array();
	}

	public function get_supports() {
		return array(
			'multiple' => false
		);
	}

	/**
	 * Returns global attributes list
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array(
			'label'      => array(
				'type'    => 'string',
				'default' => 'Submit',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Label', 'jet-form-builder' )
				),
			),
			'name'       => array(
				'type'    => 'string',
				'default' => 'Submit',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Name', 'jet-form-builder' ),
					'show' => false,
				),
			),
			'add_prev'   => array(
				'type'     => 'boolean',
				'default'  => false,
				'advanced' => array(
					'type'  => 'toggle',
					'label' => __( 'Add Prev Page Button', 'jet-form-builder' )
				),
			),
			'prev_label' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'      => 'text',
					'label'     => __( 'Prev Page Button Label', 'jet-form-builder' ),
					'condition' => 'add_prev'
				),
			),
			'class_name' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'  => 'text',
					'label' => __( 'CSS Class Name', 'jet-form-builder' )
				),
			),
		);
	}

}
