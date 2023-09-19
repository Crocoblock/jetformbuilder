<?php

namespace JFB_Compatibility\Bricks\Widgets;

//use Bricks\Element;
//use Jet_Form_Builder\Blocks\Modules\General_Style_Functions;
//use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
//use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Tools;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form extends Base {

//	use General_Style_Functions;

	// Element properties
	public $category = 'jet-form-builder'; // Use predefined element category 'general'
	public $name = 'jet-form-builder-form'; // Make sure to prefix your elements
	public $icon = 'jet-form-builder-icon--form'; // Themify icon font class
	public $css_selector = ''; // Default CSS selector
	public $scripts = []; // Script(s) run when element is rendered on frontend or updated in builder

	// Return localised element label
	public function get_label() {
		return esc_html__( 'JetForm', 'jet-form-builder' );
	}

	// Set builder control groups
	public function set_control_groups() {
		$this->control_group_form_settings();
		$this->control_group_form_style();
		$this->control_group_label_style();
		$this->control_group_description_style();
		$this->control_group_input_style();
		$this->control_group_checkradio_style();
	}

	// Set builder controls
	public function set_controls() {
		$this->controls_form_settings();
		$this->controls_form_style();
		$this->controls_label_style();
		$this->controls_description_style();
		$this->controls_input_style();
		$this->controls_checkradio_style();
	}

	// Start form settings
	public function control_group_form_settings() {
		$this->register_jet_control_group(
			'form_settings',
			[
				'title' => esc_html__( 'Form Settings', 'jet-form-builder' ),
				'tab'   => 'content',
			]
		);
	}

	public function controls_form_settings() {
		$options = Form_Arguments::get_options( true );

		$this->start_jet_control_group( 'form_settings' );

		$this->register_jet_control(
			'form_id',
			[
				'tab'        => 'content',
				'label'      => esc_html__( 'Choose Form', 'jet-form-builder' ),
				'type'       => 'select',
				'options'    => Tools::get_forms_list_for_js( true ),
				'searchable' => true,
			]
		);

		$this->register_jet_control(
			'fields_layout',
			[
				'tab'     => 'content',
				'label'   => esc_html__( 'Choose Form', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => $options['fields_layout'],
				'default' => 'column'
			]
		);

		$this->register_jet_control(
			'required_mark',
			[
				'tab'            => 'content',
				'label'          => esc_html__( 'Required Mark', 'jet-form-builder' ),
				'type'           => 'text',
				'default'        => esc_html__( '*', 'jet-form-builder' ),
				'hasDynamicData' => false,
			]
		);

		$this->register_jet_control(
			'fields_label_tag',
			[
				'tab'     => 'content',
				'label'   => esc_html__( 'Fields label HTML tag', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => $options['fields_label_tag'],
				'default' => 'div'
			]
		);

		$this->register_jet_control(
			'submit_type',
			[
				'tab'     => 'content',
				'label'   => esc_html__( 'Submit Type', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => $options['submit_type'],
				'default' => 'reload'
			]
		);

		$this->register_jet_control(
			'enable_progress',
			[
				'tab'     => 'content',
				'label'   => esc_html__( 'Enable form pages progress', 'jet-form-builder' ),
				'type'    => 'checkbox',
				'default' => false,
			]
		);

		$this->end_jet_control_group();
	}
	// End form settings

	// Start form style
	public function control_group_form_style() {
		$this->register_jet_control_group(
			'form_style',
			[
				'title' => esc_html__( 'Form Row', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_form_style() {
		$this->start_jet_control_group( 'form_style' );

		$this->register_jet_control(
			'form_row_gap_before',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Gap Before', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => [
					[
						'property' => 'margin-top',
						'selector' => $this->css_selector( '-row' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_row_gap_after',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Gap After', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => [
					[
						'property' => 'margin-bottom',
						'selector' => $this->css_selector( '-row' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End form style

	// Start label style
	public function control_group_label_style() {
		$this->register_jet_control_group(
			'section_label_style',
			[
				'title' => esc_html__( 'Label', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_label_style() {
		$this->start_jet_control_group( 'section_label_style' );

		$this->register_jet_control(
			'label_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__label' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'label_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__label' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'label_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__label' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'label_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__label' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'label_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__label' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_required_mark',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Required Mark', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'form_required_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__required' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End label style

	// Start description style
	public function control_group_description_style() {
		$this->register_jet_control_group(
			'section_description_style',
			[
				'title' => esc_html__( 'Description', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_description_style() {
		$this->start_jet_control_group( 'section_description_style' );

		$this->register_jet_control(
			'description_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__desc' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'description_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__desc' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'description_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__desc' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'description_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__desc' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'description_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__desc' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End description style

	// Start input style
	public function control_group_input_style() {
		$this->register_jet_control_group(
			'section_input_style',
			[
				'title' => esc_html__( 'Input Fields', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_input_style() {
		$repeater_class = $this->css_selector( '-repeater' );
		$simple_input   = "__field:not(.checkradio-field):not(.range-field):not($repeater_class):not(.wysiwyg-field)";

		$this->start_jet_control_group( 'section_input_style' );

		$this->register_jet_control(
			'input_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $simple_input ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_placeholder_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Placeholder color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'color',
						'selector' => $this->css_selector( '__field' ) . '::placeholder',
					],
				],
			]
		);

		$this->register_jet_control(
			'input_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( $simple_input ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( $simple_input ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $simple_input ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( $simple_input ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_box_shadow',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-smart-filters' ),
				'type'  => 'box-shadow',
				'css'   => [
					[
						'property' => 'box-shadow',
						'selector' => $this->css_selector( $simple_input ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_width',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Fields width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 50,
				'max'   => 1000,
				'css'   => [
					[
						'property' => 'max-width',
						'selector' => $this->css_selector( $simple_input ),
					],
					[
						'property' => 'width',
						'selector' => $this->css_selector( $simple_input ),
					],
					[
						'property' => 'flex-basis',
						'selector' => $this->css_selector( $simple_input ),
					],
					[
						'property' => 'flex-shrink',
						'selector' => $this->css_selector( $simple_input ),
						'value'    => '1',
					],
				],
			]
		);

		$this->register_jet_control(
			'input_textarea_height',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Textarea height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 500,
				'css'   => [
					[
						'property' => 'height',
						'selector' => $this->css_selector( '__field.textarea-field' ),
					],
					[
						'property' => 'min-height',
						'selector' => $this->css_selector( '__field.textarea-field' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'input_color_scheme',
			[
				'tab'         => 'style',
				'label'       => esc_html__( 'Fields label HTML tag', 'jet-form-builder' ),
				'type'        => 'select',
				'options'     => [
					'normal' => esc_html__( 'Normal', 'jet-form-builder' ),
					'light'  => esc_html__( 'Light', 'jet-form-builder' ),
					'dark'   => esc_html__( 'Dark', 'jet-form-builder' ),
				],
				'default'     => 'normal',
				'description' => esc_html__( 'Affects default browser UI elements like date and time icons, UI etc.', 'jet-form-builder' ),
			]
		);

		$this->end_jet_control_group();
	}
	// End input style

	// Start checkbox & radio fields style
	public function control_group_checkradio_style() {
		$this->register_jet_control_group(
			'section_checkradio_style',
			[
				'title' => esc_html__( 'Checkbox & Radio Fields', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_checkradio_style() {
		$this->start_jet_control_group( 'section_checkradio_style' );

		$this->register_jet_control(
			'checkradio_fields_layout',
			[
				'tab'        => 'style',
				'label'      => esc_html__( '', 'jet-form-builder' ),
				'type'       => 'select',
				'options'    => [
					'inline-block' => esc_html__( 'Horizontal', 'jet-form-builder' ),
					'block'        => esc_html__( 'Vertical', 'jet-form-builder' ),
				],
				'default'    => 'block',
				'css'   => [
					[
						'property' => 'display',
						'selector' => $this->css_selector( '__field-wrap.checkradio-wrap' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_gap',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Gap between control and label', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 50,
				'css'   => [
					[
						'property' => 'margin-right',
						'selector' => $this->css_selector( '__field-wrap.checkradio-wrap' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_control_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Control Size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 50,
				'css'   => [
					[
						'property' => 'font-size',
						'selector' => $this->css_selector( '__field-wrap span::before' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__field-wrap label' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_box_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Box', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'checkradio_fields_box_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__field-wrap span::before' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_box_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__field-wrap label > span::before' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_box_checked_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Checked state', 'jet-smart-filters' ),
			]
		);

		$this->register_jet_control(
			'checkradio_fields_box_checked_bg',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-smart-filters' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__field-wrap label :checked + span::before' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_box_checked_border_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border color', 'jet-smart-filters' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'border-color',
						'selector' => $this->css_selector( '__field-wrap label :checked + span::before' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End checkbox & radio fields style

	// Start
	public function control_group_() {
		$this->register_jet_control_group(
			'',
			[
				'title' => esc_html__( '', 'jet-form-builder' ),
				'tab'   => '',
			]
		);
	}

	public function controls_() {
		$this->start_jet_control_group( '' );

		$this->register_jet_control(
			'',
			[
				'tab'        => 'style',
				'label'      => esc_html__( '', 'jet-form-builder' ),
				'type'       => 'select',
				'options'    => [],
				'searchable' => true,
			]
		);

		$this->end_jet_control_group();
	}
	// End


	// Enqueue element styles and scripts
	public function enqueue_scripts() {
	}

	// Render element HTML
	public function render() {
		$settings = $this->get_jet_settings();

		echo "<div {$this->render_attributes( '_root' )}>";
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo jet_fb_render_form( $settings );
		echo "</div>";
	}

	public function css_selector( $mod = null ) {
		return sprintf( '%1$s%2$s', '.jet-form-builder', $mod );
	}
}
