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
		$this->process_checkradio_field();
		$this->process_repeater_field();

		$form_break = new Form_Break();
		$form_break->set_manager( $this->get_manager() );
		$form_break->set_namespace( $this->get_namespace() );

		$form_break->process_controls();

		$this->process_action_button();
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

	private function process_checkradio_field() {
		$this->set_css_selector( 'front-label', '__field-wrap label' );
		$this->set_css_selector( 'front-wrap', '__field-wrap.checkradio-wrap' );
		$this->set_css_selector( 'list-wrapper', '__fields-group' );
		$this->set_css_selector( 'control', '__field-wrap span::before' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'title' => __( 'Checkbox & Radio Fields', 'jet-form-builder' ),
				'id'    => 'checkradio_items_style',
			)
		);

		$this->get_manager()->add_responsive_control(
			array(
				'id'           => 'checkradio_fields_layout',
				'type'         => 'choose',
				'label'        => __( 'Layout', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'block'        => array(
						'title' => __( 'Vertical', 'jet-form-builder' ),
						'icon'  => 'dashicons-arrow-down-alt',
					),
					'inline-block' => array(
						'title' => __( 'Horizontal', 'jet-form-builder' ),
						'icon'  => 'dashicons-arrow-right-alt',
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
				'id'           => 'checkradio_fields_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'front-label' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_responsive_control(
			array(
				'id'           => 'checkradio_space_between',
				'type'         => 'range',
				'label'        => __( 'Gap between control and label', 'jet-form-builder' ),
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
					$this->selector( 'front-wrap' ) . ' span' => 'gap: {{VALUE}}px;',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 8,
					),
				),
			)
		);

		$this->get_manager()->add_responsive_control(
			array(
				'id'           => 'checkradio_fields_control_size',
				'type'         => 'range',
				'label'        => __( 'Control Size', 'jet-form-builder' ),
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
					$this->selector( 'control' ) => 'font-size: {{VALUE}}{{UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkradio_fields_color',
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
				'id'           => 'checkradio_fields_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'front-label' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->start_tabs(
			'style_controls',
			array(
				'id' => 'checkradio_style_tabs',
			)
		);

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'checkradio_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkradio_control_border__normal',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'control' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkradio_control_bg_color__normal',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'front-label' ) . ' > span::before' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->end_tab();

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'checkradio_styles__checked',
				'title' => __( 'Checked', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'checkradio_control_border__checked',
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
				'id'           => 'checkradio_control_bg_color__checked',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'front-label' ) . ' :checked + span::before' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->end_tab();
		$this->get_manager()->end_tabs();
		$this->get_manager()->end_section();
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
				'title' => __( 'Repeater new button', 'jet-form-builder' ),
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
				'title' => __( 'Repeater remove item button', 'jet-form-builder' ),
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

	private function process_action_button() {
		$this->set_css_selector( 'main', '__action-button' );
		$this->set_css_selector( 'wrap', '__action-button-wrapper' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'action_button_style',
				'title' => __( 'Action button', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_responsive_control(
			array(
				'id'           => 'action_button_alignment',
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
					$this->selector( 'wrap' ) => 'justify-content: {{VALUE}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector() => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_padding',
				'type'         => 'dimensions',
				'separator'    => 'after',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$this->selector() => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector() => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->start_tabs(
			'style_controls',
			array(
				'id' => 'action_button_style_tabs',
			)
		);

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'action_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector() => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector() => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->end_tab();

		$this->get_manager()->start_tab(
			'style_controls',
			array(
				'id'    => 'action_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_hover_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector() . ':hover:not(:disabled)' => 'color: {{VALUE}}',
				),
			)
		);

		$this->get_manager()->add_control(
			array(
				'id'           => 'action_button_hover_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector() . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
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
