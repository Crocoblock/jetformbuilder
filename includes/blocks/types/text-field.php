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
			'field'   => '__field-wrap input',
			'wrapper' => '__field-wrap',
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'field_style',
				'title' => __( 'Text Input', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'item_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				$this->selector( 'field' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

			],
		] );

		$this->add_margin_padding(
			$this->selector( 'field' ),
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
				$this->selector( 'field' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#000000'
				),
			),
			'css_selector' => array(
				$this->selector( 'field' ) => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_normal_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#FFFFFF'
				),
			),
			'css_selector' => array(
				$this->selector( 'field' ) => 'background-color: {{VALUE}}',
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
					'input_mask_default'       => __( 'Examples: (999) 999-9999 - static mask, 9-a{1,3}9{1,3} - mask with dynamic syntax 
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
