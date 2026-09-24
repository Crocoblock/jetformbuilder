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

	const CSS_VAR_SLIDER_SIZE  = '--jet-fb__range-field-slider--size';
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

	/**
	 * Initialize style manager for the block.
	 *
	 * @param object $style_manager Style manager instance.
	 */
	public function maybe_init_style_manager( $style_manager ) {
		parent::maybe_init_style_manager( $style_manager );

		add_filter( 'render_block_data', array( $this, 'normalize_legacy_style_units' ) );
	}

	/**
	 * Add pixels to unitless range styles saved by 3.6.0.
	 *
	 * @param array $parsed_block Parsed block data.
	 * @return array
	 */
	public function normalize_legacy_style_units( $parsed_block ) {

		if ( $this->block_name() !== ( $parsed_block['blockName'] ?? '' ) ) {
			return $parsed_block;
		}

		$styles = $parsed_block['attrs']['crocoblock_styles'] ?? null;
		if ( ! is_array( $styles ) ) {
			return $parsed_block;
		}

		foreach ( array( 'range_height', 'slider_size' ) as $style_key ) {
			if ( isset( $styles[ $style_key ] ) && is_numeric( $styles[ $style_key ] ) ) {
				$styles[ $style_key ] .= 'px';
			}
		}

		$parsed_block['attrs']['crocoblock_styles'] = $styles;

		return $parsed_block;
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


	public function jsm_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'          => 'section_range_style',
				'initialOpen' => false,
				'title'       => __( 'Range', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'range_width',
				'type'         => 'range',
				'label'        => __( 'Width', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => '%',
						'intervals' => array(
							'step' => 1,
							'min'  => 1,
							'max'  => 100,
						),
					),
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 1000,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['wrapper'] => 'max-width: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 100,
						'unit'  => '%',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'range_height',
				'type'         => 'range',
				'label'        => __( 'Range Height', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 1,
							'max'  => 20,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}}' => self::CSS_VAR_RANGE_HEIGHT . ': {{VALUE}}{{UNIT}}',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 5,
						'unit'  => 'px',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'range_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Color', 'jet-form-builder' ),
				'css_selector' => $this->style_range( 'background-color: {{VALUE}}' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#e3ddd8',
					),
				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'          => 'section_slider_style',
				'initialOpen' => false,
				'title'       => __( 'Slider', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'slider_size',
				'type'         => 'range',
				'label'        => __( 'Size', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 1,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}}' => self::CSS_VAR_SLIDER_SIZE . ': {{VALUE}}{{UNIT}}',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 18,
						'unit'  => 'px',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'slider_background_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Color', 'jet-form-builder' ),
				'css_selector' => $this->style_slider( 'background-color: {{VALUE}}' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#ccc',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'slider_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => $this->style_slider( 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};' ),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'          => 'section_values_style',
				'initialOpen' => false,
				'title'       => __( 'Values', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'values_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'values_color',
				'type'         => 'color-picker',
				'label'        => __( 'Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['range-values'] => 'color: {{VALUE}}',
				),
			)
		);

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
