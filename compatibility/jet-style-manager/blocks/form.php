<?php


namespace JFB_Compatibility\Jet_Style_Manager\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Form_Manager;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Interfaces\Style_Block_It;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Traits\Style_Block_Trait;
use JFB_Compatibility\Jet_Style_Manager\Jet_Style_Manager;

class Form implements Style_Block_It {

	use Style_Block_Trait;

	public function rep_item_id() {
		return Form_Manager::NAMESPACE_FIELDS . 'form-block';
	}

	/**
	 * @throws Repository_Exception
	 */
	public function process_controls() {
		$this->process_form_row();

		$this->process_field_label();
		$this->process_field_required_mark();
		$this->process_field_description();

		$this->process_text_field();
		$this->process_textarea_field();
		$this->process_select_field();
		$this->process_radio_field();
		$this->process_checkbox_field();
		$this->process_repeater_field();

		$form_break = new Form_Break();
		$form_break->set_manager( $this->get_manager() );
		$form_break->set_namespace( $this->get_namespace() );

		$form_break->process_controls();

		$this->process_message_success();
		$this->process_message_error();
	}

	private function process_form_row() {
		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'form_row_style',
				'title' => __( 'Form Row', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'form_row_gap_before',
				'type'         => 'range',
				'label'        => __( 'Gap Before', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					$this->selector( '-row' ) => 'margin-top: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 1,
					),
				),
			)
		);
		$this->get_manager()->add_control(
			array(
				'id'           => 'form_row_gap_after',
				'type'         => 'range',
				'label'        => __( 'Gap After', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					$this->selector( '-row' ) => 'margin-bottom: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 1,
					),
				),
			)
		);

		$this->get_manager()->end_section();
	}

	/**
	 * @throws Repository_Exception
	 */
	private function process_field_label() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'label_style',
				'title' => __( 'Label', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			$module->create_margin(
				$this->selector( '__label' ),
				'label_margin'
			)
		);
		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( '__label' ),
				'label_padding'
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'label_alignment',
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
					$this->selector( '__label' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'label_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__label' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'label_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__label' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'label_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__label' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'label_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__label' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	private function process_field_required_mark() {
		$this->set_css_selector( 'required', '__label-text .%1$s__required' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'required_style',
				'title' => __( 'Required Mark', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'                     => 'required_typography',
				'disable_line_height'    => true,
				'disable_family'         => true,
				'disable_transform'      => true,
				'disable_style'          => true,
				'disable_decoration'     => true,
				'disable_letter_spacing' => true,
				'separator'              => 'after',
				'type'                   => 'typography',
				'css_selector'           => array(
					$this->selector( 'required' ) => 'font-weight: {{WEIGHT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'required_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'required' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'required_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'required' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	/**
	 * @throws Repository_Exception
	 */
	private function process_field_description() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'description_style',
				'title' => __( 'Description', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			$module->create_margin(
				$this->selector( '__label' ),
				'description_margin'
			)
		);
		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( '__label' ),
				'description_padding'
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'description_alignment',
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
					$this->selector( '__desc' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'description_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__desc' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'description_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__desc' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'description_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__desc' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'description_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__desc' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	/**
	 * @throws Repository_Exception
	 */
	private function process_text_field() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );
		$this->set_css_selector( 'field', '__field-wrap input' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'field_style',
				'title' => __( 'Input', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'input_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'field' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( 'field' ),
				'input_padding'
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'input_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'input_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#000000',
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'input_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	/**
	 * @throws Repository_Exception
	 */
	private function process_textarea_field() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );
		$this->set_css_selector( 'field', '__field-wrap textarea' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'textarea_style',
				'title' => __( 'Textarea', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'textarea_height',
				'type'         => 'range',
				'separator'    => 'after',
				'label'        => __( 'Height', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 20,
							'max'  => 1000,
						),
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'height: {{VALUE}}px; min-height: {{VALUE}}px;',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 100,
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'textarea_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'field' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( 'field' ),
				'textarea_padding'
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'textarea_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'textarea_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'textarea_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	private function process_select_field() {
		$this->set_css_selector( 'select', '__field-wrap select' );
		$this->set_css_selector( 'select-wrapper', '__field-wrap' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'select_style',
				'title' => __( 'Select', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'select_width',
				'type'         => 'range',
				'separator'    => 'after',
				'label'        => __( 'Select Width', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => '%',
						'intervals' => array(
							'step' => 1,
							'min'  => 10,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					$this->selector( 'select-wrapper' ) => 'max-width: {{VALUE}}%',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 50,
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'select_padding',
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$this->selector( 'select' ) => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'                  => 'select_typography',
				'type'                => 'typography',
				'separator'           => 'after',
				'disable_line_height' => true,
				'css_selector'        => array(
					$this->selector( 'select' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'item_normal_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'select' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'select' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'select' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	private function process_radio_field() {
		$this->set_css_selector( 'front-label', '__field-wrap label' );
		$this->set_css_selector( 'front-wrap', '__field-wrap.checkradio-wrap' );
		$this->set_css_selector( 'list-wrapper', '__fields-group' );

		$old_namespace = $this->get_namespace();
		$this->set_namespace( ".field-type-radio-field {$this->get_namespace()}" );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'          => 'radio_items_style',
				'initialOpen' => true,
				'title'       => __( 'Items', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_position',
				'type'         => 'choose',
				'label'        => __( 'Radio options position', 'jet-form-builder' ),
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
					$this->selector( 'front-wrap' ) => 'display: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'block',
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_alignment',
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
					$this->selector( 'list-wrapper' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_space_between',
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
					$this->selector( 'front-wrap' ) . ':not(:last-child)'  => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
					$this->selector( 'front-wrap' ) . ':not(:first-child)' => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 10,
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_horisontal_layout_description',
				'type'         => 'range',
				'label'        => __( 'Horizontal Offset', 'jet-form-builder' ),
				'help'         => __( 'Horizontal Offset control works only with Line Filters Position', 'jet-form-builder' ),
				'separator'    => 'none',
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
					$this->selector( 'front-wrap' ) => 'margin-right: {{VALUE}}{{UNIT}}',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 0,
					),
				),
			)
		);

		$this->get_manager()->end_section();

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'radio_item_style',
				'title' => __( 'Item', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'front-label' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'front-label' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					// front
					$this->selector( 'front-label' ) . ' > span' => 'background-color: {{VALUE}}',

				),
			)
		);

		$this->get_manager()->end_section();

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'radio_style',
				'title' => __( 'Radio', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'show_radio_decorator',
				'type'         => 'toggle',
				'separator'    => 'after',
				'label'        => __( 'Show Radio', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => true,
					),
				),
				'unit'         => 'px',
				'return_value' => array(
					'true'  => 'inline-block',
					'false' => 'none',
				),
				'css_selector' => array(
					$this->selector( 'front-wrap' ) . ' span::before' => 'display: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'item_size_decorator',
				'type'         => 'range',
				'label'        => __( 'Size Radio', 'jet-form-builder' ),
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
					$this->selector( 'front-wrap' ) . ' span::before' => 'font-size: {{VALUE}}{{UNIT}};',
				),
			)
		);

		$this->get_manager()->start_tabs(
			'style_controls',
			array(
				'id' => 'radio_style_tabs',
			)
		);

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'radio_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_normal_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'front-label' ) . ' > span::before' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					// front
					$this->selector( 'front-label' ) . ' > span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'radio_item_checked_styles',
				'title' => __( 'Checked', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_checked_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'front-label' ) . ' :checked + span::before' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'radio_checked_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#398ffc',
					),
				),
				'css_selector' => array(
					// front
					$this->selector( 'front-label' ) . ' :checked + span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();
		$this->get_manager()->end_tabs();
		$this->get_manager()->end_section();

		$this->set_namespace( $old_namespace );
	}

	public function process_checkbox_field() {
		$this->set_css_selector( 'item', '__field-wrap.checkboxes-wrap' );
		$this->set_css_selector( 'option-label', '__field-wrap label' );
		$this->set_css_selector( 'checkbox-front', '__field-wrap span::before' );
		$this->set_css_selector( 'wrapper', '__fields-group' );

		$old_namespace = $this->get_namespace();
		$this->set_namespace( ".field-type-checkbox-field {$this->get_namespace()}" );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'          => 'checkbox_items_style',
				'initialOpen' => true,
				'title'       => __( 'Items', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_position',
				'type'         => 'choose',
				'label'        => __( 'Checkbox Position', 'jet-form-builder' ),
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
					$this->selector( 'item' ) => 'display: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'block',
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_alignment',
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
					$this->selector( 'wrapper' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_space_between',
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
					$this->selector( 'item' ) . ':not(:last-child)'  => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
					$this->selector( 'item' ) . ':not(:first-child)' => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 10,
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_horisontal_layout_description',
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
					$this->selector( 'item' ) => 'margin-right: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 0,
					),
				),
			)
		);

		$this->get_manager()->end_section();

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'checkbox_item_checkbox_style',
				'title' => __( 'Item', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_item_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'option-label' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'option-label' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'option-label' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_section();

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'checkbox_style',
				'title' => __( 'Checkbox', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
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
					$this->selector( 'checkbox-front' ) => 'display: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_size_decorator',
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
					$this->selector( 'checkbox-front' ) => 'font-size: {{VALUE}}{{UNIT}};',
				),
			)
		);

		$this->get_manager()->start_tabs(
			'style_controls',
			array(
				'id' => 'checkbox_style_tabs',
			)
		);

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'checkbox_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'checkbox-front' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
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
					$this->selector( 'option-label' ) . ' > span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'checkbox_item_checked_styles',
				'title' => __( 'Checked', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkbox_checked_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'option-label' ) . ' :checked + span::before' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
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
					$this->selector( 'option-label' ) . ' :checked + span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();
		$this->get_manager()->end_tabs();
		$this->get_manager()->end_section();

		$this->set_namespace( $old_namespace );
	}

	private function process_repeater_field() {
		$this->set_css_selector( 'row', '-repeater__row' );
		$this->set_css_selector( 'actions', '-repeater__actions' );
		$this->set_css_selector( 'new-button', '-repeater__new' );
		$this->set_css_selector( 'remove-button', '-repeater__remove' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'repeater_style',
				'title' => __( 'Repeater Row', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_row_padding',
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$this->selector( 'row' ) => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			)
		);

		$this->get_manager()->end_section();

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'repeater_new_button_style',
				'title' => __( 'New Item Button', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_alignment',
				'type'         => 'choose',
				'separator'    => 'after',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'options'      => array(
					'flex-start' => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center'     => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'flex-end'   => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'actions' ) => 'justify-content: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'left',
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'new-button' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_padding',
				'type'         => 'dimensions',
				'separator'    => 'after',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$this->selector( 'new-button' ) => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'new-button' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->start_tabs(
			'style_controls',
			array(
				'id' => 'repeater_new_button_style_tabs',
			)
		);

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'repeater_new_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'new-button' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'new-button' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'repeater_new_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_hover_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'new-button' ) . ':hover:not(:disabled)' => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_new_button_hover_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'new-button' ) . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();
		$this->get_manager()->end_tabs();
		$this->get_manager()->end_section();

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'repeater_remove_button_style',
				'title' => __( 'Remove Item Button', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'                 => 'repeater_remove_button_typography',
				'type'               => 'typography',
				'disable_decoration' => true,
				'separator'          => 'after',
				'css_selector'       => array(
					$this->selector( 'remove-button' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_remove_button_padding',
				'type'         => 'dimensions',
				'separator'    => 'after',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$this->selector( 'remove-button' ) => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_remove_button_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'remove-button' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->start_tabs(
			'style_controls',
			array(
				'id' => 'repeater_remove_button_style_tabs',
			)
		);

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'repeater_remove_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_remove_button_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'remove-button' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_remove_button_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'remove-button' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'repeater_remove_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_remove_button_hover_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'remove-button' ) . ':hover:not(:disabled)' => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'repeater_remove_button_hover_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'remove-button' ) . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();
		$this->get_manager()->end_tabs();
		$this->get_manager()->end_section();
	}

	/**
	 * @throws Repository_Exception
	 */
	private function process_message_success() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );
		$this->set_css_selector( 'success', '-message--success' );

		/**
		 * Response Success Message
		 */
		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'success_style',
				'title' => __( 'Message Success', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			$module->create_margin(
				$this->selector( 'success' ),
				'success_margin'
			)
		);

		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( 'success' ),
				'success_padding'
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_alignment',
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
					$this->selector( 'success' ) => 'text-align: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'left',
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'success' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => 'green',
					),
				),
				'css_selector' => array(
					$this->selector( 'success' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					$this->selector( 'success' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'success' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->end_section();
	}

	/**
	 * @throws Repository_Exception
	 */
	private function process_message_error() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );
		$this->set_css_selector( 'error', '-message--error' );

		/**
		 * Response Error Message
		 */
		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'error_style',
				'title' => __( 'Message Error', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			$module->create_margin(
				$this->selector( 'error' ),
				'error_margin'
			)
		);

		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( 'error' ),
				'error_padding'
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_alignment',
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
					$this->selector( 'error' ) => 'text-align: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'left',
					),
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'error' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#000000',
					),
				),
				'css_selector' => array(
					$this->selector( 'error' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					$this->selector( 'error' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'error' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->end_section();
	}
}
