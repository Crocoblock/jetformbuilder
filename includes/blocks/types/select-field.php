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
			'select' => '.jet-form-builder__field-wrap select',
			'list-wrapper' => '.jet-form-builder__fields-group',
		);
	}

	public function add_style_manager_options() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'content_style',
				'initialOpen' => true,
				'title'       => __( 'Content', 'jet-form-builder' )
			]
		);
		$this->controls_manager->add_control( [
			'id'           => 'select_width',
			'type'         => 'range',
			'label'        => __( 'Select Width (%)', 'jet-form-builder' ),
			'unit'         => '%',
			'min'          => 10,
			'max'          => 100,
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['select'] => 'width: {{VALUE}}{{UNIT}}; max-width: {{VALUE}}{{UNIT}}',
			],
			'attributes'   => [
				'default' => 50,
			]
		] );


		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'select_style',
				'title' => __( 'Select', 'jet-forms-builder' )
			]
		);


		$this->controls_manager->add_control( [
			'id'                  => 'item_typography',
			'type'                => 'typography',
			'disable_line_height' => true,
			'css_selector'        => [
				'{{WRAPPER}} ' . $this->css_scheme['select']         => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				// for editor
				'{{WRAPPER}} .components-base-control__field select' => 'min-height: 2em;'
			],
		] );


		$this->controls_manager->add_control( [
			'id'           => 'item_normal_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'attributes'   => [
				'default' => '',
			],
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['select'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'attributes'   => [
				'default' => '',
			],
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
	 * Returns icon class name
	 *
	 * @return [type] [description]
	 */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
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
