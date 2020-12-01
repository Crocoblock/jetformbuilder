<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Text_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Text_Field extends Base {

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Text Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'text-field';
	}

	public function get_css_scheme() {
		return array(
			'field'   => '.jet-form-builder__field-wrap input',
			'wrapper' => '.jet-form-builder__field-wrap',
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'field_style',
				'title' => __( 'Text Input', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'item_typography',
			'type'         => 'typography',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

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
				'{{WRAPPER}} ' . $this->css_scheme['field'] => 'color: {{VALUE}}',
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
				'{{WRAPPER}} ' . $this->css_scheme['field'] => 'background-color: {{VALUE}}',
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
		return ( new Text_Field_Render( $this ) )->render();
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
			'JetFormTextFieldData',
			array(
				'field_types_list'       => array(
					array(
						'value' => 'text',
						'label' => __( 'Text', 'jet-form-builder' )
					),
					array(
						'value' => 'email',
						'label' => __( 'Email', 'jet-form-builder' )
					),
					array(
						'value' => 'url',
						'label' => __( 'Url', 'jet-form-builder' )
					),
					array(
						'value' => 'tel',
						'label' => __( 'Tel', 'jet-form-builder' )
					),
					array(
						'value' => 'password',
						'label' => __( 'Password', 'jet-form-builder' )
					),
				),
				'mask_types_list'        => array(
					array(
						'value' => '',
						'label' => __( 'Default', 'jet-form-builder' )
					),
					array(
						'value' => 'datetime',
						'label' => __( 'Datetime', 'jet-form-builder' )
					),
				),
				'mask_visibilities_list' => array(
					array(
						'value' => 'always',
						'label' => __( 'Always', 'jet-form-builder' )
					),
					array(
						'value' => 'hover',
						'label' => __( 'On Hover', 'jet-form-builder' )
					),
					array(
						'value' => 'focus',
						'label' => __( 'On Focus', 'jet-form-builder' )
					),
				),
				'mask_placeholders_list' => array(
					array(
						'value' => '_',
						'label' => '_'
					),
					array(
						'value' => '-',
						'label' => '-'
					),
					array(
						'value' => '*',
						'label' => '*'
					),
					array(
						'value' => '•',
						'label' => '•'
					),
				),
				'help_messages'          => array(
					'input_mask_default' => __( 'Examples: (999) 999-9999 - static mask, 9-a{1,3}9{1,3} - mask with dynamic syntax 
                        Default masking definitions: 9 - numeric, a - alphabetical, * - alphanumeric',
						'jet-form-builder'
					),
					'input_mask_datetime_link' => 'https://github.com/RobinHerbots/Inputmask/blob/5.x/README_date.md',
				),
			)
		);
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'field_type'        => array(
				'type'    => 'string',
				'default' => 'text',
			),
			'enable_input_mask' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'mask_type'         => array(
				'type'    => 'string',
				'default' => '',
			),
			'input_mask'        => array(
				'type'    => 'string',
				'default' => '',
			),
			'mask_visibility'   => array(
				'type'    => 'string',
				'default' => 'always',
			),
			'mask_placeholder'  => array(
				'type'    => 'string',
				'default' => '_',
			),
			'minlength'         => array(
				'type'    => 'string',
				'default' => '',
			),
			'maxlength'         => array(
				'type'    => 'string',
				'default' => '',
			),
		);
	}

}
