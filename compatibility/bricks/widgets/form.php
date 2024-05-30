<?php


namespace JFB_Compatibility\Bricks\Widgets;

use Jet_Form_Builder\Blocks;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form extends Base {

	/**
	 * Use predefined element category 'general'
	 *
	 * @var string
	 */
	public $category = 'jet-form-builder';
	/**
	 * Make sure to prefix your elements
	 *
	 * @var string
	 */
	public $name = 'jet-form-builder-form';
	/**
	 * Themify icon font class
	 *
	 * @var string
	 */
	public $icon = 'jet-form-builder-icon-forms';
	/**
	 * Default CSS selector
	 *
	 * @var string
	 */
	public $css_selector = '';
	/**
	 * Script(s) run when element is rendered on frontend or updated in builder
	 *
	 * @var array
	 */
	public $scripts = array();

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
		$this->control_group_calc_fields_style();
		$this->control_group_range_fields_style();
		$this->control_group_heading_style();
		$this->control_group_repeater_style();
		$this->control_group_conditional_style();
		$this->control_group_submit_style();
		$this->control_group_form_break_style();
		$this->control_group_form_break_buttons_style();
		$this->control_group_form_break_message_style();
		$this->control_group_form_progress_wrap_style();
		$this->control_group_form_progress_pages_style();
		$this->control_group_message_style();
	}

	// Set builder controls
	public function set_controls() {
		$this->controls_form_settings();
		$this->controls_form_style();
		$this->controls_label_style();
		$this->controls_description_style();
		$this->controls_input_style();
		$this->controls_checkradio_style();
		$this->controls_calc_fields_style();
		$this->controls_range_fields_style();
		$this->controls_heading_style();
		$this->controls_repeater_style();
		$this->controls_conditional_style();
		$this->controls_submit_style();
		$this->controls_form_break_style();
		$this->controls_form_break_buttons_style();
		$this->controls_form_break_message_style();
		$this->controls_form_progress_wrap_style();
		$this->controls_form_progress_pages_style();
		$this->controls_message_style();
	}

	// Start form settings
	public function control_group_form_settings() {
		$this->register_jet_control_group(
			'form_settings',
			array(
				'title' => esc_html__( 'Form settings', 'jet-form-builder' ),
				'tab'   => 'content',
			)
		);
	}

	public function controls_form_settings() {
		$options = Form_Arguments::get_options( true );

		$this->start_jet_control_group( 'form_settings' );

		$this->register_jet_control(
			'form_id',
			array(
				'tab'        => 'content',
				'label'      => esc_html__( 'Choose Form', 'jet-form-builder' ),
				'type'       => 'select',
				'options'    => Tools::get_forms_list_for_js( true ),
				'searchable' => true,
			)
		);

		$this->register_jet_control(
			'fields_layout',
			array(
				'tab'     => 'content',
				'label'   => esc_html__( 'Fields Layout', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => $options['fields_layout'],
			)
		);

		$this->register_jet_control(
			'required_mark',
			array(
				'tab'            => 'content',
				'label'          => esc_html__( 'Required Mark', 'jet-form-builder' ),
				'type'           => 'text',
				'default'        => esc_html__( '*', 'jet-form-builder' ),
				'hasDynamicData' => false,
			)
		);

		$this->register_jet_control(
			'fields_label_tag',
			array(
				'tab'     => 'content',
				'label'   => esc_html__( 'Fields label HTML tag', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => $options['fields_label_tag'],
			)
		);

		$this->register_jet_control(
			'submit_type',
			array(
				'tab'     => 'content',
				'label'   => esc_html__( 'Submit Type', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => $options['submit_type'],
			)
		);

		$this->register_jet_control(
			'enable_progress',
			array(
				'tab'     => 'content',
				'label'   => esc_html__( 'Enable form pages progress', 'jet-form-builder' ),
				'type'    => 'checkbox',
				'default' => false,
			)
		);

		$this->end_jet_control_group();
	}
	// End form settings

	// Start form style
	public function control_group_form_style() {
		$this->register_jet_control_group(
			'form_style',
			array(
				'title' => esc_html__( 'Form Row', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_form_style() {
		$this->start_jet_control_group( 'form_style' );

		$this->register_jet_control(
			'form_row_gap_before',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Gap Before', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => array( array( 'property' => '--jfb-row-mt' ) ),
			)
		);

		$this->register_jet_control(
			'form_row_gap_after',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Gap After', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => array( array( 'property' => '--jfb-row-mb' ) ),
			)
		);

		$this->end_jet_control_group();
	}
	// End form style

	// Start label style
	public function control_group_label_style() {
		$this->register_jet_control_group(
			'section_label_style',
			array(
				'title' => esc_html__( 'Label', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_label_style() {
		$this->start_jet_control_group( 'section_label_style' );

		$css_selectors = array(
			'label'      => $this->css_selector( '__label' ),
			'label-text' => $this->css_selector( '__label' ) . ' ' . $this->css_selector( '__label-text' ),
		);

		$this->register_jet_control(
			'label_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['label-text'],
					),
				),
			)
		);

		$this->register_jet_control(
			'label_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-label-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'label_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['label'],
					),
				),
			)
		);

		$this->register_jet_control(
			'label_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['label'],
					),
				),
			)
		);

		$this->register_jet_control(
			'label_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['label'],
					),
				),
			)
		);

		$this->register_jet_control(
			'form_required_mark',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Required Mark', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'form_required_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $this->css_selector( '__required' ),
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End label style

	// Start description style
	public function control_group_description_style() {
		$this->register_jet_control_group(
			'section_description_style',
			array(
				'title' => esc_html__( 'Description', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_description_style() {
		$this->start_jet_control_group( 'section_description_style' );

		$css_selector = $this->css_selector( '__desc' );

		$this->register_jet_control(
			'description_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'description_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-desc-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'description_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'description_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'description_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End description style

	// Start input style
	public function control_group_input_style() {
		$this->register_jet_control_group(
			'section_input_style',
			array(
				'title' => esc_html__( 'Input fields', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_input_style() {
		$repeater_class = $this->css_selector( '-repeater' );
		$css_selector   = $this->css_selector( "__field:not(.checkradio-field):not(.range-field):not($repeater_class):not(.wysiwyg-field)" );

		$this->start_jet_control_group( 'section_input_style' );

		$this->register_jet_control(
			'input_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'input_placeholder_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Placeholder color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-input-phc' ) ),
			)
		);

		$this->register_jet_control(
			'input_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'background-color',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'input_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'input_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'input_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'input_box_shadow',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-form-builder' ),
				'type'  => 'box-shadow',
				'css'   => array(
					array(
						'property' => 'box-shadow',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'input_width',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Fields width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 50,
				'max'   => 1000,
				'css'   => array( array( 'property' => '--jfb-input-w' ) ),
			)
		);

		$this->register_jet_control(
			'input_textarea_height',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Textarea height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 500,
				'css'   => array( array( 'property' => '--jfb-input-h' ) ),
			)
		);

		$this->register_jet_control(
			'input_color_scheme',
			array(
				'tab'         => 'style',
				'label'       => esc_html__( 'Color scheme', 'jet-form-builder' ),
				'type'        => 'select',
				'options'     => array(
					'normal' => esc_html__( 'Normal', 'jet-form-builder' ),
					'light'  => esc_html__( 'Light', 'jet-form-builder' ),
					'dark'   => esc_html__( 'Dark', 'jet-form-builder' ),
				),
				'default'     => 'normal',
				'description' => esc_html__( 'Affects default browser UI elements like date and time icons, UI etc.', 'jet-form-builder' ),
				'css'         => array( array( 'property' => '--jfb-input-color-scheme' ) ),
			)
		);

		$this->end_jet_control_group();
	}
	// End input style

	// Start checkbox & radio fields style
	public function control_group_checkradio_style() {
		$this->register_jet_control_group(
			'section_checkradio_style',
			array(
				'title' => esc_html__( 'Checkbox & Radio fields', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_checkradio_style() {
		$this->start_jet_control_group( 'section_checkradio_style' );

		$this->register_jet_control(
			'checkradio_fields_layout',
			array(
				'tab'     => 'style',
				'label'   => esc_html__( 'Layout', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => array(
					'inline-block' => esc_html__( 'Horizontal', 'jet-form-builder' ),
					'block'        => esc_html__( 'Vertical', 'jet-form-builder' ),
				),
				'default' => 'block',
				'css'     => array( array( 'property' => '--jfb-checkradio-d' ) ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_gap',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Gap between control and label', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jfb-checkradio-mr' ) ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_control_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Control size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jfb-checkradio-fz' ) ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $this->css_selector( '__field-label' ),
					),
				),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_box_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Box', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_box_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $this->css_selector( '__field-label > span::before' ),
					),
				),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_box_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-checkradio-input-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_box_checked_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Checked state', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_box_checked_bg',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-checkradio-input-checked-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'checkradio_fields_box_checked_border_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'border-color',
						'selector' => $this->css_selector( '__field-label :checked + span::before' ),
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End checkbox & radio fields style

	// Start calculated fields
	public function control_group_calc_fields_style() {
		$this->register_jet_control_group(
			'section_calc_fields_style',
			array(
				'title' => esc_html__( 'Calculated fields', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_calc_fields_style() {
		$this->start_jet_control_group( 'section_calc_fields_style' );

		$this->register_jet_control(
			'calc_fields_align_main_axis',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Align main axis', 'jet-form-builder' ),
				'type'  => 'justify-content',
				'css'   => array( array( 'property' => '--jfb-calc-justify-content' ) ),
			)
		);

		$this->register_jet_control(
			'calc_fields_gap',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Gap', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 40,
				'css'   => array( array( 'property' => '--jfb-calc-gap' ) ),
			)
		);

		$css_selector = $this->css_selector( '__calculated-field' );

		$this->register_jet_control(
			'calc_fields_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'calc_fields_prefix_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jfb-calc-prefix-fz' ) ),
			)
		);

		$this->register_jet_control(
			'calc_fields_prefix_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-calc-prefix-color' ) ),
			)
		);

		$this->register_jet_control(
			'calc_fields_suffix_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jfb-calc-suffix-fz' ) ),
			)
		);

		$this->register_jet_control(
			'calc_fields_suffix_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-calc-suffix-color' ) ),
			)
		);

		$this->register_jet_control(
			'calc_fields_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-calc-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'calc_fields_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'calc_fields_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'calc_fields_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End calculated fields

	// Start range fields
	public function control_group_range_fields_style() {
		$this->register_jet_control_group(
			'section_range_fields_style',
			array(
				'title' => esc_html__( 'Range fields', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_range_fields_style() {
		$this->start_jet_control_group( 'section_range_fields_style' );

		$this->register_jet_control(
			'range_max_width',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Max width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 1000,
				'css'   => array( array( 'property' => '--jfb-range-mw' ) ),
			)
		);

		$this->register_jet_control(
			'range_slider_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Slider', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'track_height',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Track height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 20,
				'css'   => array( array( 'property' => '--jet-fb__range-field-range--height' ) ),
			)
		);

		$this->register_jet_control(
			'thumb_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Thumb size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 20,
				'css'   => array( array( 'property' => '--jet-fb__range-field-slider--size' ) ),
			)
		);

		$this->register_jet_control(
			'track_border_radius',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Track border radius', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jet-fb__range-field-range--br' ) ),
			)
		);

		$this->register_jet_control(
			'thumb_border_radius',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Thumb border radius', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jet-fb__range-field-slider--br' ) ),
			)
		);

		$this->register_jet_control(
			'track_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Track color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jet-fb__range-field-range--bgc' ) ),
			)
		);

		$this->register_jet_control(
			'thumb_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Thumb color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jet-fb__range-field-slider--bgc' ) ),
			)
		);

		$this->register_jet_control(
			'range_value_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Value', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'range_value_gap',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Gap', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 40,
				'css'   => array( array( 'property' => '--jfb-range-value-gap' ) ),
			)
		);

		$this->register_jet_control(
			'range_value_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $this->css_selector( '__field-value.range-value' ),
					),
				),
			)
		);

		$this->register_jet_control(
			'range_prefix_value_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jfb-range-value-prefix-fz' ) ),
			)
		);

		$this->register_jet_control(
			'range_prefix_value_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-range-value-prefix-color' ) ),
			)
		);

		$this->register_jet_control(
			'range_suffix_value_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => array( array( 'property' => '--jfb-range-value-suffix-fz' ) ),
			)
		);

		$this->register_jet_control(
			'range_suffix_value_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-range-value-suffix-color' ) ),
			)
		);

		$this->end_jet_control_group();
	}
	// End range fields

	// Start heading style
	public function control_group_heading_style() {
		$this->register_jet_control_group(
			'section_headings_style',
			array(
				'title' => esc_html__( 'Heading', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_heading_style() {
		$this->start_jet_control_group( 'section_headings_style' );

		$this->register_jet_control(
			'heading_label_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Label', 'jet-form-builder' ),
			)
		);

		$css_selectors = array(
			'label'      => $this->css_selector( '__heading' ),
			'label-text' => $this->css_selector( '__heading' ) . ' ' . $this->css_selector( '__label-text' ),
			'desc'       => $this->css_selector( '__heading-desc' ),
		);

		$this->register_jet_control(
			'heading_label_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['label-text'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_label_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-heading-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'heading_label_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['label'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_label_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['label'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_label_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['label'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_desc_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Description', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'heading_desc_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['desc'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_desc_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-heading-desc-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'heading_desc_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['desc'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_desc_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['desc'],
					),
				),
			)
		);

		$this->register_jet_control(
			'heading_desc_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['desc'],
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End heading style

	// Start repeater style
	public function control_group_repeater_style() {
		$this->register_jet_control_group(
			'section_repeater_style',
			array(
				'title' => esc_html__( 'Repeater', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_repeater_style() {
		$this->start_jet_control_group( 'section_repeater_style' );

		$this->register_jet_control(
			'repeater_row_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Repeater row', 'jet-form-builder' ),
			)
		);

		$css_selectors = array(
			'row'    => $this->css_selector( '-repeater__row' ),
			'new'    => $this->css_selector( '-repeater__new' ),
			'remove' => $this->css_selector( '-repeater__remove' ),
		);

		$this->register_jet_control(
			'booking_form_repeater_row_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['row'],
					),
				),
			)
		);

		$this->register_jet_control(
			'repeater_add_button_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'New item button', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_align_main_axis',
			array(
				'tab'     => 'style',
				'label'   => esc_html__( 'Align main axis', 'jet-form-builder' ),
				'type'    => 'justify-content',
				'exclude' => array(
					'space-between',
					'space-around',
					'space-evenly',
				),
				'css'     => array( array( 'property' => '--jfb-repeater-add-button-justify-content' ) ),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['new'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'background-color',
						'selector' => $css_selectors['new'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['new'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['new'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['new'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_box_shadow',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-form-builder' ),
				'type'  => 'box-shadow',
				'css'   => array(
					array(
						'property' => 'box-shadow',
						'selector' => $css_selectors['new'],
					),
				),
			)
		);

		$this->register_jet_control(
			'repeater_rem_button_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Remove item button', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_size',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Icon size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 12,
				'max'   => 90,
				'css'   => array( array( 'property' => '--jfb-repeater-rem-button-fz' ) ),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-repeater-rem-button-color' ) ),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-repeater-rem-button-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['remove'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['remove'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['remove'],
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_box_shadow',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-form-builder' ),
				'type'  => 'box-shadow',
				'css'   => array(
					array(
						'property' => 'box-shadow',
						'selector' => $css_selectors['remove'],
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End repeater style

	// Start conditional style
	public function control_group_conditional_style() {
		$this->register_jet_control_group(
			'section_conditional_style',
			array(
				'title' => esc_html__( 'Conditional', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_conditional_style() {
		$this->start_jet_control_group( 'section_conditional_style' );

		$this->register_jet_control(
			'conditional_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-conditional-bgc' ) ),
			)
		);

		$css_selector = $this->css_selector( '__conditional' );

		$this->register_jet_control(
			'conditional_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'conditional_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'conditional_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End conditional style

	// Start submit style
	public function control_group_submit_style() {
		$this->register_jet_control_group(
			'section_submit_style',
			array(
				'title' => esc_html__( 'Submit', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_submit_style() {
		$this->start_jet_control_group( 'section_submit_style' );

		$this->register_jet_control(
			'booking_form_submit_align_main_axis',
			array(
				'tab'     => 'style',
				'label'   => esc_html__( 'Align main axis', 'jet-form-builder' ),
				'type'    => 'justify-content',
				'exclude' => array(
					'space-between',
					'space-around',
					'space-evenly',
				),
				'css'     => array( array( 'property' => '--jfb-submit-justify-content' ) ),
			)
		);

		$this->register_jet_control(
			'booking_form_submit_width',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 1000,
				'css'   => array( array( 'property' => '--jfb-submit-w' ) ),
			)
		);

		$css_selector = $this->css_selector( '__submit' );

		$this->register_jet_control(
			'booking_form_submit_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_submit_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'background-color',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_submit_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_submit_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_submit_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'booking_form_submit_box_shadow',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-form-builder' ),
				'type'  => 'box-shadow',
				'css'   => array(
					array(
						'property' => 'box-shadow',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End label style

	// Start form break style
	public function control_group_form_break_style() {
		$this->register_jet_control_group(
			'section_form_break_style',
			array(
				'title' => esc_html__( 'Form Break Row', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_form_break_style() {
		$this->start_jet_control_group( 'section_form_break_style' );

		$this->register_jet_control(
			'form_break_alignment',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Text align', 'jet-form-builder' ),
				'type'  => 'text-align',
				'css'   => array( array( 'property' => '--jfb-break-text-align' ) ),
			)
		);

		$css_selector = $this->css_selector( '__next-page-wrap' );

		$this->register_jet_control(
			'form_break_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End form break style

	// Start form break buttons style
	public function control_group_form_break_buttons_style() {
		$this->register_jet_control_group(
			'section_form_break_next_style',
			array(
				'title' => esc_html__( 'Form Break Buttons', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_form_break_buttons_style() {
		$this->start_jet_control_group( 'section_form_break_next_style' );

		$css_selectors = array(
			'prev' => $this->css_selector( '__prev-page' ),
			'next' => $this->css_selector( '__next-page' ),
		);

		$this->register_jet_control(
			'form_break_button_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['prev'],
					),
					array(
						'property' => 'typography',
						'selector' => $css_selectors['next'],
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_button_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'background-color',
						'selector' => $css_selectors['prev'],
					),
					array(
						'property' => 'background-color',
						'selector' => $css_selectors['next'],
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_button_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['prev'],
					),
					array(
						'property' => 'margin',
						'selector' => $css_selectors['next'],
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_button_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['prev'],
					),
					array(
						'property' => 'padding',
						'selector' => $css_selectors['next'],
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_button_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['prev'],
					),
					array(
						'property' => 'border',
						'selector' => $css_selectors['next'],
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End form break buttons style

	// Start form break disabled message style
	public function control_group_form_break_message_style() {
		$this->register_jet_control_group(
			'section_form_break_message_style',
			array(
				'title' => esc_html__( 'Form Break Disabled Message', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_form_break_message_style() {
		$this->start_jet_control_group( 'section_form_break_message_style' );

		$css_selector = $this->css_selector( '__next-page-msg' );

		$this->register_jet_control(
			'form_break_message_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_message_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-break-message-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'form_break_message_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_message_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'form_break_message_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End form break disabled message style

	// Start progress wrap
	public function control_group_form_progress_wrap_style() {
		$this->register_jet_control_group(
			'jet_fb_progress_wrapper_section',
			array(
				'title' => esc_html__( 'Form Progress - Wrapper', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_form_progress_wrap_style() {
		$this->start_jet_control_group( 'jet_fb_progress_wrapper_section' );

		$this->register_jet_control(
			'jet_fb_progress_wrapper_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-wrapper-bgc' ) ),
			)
		);

		$css_selector = $this->css_selector( '-progress-pages' );

		$this->register_jet_control(
			'jet_fb_progress_wrapper_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_wrapper_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_wrapper_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selector,
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End progress wrap

	// Start progress pages
	public function control_group_form_progress_pages_style() {
		$this->register_jet_control_group(
			'jet_fb_progress_pages_section',
			array(
				'title' => esc_html__( 'Form Progress - Pages', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_form_progress_pages_style() {
		$this->start_jet_control_group( 'jet_fb_progress_pages_section' );

		$css_selectors = array(
			'wrapper'     => $this->css_selector( '-progress-pages__item--wrapper' ),
			'item'        => $this->css_selector( '-progress-pages__item' ),
			'circle'      => $this->css_selector( '-progress-pages__item--circle' ),
			'passed-page' => $this->css_selector( '-progress-pages__item--wrapper.passed-page' ),
			'active-page' => $this->css_selector( '-progress-pages__item--wrapper.active-page' ),
		);

		$this->register_jet_control(
			'jet_fb_progress_wrapper_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['wrapper'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-default-page-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['item'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['item'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['item'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_separator_height',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Separator height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => array( array( 'property' => '--jfb-progress-default-page-separator-h' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_separator_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Separator color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-default-page-separator-color' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_circle_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Circle border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['circle'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Passed page', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'color',
						'selector' => $css_selectors['passed-page'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-passed-page-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_border_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'border-color',
						'selector' => '.passed-page ' . $css_selectors['item'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_separator_height',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Separator height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => array( array( 'property' => '--jfb-progress-passed-page-separator-h' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_separator_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Separator color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-passed-page-separator-color' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_circle_border_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Circle border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'border-color',
						'selector' => '.passed-page ' . $css_selectors['circle'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Active page', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'color',
						'selector' => $css_selectors['active-page'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-active-page-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_border_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'border-color',
						'selector' => '.active-page ' . $css_selectors['item'],
					),
				),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_separator_height',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Separator height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => array( array( 'property' => '--jfb-progress-active-page-separator-h' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_separator_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Separator color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-progress-active-page-separator-color' ) ),
			)
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_circle_border_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Circle border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array(
					array(
						'property' => 'border-color',
						'selector' => '.active-page ' . $css_selectors['circle'],
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End progress pages

	// Start message style
	public function control_group_message_style() {
		$this->register_jet_control_group(
			'section_message_style',
			array(
				'title' => esc_html__( 'Messages', 'jet-form-builder' ),
				'tab'   => 'style',
			)
		);
	}

	public function controls_message_style() {
		$this->start_jet_control_group( 'section_message_style' );

		$css_selectors = array(
			'success' => $this->css_selector( '-message--success' ),
			'error'   => $this->css_selector( '-message--error' ),
		);

		$this->register_jet_control(
			'message_margin',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'margin',
						'selector' => $css_selectors['success'],
					),
					array(
						'property' => 'margin',
						'selector' => $css_selectors['error'],
					),
				),
			)
		);

		$this->register_jet_control(
			'message_padding',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => array(
					array(
						'property' => 'padding',
						'selector' => $css_selectors['success'],
					),
					array(
						'property' => 'padding',
						'selector' => $css_selectors['error'],
					),
				),
			)
		);

		$this->register_jet_control(
			'message_success_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Success message', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'message_success_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['success'],
					),
				),
			)
		);

		$this->register_jet_control(
			'message_success_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-message-success-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'message_success_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['success'],
					),
				),
			)
		);

		$this->register_jet_control(
			'message_error_heading',
			array(
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Error message', 'jet-form-builder' ),
			)
		);

		$this->register_jet_control(
			'message_error_typography',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => array(
					array(
						'property' => 'typography',
						'selector' => $css_selectors['error'],
					),
				),
			)
		);

		$this->register_jet_control(
			'message_error_bg_color',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => array( array( 'property' => '--jfb-message-error-bgc' ) ),
			)
		);

		$this->register_jet_control(
			'message_error_border',
			array(
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => array(
					array(
						'property' => 'border',
						'selector' => $css_selectors['error'],
					),
				),
			)
		);

		$this->end_jet_control_group();
	}
	// End message style


	/**
	 * Enqueue element styles and scripts
	 *
	 * @noinspection PhpUnhandledExceptionInspection
	 */
	public function enqueue_scripts() {
		$module = jet_form_builder()->compat( 'bricks' );

		wp_enqueue_style(
			$module->get_handle( 'frontend' ),
			$module->get_url( 'assets/build/frontend.css' ),
			array( 'jet-form-builder-frontend' ),
			Plugin::instance()->get_version()
		);
	}

	/**
	 * Render element HTML
	 *
	 * @noinspection PhpUnhandledExceptionInspection
	 */
	public function render() {

		$settings = $this->parse_jet_render_attributes( $this->get_jet_settings() );

		// STEP: Form field is empty: Show placeholder text
		if ( empty( $settings['form_id'] ) ) {
			return $this->render_element_placeholder(
				array(
					'title' => esc_html__( 'Please select form to show.', 'jet-form-builder' ),
				)
			);
		}

		$this->enqueue_scripts();

		/** @var Blocks\Module $blocks */
		$blocks = jet_form_builder()->module( \Jet_Form_Builder\Blocks\Module::class );

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo "<div {$this->render_attributes( '_root' )}>";
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $blocks->get_form_class()->render_callback_field( $settings );
		echo '</div>';
	}

	public function css_selector( $mod = null ) {
		return sprintf( '%1$s%2$s', '.jet-form-builder', $mod );
	}
}
