<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Checkbox_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Checkbox_Field extends Base {

	use Base_Select_Radio_Check;


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'checkbox-field';
	}

	public function get_css_scheme() {
		return array(
			'item'            => '.jet-form-builder__field-wrap.checkboxes-wrap',
			'option-label'    => '.jet-form-builder__field-wrap label',
			'checkbox-editor' => '.jet-form-builder__field-wrap .components-checkbox-control__input-container',
			'checkbox-front'  => '.jet-form-builder__field-wrap span::before',
			'wrapper'         => '.jet-form-builder__fields-group',
		);
	}

	public function _jsm_register_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'          => 'items_style',
				'initialOpen' => true,
				'title'       => __( 'Items', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'filters_position',
				'type'         => 'choose',
				'label'        => __( 'Filters Position', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'inline-block' => array(
						'shortcut' => __( 'Line', 'jet-form-builder' ),
						'icon'     => 'dashicons-ellipsis',
					),
					'block'        => array(
						'shortcut' => __( 'Column', 'jet-form-builder' ),
						'icon'     => 'dashicons-menu-alt',
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item'] => 'display: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'block',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'items_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'left'   => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'right'  => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['wrapper'] => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'items_space_between',
				'type'         => 'range',
				'label'        => __( 'Space Between', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 50,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item'] . ':not(:last-child)'  => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
					'{{WRAPPER}} ' . $this->css_scheme['item'] . ':not(:first-child)' => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 10,
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'horisontal_layout_description',
				'type'         => 'range',
				'label'        => __( 'Horizontal Offset', 'jet-form-builder' ),
				'help'         => __( 'Horizontal Offset control works only with Line Filters Position', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 40,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item'] => 'margin-right: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 0,
					),
				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'item_checkbox_style',
				'title' => __( 'Item', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item'] . ' > .components-base-control__field label' => 'background-color: {{VALUE}}',
					'{{WRAPPER}} ' . $this->css_scheme['option-label']                                      => 'background-color: {{VALUE}}',

				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'checkbox_style',
				'title' => __( 'Checkbox', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'show_checkbox_decorator',
				'type'         => 'toggle',
				'separator'    => 'after',
				'label'        => __( 'Show Checkbox', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => true,
					),
				),
				'return_value' => array(
					'true'  => 'inline-block',
					'false' => 'none',
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor'] => 'display: {{VALUE}};',
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-front']  => 'display: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'items_size_decorator',
				'type'         => 'range',
				'label'        => __( 'Size Checkbox', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 50,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-front']             => 'font-size: {{VALUE}}{{UNIT}};',
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor']            => 'height: {{VALUE}}{{UNIT}}; width: {{VALUE}}{{UNIT}};',
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor'] . ' input' => 'height: {{VALUE}}{{UNIT}}; width: {{VALUE}}{{UNIT}}; min-width: {{VALUE}}{{UNIT}};',
				),
			)
		);

		$this->controls_manager->start_tabs(
			'style_controls',
			array(
				'id' => 'checkbox_style_tabs',
			)
		);

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'checkbox_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'checkbox_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-front']             => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor'] . ' input' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'checkbox_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor'] . ' input'       => 'background-color: {{VALUE}}',
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] . ' > span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'item_checked_styles',
				'title' => __( 'Checked', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'checkbox_checked_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor'] . ' input:checked'        => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] . ' :checked + span::before' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'checkbox_checked_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#398ffc',
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['checkbox-editor'] . ' input:checked'        => 'background-color: {{VALUE}}',
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] . ' :checked + span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();
	}

	public function expected_preset_type(): array {
		return array( 'array' );
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Checkbox_Field_Render( $this ) )->render();
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
			'JetFormCheckboxFieldData',
			$this->get_local_data_check_radio_select()
		);
	}


}
