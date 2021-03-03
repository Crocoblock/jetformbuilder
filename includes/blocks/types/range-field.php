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

	const CSS_VAR_SLIDER_SIZE = '--jet-fb__range-field-slider--size';
	const CSS_VAR_RANGE_HEIGHT = '--jet-fb__range-field-range--height';


	public function get_css_scheme() {
		return array(
			'front-field'  => '.jet-form-builder__field-wrap input[type="range"]',
			'range-values' => '.jet-form-builder__field-wrap .jet-form-builder__field-value',
			'wrapper'      => '.jet-form-builder__field-wrap',
		);
	}

	public function general_style_unregister() {
		return array( 'required', 'input' );
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'range-field';
	}

	public function style_slider( $style_line ) {
		return array(
			'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-webkit-slider-thumb' => $style_line,
			'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-moz-range-thumb'     => $style_line,
			'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-ms-thumb'            => $style_line,
		);
	}

	public function style_range( $style_line ) {
		return array(
			'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-webkit-slider-runnable-track' => $style_line,
			'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-moz-range-track'              => $style_line,
			'{{WRAPPER}} ' . $this->css_scheme['front-field'] . '::-ms-track'                     => $style_line,
		);
	}


	public function _jsm_register_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'section_range_style',
				'initialOpen' => false,
				'title'       => __( 'Range', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'range_width',
			'type'         => 'range',
			'label'        => __( 'Width', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => '%',
					'intervals' => [
						'step' => 1,
						'min'  => 1,
						'max'  => 100,
					]
				],
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 1000,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['wrapper'] => 'max-width: {{VALUE}}{{UNIT}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 100,
					'unit'  => '%'
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'range_height',
			'type'         => 'range',
			'label'        => __( 'Range Height', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 1,
						'max'  => 20,
					]
				],
			],
			'css_selector' => array(
				'{{WRAPPER}}' => self::CSS_VAR_RANGE_HEIGHT . ': {{VALUE}}{{UNIT}}',
			),
			'attributes'   => [
				'default' => array(
					'value' => 5
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'range_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Color', 'jet-form-builder' ),
			'css_selector' => $this->style_range( 'background-color: {{VALUE}}' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#e3ddd8'
				)
			)
		] );

		$this->controls_manager->end_section();


		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'section_slider_style',
				'initialOpen' => false,
				'title'       => __( 'Slider', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'slider_size',
			'type'         => 'range',
			'label'        => __( 'Size', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 1,
						'max'  => 100,
					]
				],
			],
			'css_selector' => array( // margin-top: calc( ({{VALUE}}{{UNIT}} - 3px)/-2 );
				'{{WRAPPER}}' => self::CSS_VAR_SLIDER_SIZE . ': {{VALUE}}{{UNIT}}',
			),
			'attributes'   => [
				'default' => array(
					'value' => 18
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'slider_background_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Color', 'jet-form-builder' ),
			'css_selector' => $this->style_slider( 'background-color: {{VALUE}}' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#ccc'
				)
			)
		] );

		$this->controls_manager->add_control( [
			'id'           => 'slider_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => $this->style_slider( 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};' )
		] );


		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'section_values_style',
				'initialOpen' => false,
				'title'       => __( 'Values', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'values_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'values_color',
			'type'         => 'color-picker',
			'label'        => __( 'Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'color: {{VALUE}}',
			),
		] );


		$this->controls_manager->end_section();
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

}
