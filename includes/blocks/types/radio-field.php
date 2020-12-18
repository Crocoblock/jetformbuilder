<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Radio_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Radio_Field extends Base {

	use Base_Select_Radio_Check;

	public function __construct() {
		$this->unregister_attribute( 'placeholder' );

		parent::__construct();
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Radio Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'radio-field';
	}

	public function get_css_scheme() {
		return array(
			// Active
			'item'         => '.components-radio-control__option',
			// Active
			'option-label' => '.components-radio-control__option label',
			'front-label'  => '.jet-form-builder__field-wrap label',
			'front-wrap'   => '.jet-form-builder__field-wrap.checkradio-wrap',

			'radio'        => '.components-radio-control__option input',

			// Active
			'field'        => '.components-base-control__field',
			'list-wrapper' => '.jet-form-builder__fields-group',
		);
	}

	public function add_style_manager_options() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'items_style',
				'initialOpen' => true,
				'title'       => __( 'Items', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'filters_position',
			'type'         => 'choose',
			'label'        => __( 'Filters Position', 'jet-form-builder' ),
			'separator'    => 'after',
			'options'      => [
				'inline-block' => [
					'shortcut' => __( 'Line', 'jet-form-builder' ),
					'icon'     => 'dashicons-ellipsis',
				],
				'block'        => [
					'shortcut' => __( 'Column', 'jet-form-builder' ),
					'icon'     => 'dashicons-menu-alt',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['item']       => 'display: {{VALUE}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] => 'display: {{VALUE}};',
			],
			'attributes'   => [
				'default' => [
					'value' => 'block'
				],
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'items_alignment',
			'type'         => 'choose',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'separator'    => 'after',
			'options'      => [
				'left'   => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center' => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'right'  => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['list-wrapper'] => 'text-align: {{VALUE}};',
			],
		] );


		$this->controls_manager->add_control( [
			'id'           => 'items_space_between',
			'type'         => 'range',
			'label'        => __( 'Space Between', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 50,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['item'] . ':not(:last-child)'        => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
				'{{WRAPPER}} ' . $this->css_scheme['item'] . ':not(:first-child)'       => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
				'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] . ':not(:last-child)'  => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
				'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] . ':not(:first-child)' => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
			],
			'attributes'   => [
				'default' => [
					'value' => 10
				],
			]
		] );

		$this->controls_manager->add_responsive_control( [
			'id'           => 'horisontal_layout_description',
			'type'         => 'range',
			'label'        => __( 'Horizontal Offset', 'jet-form-builder' ),
			'help'         => __( 'Horizontal Offset control works only with Line Filters Position', 'jet-form-builder' ),
			'separator'    => 'none',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 40,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['item']       => 'margin-right: {{VALUE}}{{UNIT}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] => 'margin-right: {{VALUE}}{{UNIT}}',
			],
			'attributes'   => [
				'default' => [
					'value' => 10,
				]
			]
		] );


		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'item_style',
				'title' => __( 'Item', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'show_decorator',
			'type'         => 'toggle',
			'separator'    => 'after',
			'label'        => __( 'Show Radio', 'jet-forms-builder' ),
			'attributes'   => [
				'default' => [
					'value' => true
				],
			],
			'unit'         => 'px',
			'return_value' => [
				'true'  => 'inline-block',
				'false' => 'none',
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['radio']          => 'display: {{VALUE}};',
				'{{WRAPPER}} ' . $this->css_scheme['item'] . ' span' => 'display: {{VALUE}};',

				'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] . ' span::before' => 'display: {{VALUE}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'item_size_decorator',
			'type'         => 'range',
			'label'        => __( 'Size Radio', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 50,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] . ' span::before' => 'font-size: {{VALUE}}{{UNIT}};',
				'{{WRAPPER}} ' . $this->css_scheme['item'] . ' input'              => 'height: {{VALUE}}{{UNIT}}; width: {{VALUE}}{{UNIT}}; min-width: {{VALUE}}{{UNIT}};',
			],
		] );


		$this->controls_manager->add_control( [
			'id'           => 'item_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['option-label'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				'{{WRAPPER}} ' . $this->css_scheme['front-label']  => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );


		$this->controls_manager->add_control( [
			'id'           => 'item_normal_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['option-label'] => 'color: {{VALUE}}',
				'{{WRAPPER}} ' . $this->css_scheme['front-label']  => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'    => 'item_normal_background_color',
			'type'  => 'color-picker',
			'label' => __( 'Background Color', 'jet-form-builder' ),

			'css_selector' => array(
				// editor
				'{{WRAPPER}} ' . $this->css_scheme['option-label']            => 'background-color: {{VALUE}}',
				// front
				'{{WRAPPER}} ' . $this->css_scheme['front-label'] . ' > span' => 'background-color: {{VALUE}}',

			),
		] );

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'radio_style',
				'title' => __( 'Radio', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'radio_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'radio_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'radio_normal_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#FFFFFF'
				),
			),
			'css_selector' => array(
				// editor
				'{{WRAPPER}} ' . $this->css_scheme['radio']                           => 'background-color: {{VALUE}}',
				// front
				'{{WRAPPER}} ' . $this->css_scheme['front-label'] . ' > span::before' => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'item_checked_styles',
				'title' => __( 'Checked', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'radio_checked_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#398ffc'
				),
			),
			'css_selector' => array(
				// editor
				'{{WRAPPER}} ' . $this->css_scheme['radio'] . ':checked'                       => 'background-color: {{VALUE}}',
				// front
				'{{WRAPPER}} ' . $this->css_scheme['front-label'] . ' :checked + span::before' => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();
	}

	public function get_style_attributes() {
		return array(
			'filters_position'               => [
				'type' => 'object',
			],
			'horisontal_layout_description'  => [
				'type' => 'object',
			],
			'filters_list_alignment'         => [
				'type' => 'object',
			],
			'items_space_between'            => [
				'type' => 'object',
			],
			'show_decorator'                 => [
				'type' => 'object',
			],
			'item_typography'                => [
				'type' => 'object',
			],
			'item_normal_color'              => [
				'type' => 'object',
			],
			'item_normal_background_color'   => [
				'type' => 'object',
			],
			'radio_normal_background_color'  => array(
				'type' => 'object'
			),
			'radio_checked_background_color' => array(
				'type' => 'object'
			),
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
		return ( new Radio_Field_Render( $this ) )->render();
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
			'JetFormRadioFieldData',
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
