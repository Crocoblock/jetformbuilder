<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Select_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Select_Field extends Base {

	use Base_Select_Radio_Check;

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Select Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'select-field';
	}

	public function get_css_scheme() {
		return array(
			'select'         => '.jet-form-builder__field-wrap select',
			'list-wrapper'   => '.jet-form-builder__fields-group',
			'select-wrapper' => '.jet-form-builder__field-wrap',
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'select_style',
				'title' => __( 'Select', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'select_width',
			'type'         => 'range',
			'separator'    => 'after',
			'label'        => __( 'Select Width', 'jet-form-builder' ),
			'units'        => [
				[
					'value'     => '%',
					'intervals' => [
						'step' => 1,
						'min'  => 10,
						'max'  => 100,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['select-wrapper'] => 'width: {{VALUE}}%; max-width: {{VALUE}}%',
			],
			'attributes'   => array(
				'default' => array(
					'value' => 50
				),
			),
		] );

		$this->controls_manager->add_control( array(
			'id'           => 'item_padding',
			'type'         => 'dimensions',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['select']                                                                                                             => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				'{{WRAPPER}} .jet-form-builder__field-wrap div.components-input-control__backdrop.components-input-control__backdrop.components-input-control__backdrop' => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
		) );

		$this->controls_manager->add_control( [
			'id'                  => 'item_typography',
			'type'                => 'typography',
			'separator'           => 'after',
			'disable_line_height' => true,
			'css_selector'        => [
				'{{WRAPPER}} ' . $this->css_scheme['select']         => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				// for editor
				'{{WRAPPER}} .components-base-control__field select' => 'min-height: 2em;'
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['select']                                                                                                             => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				'{{WRAPPER}} .jet-form-builder__field-wrap div.components-input-control__backdrop.components-input-control__backdrop.components-input-control__backdrop' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['select'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['select'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();
	}

	public function get_style_attributes() {
		return array(
			'select_width'                 => [
				'type' => 'object',
			],
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
	 * Returns current block render
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Select_Field_Render( $this ) )->render();
	}

	/**
	 * Register blocks specific JS variables
	 *
	 * @param  [type] $editor [description]
	 * @param  [type] $handle [description]
	 *
	 * @return [type]         [description]
	 */
	public function block_data( $editor, $handle ) {

		wp_localize_script(
			$handle,
			'JetFormSelectFieldData',
			$this->get_local_data_check_radio_select()
		);
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return $this->get_attributes_check_radio_select();
	}

}
