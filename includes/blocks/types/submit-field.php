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
			'button' => 'button.jet-form-builder__submit',
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
				'padding' => array(
					'id'        => 'submit_padding',
					'separator' => 'after',
				)
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
			'id'           => 'submit_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'submit_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'submit_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

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
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'submit_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'submit_hover_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();

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
					'show'  => false,
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
