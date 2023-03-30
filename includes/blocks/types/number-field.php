<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Number_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Number_Field extends Base {

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'number-field';
	}

	public function get_css_scheme() {
		return array(
			'field'              => '.jet-form-builder__field-wrap .components-input-control__input',
			'backdrop'           => 'div.components-input-control__backdrop.components-input-control__backdrop.components-input-control__backdrop',
			'container_backdrop' => '.components-input-control__container.components-input-control__container',
			'front-field'        => '.jet-form-builder__field-wrap input',
			'wrapper'            => '.jet-form-builder__field-wrap',
		);
	}

	public function _jsm_register_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'field_style',
				'title' => __( 'Number Input', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['field']       => 'height: inherit; font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
					'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_field_padding',
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['field']       => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
					'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['front-field']        => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} ' . $this->css_scheme['field']              => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} ' . $this->css_scheme['backdrop']           => 'border: unset;',
					'{{WRAPPER}} ' . $this->css_scheme['container_backdrop'] => 'border-radius:{{RADIUS}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => array(
							'borderStyle' => 'solid',
						),
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['field']       => 'color: {{VALUE}}',
					'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'color: {{VALUE}}',

				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['field']       => 'background-color: {{VALUE}}',
					'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'background-color: {{VALUE}}',
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
		return ( new Number_Field_Render( $this ) )->render();
	}

	/**
	 * Returns block attributes
	 */
	public function get_field_attrs() {
		return array(
			'field_type' => 'number',
		);
	}

}
