<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Range_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Range_Field extends Base {

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Range Field';
	}

	public function get_css_scheme() {
		return array(
			'slider'      => '.jet-form-builder__field-wrap .components-range-control__slider',
			'slider-root' => '.jet-form-builder__field-wrap .components-range-control__root',
			'front-field' => '.jet-form-builder__field-wrap input.range-field',
			'wrapper'     => '.jet-form-builder__field-wrap',
		);
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'range-field';
	}

	public function get_style_attributes() {
		return array(
			'range_width' => array(
				'type' => 'object'
			),

			'range_background_color' => [
				'type'    => 'object',
			],
		
			'slider_background_color' => [
				'type'    => 'object',
			],
			

			'values_typography' => [
				'type'    => 'object',
			],
			'values_color' => [
				'type'    => 'string',
				'default' => '',
			],
			'values_margin' => [
				'type'    => 'object',
				'default' => '',
			],
			'values_alignment' => [
				'type'    => 'string',
				'default' => 'left',
			],
		);
	}

	
	public function add_style_manager_options(){
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'section_range_style',
				'initialOpen' => false,
				'title'       => __( 'Range', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control([
			'id'        => 'range_width',
			'type'      => 'range',
			'label'     => __( 'Width', 'jet-form-builder' ),
			'separator' => 'after',
			'unit'      => '%',
			'min'       => 1,
			'max'       => 100,
			'step'      => 1,
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['slider-root'] => 'width: {{VALUE}}{{UNIT}};',
				// front
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'width: {{VALUE}}{{UNIT}};',
			],
			'attributes' => [
				'default' => array(
					'value' => 100
				),
			]
		]);

		

		$this->controls_manager->add_control([
			'id'       => 'range_background_color',
			'type'     => 'color-picker',
			'label'     => __( 'Color', 'jet-smart-filters' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-webkit-slider-runnable-track' => 'background-color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-moz-range-track' => 'background-color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-ms-track' => 'background-color: {{VALUE}}',
			),
			'attributes' => array(
				'default' => array(
					'value' => '#e3ddd8'
				)
			)
		]);

		$this->controls_manager->add_control([
			'id'         => 'range_border',
			'type'       => 'border',
			'label'       => __( 'Border', 'jet-form-builder' ),
			'css_selector'  => array(
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-webkit-slider-runnable-track' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-moz-range-track' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-ms-track' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		]);

		
		$this->controls_manager->end_section();



		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'section_slider_style',
				'initialOpen' => false,
				'title'       => __( 'Slider', 'jet-form-builder' )
			]
		);
		
		$this->controls_manager->add_control([
			'id'       => 'slider_background_color',
			'type'     => 'color-picker',
			'label'     => esc_html__( 'Color', 'jet-smart-filters' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-webkit-slider-thumb' => 'background-color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-moz-range-thumb' => 'background-color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-ms-thumb' => 'background-color: {{VALUE}}',
			),
			'attributes' => array(
				'default' => array(
					'value' => '#ccc'
				)
			)
		]);

		$this->controls_manager->add_control([
			'id'         => 'slider_border',
			'type'       => 'border',
			'label'       => __( 'Border', 'jet-form-builder' ),
			'css_selector'  => array(
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-webkit-slider-thumb' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-moz-range-thumb' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-ms-thumb' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		]);
	

		
		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'section_values_style',
				'initialOpen' => false,
				'title'       => esc_html__( 'Values', 'jet-smart-filters' )
			]
		);

		$this->controls_manager->add_control([
			'id'         => 'values_typography',
			'type'       => 'typography',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		]);

		$this->controls_manager->add_control([
			'id'       => 'values_color',
			'type'     => 'color-picker',
			'label'     => esc_html__( 'Color', 'jet-smart-filters' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'color: {{VALUE}}',
			),
		]);

		$this->controls_manager->add_control([
			'id'         => 'values_margin',
			'type'       => 'dimensions',
			'label'      => esc_html__( 'Margin', 'jet-smart-filters' ),
			'units'      => array( 'px', '%' ),
			'css_selector'  => array(
				'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
			'separator'    => 'before',
		]);

		$this->controls_manager->add_control([
			'id'        => 'values_alignment',
			'type'      => 'choose',
			'label'     => esc_html__( 'Alignment', 'jet-smart-filters' ),
			'separator'    => 'before',
			'options'   =>[
				'left'    => [
					'shortcut' => esc_html__( 'Left', 'jet-smart-filters' ),
					'icon'  => 'dashicons-editor-alignleft',
				],
				'center'    => [
					'shortcut' => esc_html__( 'Center', 'jet-smart-filters' ),
					'icon'  => 'dashicons-editor-aligncenter',
				],
				'right'    => [
					'shortcut' => esc_html__( 'Right', 'jet-smart-filters' ),
					'icon'  => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'text-align: {{VALUE}};',
			],
			'attributes' => [
				'default' => 'left',
			]
		]);

		$this->controls_manager->end_section();
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
		return ( new Range_Field_Render( $this ) )->render();
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'min'    => array(
				'type'    => 'number',
				'default' => ''
			),
			'max'    => array(
				'type'    => 'number',
				'default' => ''
			),
			'step'   => array(
				'type'    => 'number',
				'default' => ''
			),
			'prefix' => array(
				'type'    => 'string',
				'default' => ''
			),
			'suffix' => array(
				'type'    => 'string',
				'default' => ''
			),
		);
	}

	/**
	 * Returns global attributes list
	 * P.S. here was removed `placeholder` & `required`
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array(
			'label'      => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Label', 'jet-form-builder' )
				),
			),
			'name'       => array(
				'type'    => 'string',
				'default' => 'field_name',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Name', 'jet-form-builder' )
				),
			),
			'desc'       => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Description', 'jet-form-builder' )
				),
			),
			'default'    => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'dynamic_text',
					'label' => __( 'Default Value', 'jet-form-builder' )
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
			'visibility' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'    => 'select',
					'label'   => __( 'Field Visibility', 'jet-form-builder' ),
					'options' => array(
						array(
							'value' => 'all',
							'label' => __( 'For all', 'jet-form-builder' ),
						),
						array(
							'value' => 'logged_id',
							'label' => __( 'Only for logged in users', 'jet-form-builder' ),
						),
						array(
							'value' => 'not_logged_in',
							'label' => __( 'Only for NOT-logged in users', 'jet-form-builder' ),
						),
					),
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
