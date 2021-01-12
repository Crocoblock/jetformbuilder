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
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Number Field';
	}

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
			'field'       => '.jet-form-builder__field-wrap .components-input-control__input',
			'backdrop'    => 'div.components-input-control__backdrop.components-input-control__backdrop.components-input-control__backdrop',
			'front-field' => '.jet-form-builder__field-wrap input',
			'wrapper'     => '.jet-form-builder__field-wrap',
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'field_style',
				'title' => __( 'Number Input', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'item_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field']       => 'height: inherit; font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->add_margin_padding(
			$this->css_scheme['field'],
			array(
				'padding' => array(
					'id'        => 'item_field_padding',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'item_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} ' . $this->css_scheme['field']       => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} ' . $this->css_scheme['backdrop']    => 'border: unset;',
			),
			'attributes' => array(
				'default' => array(
					'value' => array(
						'borderStyle' => 'solid'
					)
				)
			)
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field']       => 'color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'color: {{VALUE}}',

			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field']       => 'background-color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-field'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();

	}

	public function get_style_attributes() {
		return array(
			'item_typography'              => [
				'type' => 'object',
			],
			'item_normal_color'            => [
				'type' => 'object',
			],
			'item_normal_background_color' => [
				'type' => 'object',
			],
		);
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
			'field_type' => 'number'
		);
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'min'  => array(
				'type'    => 'number',
				'default' => ''
			),
			'max'  => array(
				'type'    => 'number',
				'default' => ''
			),
			'step' => array(
				'type'    => 'number',
				'default' => ''
			),
		);
	}

}
