<?php


namespace JFB_Compatibility\Bricks\Widgets;

// If this file is called directly, abort.
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Handle_It;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form extends Base implements Base_Module_Handle_It, Base_Module_Url_It {

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;

	public function rep_item_id() {
		return 'bricks';
	}

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
			[
				'title' => esc_html__( 'Form settings', 'jet-form-builder' ),
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
				'css'   => [ [ 'property' => '--jfb-row-mt' ] ],
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
				'css'   => [ [ 'property' => '--jfb-row-mb' ] ],
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

		$selector_part = '__label';

		$this->register_jet_control(
			'label_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $selector_part ),
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
				'css'   => [ [ 'property' => '--jfb-label-bgc' ] ],
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
						'selector' => $this->css_selector( $selector_part ),
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
						'selector' => $this->css_selector( $selector_part ),
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
						'selector' => $this->css_selector( $selector_part ),
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

		$selector_part = '__desc';

		$this->register_jet_control(
			'description_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $selector_part ),
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
				'css'   => [ [ 'property' => '--jfb-desc-bgc' ] ],
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
						'selector' => $this->css_selector( $selector_part ),
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
						'selector' => $this->css_selector( $selector_part ),
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
						'selector' => $this->css_selector( $selector_part ),
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
				'title' => esc_html__( 'Input fields', 'jet-form-builder' ),
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
				'css'   => [ [ 'property' => '--jfb-input-phc' ] ],
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
					]
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
				'css'   => [ [ 'property' => '--jfb-input-w' ] ],
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
				'css'   => [ [ 'property' => '--jfb-input-h' ] ],
			]
		);

		$this->register_jet_control(
			'input_color_scheme',
			[
				'tab'         => 'style',
				'label'       => esc_html__( 'Color scheme', 'jet-form-builder' ),
				'type'        => 'select',
				'options'     => [
					'normal' => esc_html__( 'Normal', 'jet-form-builder' ),
					'light'  => esc_html__( 'Light', 'jet-form-builder' ),
					'dark'   => esc_html__( 'Dark', 'jet-form-builder' ),
				],
				'default'     => 'normal',
				'description' => esc_html__( 'Affects default browser UI elements like date and time icons, UI etc.', 'jet-form-builder' ),
				'css'         => [ [ 'property' => '--jfb-input-color-scheme' ] ],
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
				'title' => esc_html__( 'Checkbox & Radio fields', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_checkradio_style() {
		$this->start_jet_control_group( 'section_checkradio_style' );

		$this->register_jet_control(
			'checkradio_fields_layout',
			[
				'tab'     => 'style',
				'label'   => esc_html__( 'Layout', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => [
					'inline-block' => esc_html__( 'Horizontal', 'jet-form-builder' ),
					'block'        => esc_html__( 'Vertical', 'jet-form-builder' ),
				],
				'default' => 'block',
				'css'     => [ [ 'property' => '--jfb-checkradio-d' ] ],
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
				'css'   => [ [ 'property' => '--jfb-checkradio-mr' ] ],
			]
		);

		$this->register_jet_control(
			'checkradio_fields_control_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Control size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jfb-checkradio-fz' ] ],
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
						'selector' => $this->css_selector( '__field-label' ),
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
						'selector' => $this->css_selector( '__field-label > span::before' ),
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
				'css'   => [ [ 'property' => '--jfb-checkradio-input-bgc' ] ],
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
				'css'   => [ [ 'property' => '--jfb-checkradio-input-checked-bgc' ] ],
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
						'selector' => $this->css_selector( '__field-label :checked + span::before' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End checkbox & radio fields style

	// Start calculated fields
	public function control_group_calc_fields_style() {
		$this->register_jet_control_group(
			'section_calc_fields_style',
			[
				'title' => esc_html__( 'Calculated fields', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_calc_fields_style() {
		$this->start_jet_control_group( 'section_calc_fields_style' );

		$this->register_jet_control(
			'calc_fields_align_main_axis',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Align main axis', 'jet-smart-filters' ),
				'type'  => 'justify-content',
				'css'   => [ [ 'property' => '--jfb-calc-justify-content' ] ],
			]
		);

		$this->register_jet_control(
			'calc_fields_gap',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Gap', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 40,
				'css'   => [ [ 'property' => '--jfb-calc-gap' ] ],
			]
		);

		$selector_part = '__calculated-field';

		$this->register_jet_control(
			'calc_fields_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'calc_fields_prefix_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jfb-calc-prefix-fz' ] ],
			]
		);

		$this->register_jet_control(
			'calc_fields_prefix_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-calc-prefix-color' ] ],
			]
		);

		$this->register_jet_control(
			'calc_fields_suffix_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jfb-calc-suffix-fz' ] ],
			]
		);

		$this->register_jet_control(
			'calc_fields_suffix_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-calc-suffix-color' ] ],
			]
		);

		$this->register_jet_control(
			'calc_fields_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-calc-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'calc_fields_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'calc_fields_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'calc_fields_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End calculated fields

	// Start range fields
	public function control_group_range_fields_style() {
		$this->register_jet_control_group(
			'section_range_fields_style',
			[
				'title' => esc_html__( 'Range fields', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_range_fields_style() {
		$this->start_jet_control_group( 'section_range_fields_style' );

		$this->register_jet_control(
			'range_max_width',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Max width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 1000,
				'css'   => [ [ 'property' => '--jfb-range-mw' ] ],
			]
		);

		$this->register_jet_control(
			'range_slider_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Slider', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'track_height',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Track height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 20,
				'css'   => [ [ 'property' => '--jet-fb__range-field-range--height' ] ],
			]
		);

		$this->register_jet_control(
			'thumb_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Thumb size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 20,
				'css'   => [ [ 'property' => '--jet-fb__range-field-slider--size' ] ],
			]
		);

		$this->register_jet_control(
			'track_border_radius',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Track border radius', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jet-fb__range-field-range--br' ] ],
			]
		);

		$this->register_jet_control(
			'thumb_border_radius',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Thumb border radius', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jet-fb__range-field-slider--br' ] ],
			]
		);

		$this->register_jet_control(
			'track_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Track color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jet-fb__range-field-range--bgc' ] ],
			]
		);

		$this->register_jet_control(
			'thumb_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Thumb color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jet-fb__range-field-slider--bgc' ] ],
			]
		);

		$this->register_jet_control(
			'range_value_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Value', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'range_value_gap',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Gap', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 0,
				'max'   => 40,
				'css'   => [ [ 'property' => '--jfb-range-value-gap' ] ],
			]
		);

		$this->register_jet_control(
			'range_value_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__field-value.range-value' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'range_prefix_value_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jfb-range-value-prefix-fz' ] ],
			]
		);

		$this->register_jet_control(
			'range_prefix_value_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Prefix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-range-value-prefix-color' ] ],
			]
		);

		$this->register_jet_control(
			'range_suffix_value_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 50,
				'css'   => [ [ 'property' => '--jfb-range-value-suffix-fz' ] ],
			]
		);

		$this->register_jet_control(
			'range_suffix_value_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Suffix color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-range-value-suffix-color' ] ],
			]
		);

		$this->end_jet_control_group();
	}
	// End range fields

	// Start heading style
	public function control_group_heading_style() {
		$this->register_jet_control_group(
			'section_headings_style',
			[
				'title' => esc_html__( 'Heading', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_heading_style() {
		$this->start_jet_control_group( 'section_headings_style' );

		$this->register_jet_control(
			'heading_label_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Label', 'jet-form-builder' ),
			]
		);

		$selector_part = '__heading';

		$this->register_jet_control(
			'heading_label_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_label_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-heading-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'heading_label_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_label_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_label_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_desc_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Description', 'jet-form-builder' ),
			]
		);

		$selector_part = '__heading-desc';

		$this->register_jet_control(
			'heading_desc_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_desc_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-heading-desc-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'heading_desc_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_desc_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->register_jet_control(
			'heading_desc_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( $selector_part ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End heading style

	// Start repeater style
	public function control_group_repeater_style() {
		$this->register_jet_control_group(
			'section_repeater_style',
			[
				'title' => esc_html__( 'Repeater', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_repeater_style() {
		$this->start_jet_control_group( 'section_repeater_style' );

		$this->register_jet_control(
			'repeater_row_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Repeater row', 'jet-form-builder' ),
			]
		);

		$selector_parts = [
			'row'    => '-repeater__row',
			'new'    => '-repeater__new',
			'remove' => '-repeater__remove',
		];

		$this->register_jet_control(
			'booking_form_repeater_row_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $selector_parts['row'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'repeater_add_button_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'New item button', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_align_main_axis',
			[
				'tab'     => 'style',
				'label'   => esc_html__( 'Align main axis', 'jet-smart-filters' ),
				'type'    => 'justify-content',
				'exclude' => [
					'space-between',
					'space-around',
					'space-evenly',
				],
				'css'     => [ [ 'property' => '--jfb-repeater-add-button-justify-content' ] ],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( $selector_parts['new'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( $selector_parts['new'] ),
					]
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( $selector_parts['new'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $selector_parts['new'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( $selector_parts['new'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_box_shadow',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-smart-filters' ),
				'type'  => 'box-shadow',
				'css'   => [
					[
						'property' => 'box-shadow',
						'selector' => $this->css_selector( $selector_parts['new'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'repeater_rem_button_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Remove item button', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_size',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Icon size', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 12,
				'max'   => 90,
				'css'   => [ [ 'property' => '--jfb-repeater-rem-button-fz' ] ],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-repeater-rem-button-color' ] ],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-repeater-rem-button-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( $selector_parts['remove'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( $selector_parts['remove'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( $selector_parts['remove'] ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_repeater_rem_box_shadow',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-smart-filters' ),
				'type'  => 'box-shadow',
				'css'   => [
					[
						'property' => 'box-shadow',
						'selector' => $this->css_selector( $selector_parts['remove'] ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End repeater style

	// Start conditional style
	public function control_group_conditional_style() {
		$this->register_jet_control_group(
			'section_conditional_style',
			[
				'title' => esc_html__( 'Conditional', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_conditional_style() {
		$this->start_jet_control_group( 'section_conditional_style' );

		$this->register_jet_control(
			'conditional_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-conditional-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'conditional_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__conditional' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'conditional_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__conditional' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'conditional_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__conditional' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'conditional_box_shadow',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-smart-filters' ),
				'type'  => 'box-shadow',
				'css'   => [
					[
						'property' => 'box-shadow',
						'selector' => $this->css_selector( '__conditional' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End conditional style

	// Start submit style
	public function control_group_submit_style() {
		$this->register_jet_control_group(
			'section_submit_style',
			[
				'title' => esc_html__( 'Submit', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_submit_style() {
		$this->start_jet_control_group( 'section_submit_style' );

		$this->register_jet_control(
			'booking_form_submit_align_main_axis',
			[
				'tab'     => 'style',
				'label'   => esc_html__( 'Align main axis', 'jet-smart-filters' ),
				'type'    => 'justify-content',
				'exclude' => [
					'space-between',
					'space-around',
					'space-evenly',
				],
				'css'     => [ [ 'property' => '--jfb-submit-justify-content' ] ],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_width',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 1000,
				'css'   => [ [ 'property' => '--jfb-submit-w' ] ],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__submit' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__submit' ),
					]
				],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__submit' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__submit' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__submit' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'booking_form_submit_box_shadow',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Box shadow', 'jet-smart-filters' ),
				'type'  => 'box-shadow',
				'css'   => [
					[
						'property' => 'box-shadow',
						'selector' => $this->css_selector( '__submit' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End label style

	// Start form break style
	public function control_group_form_break_style() {
		$this->register_jet_control_group(
			'section_form_break_style',
			[
				'title' => esc_html__( 'Form Break Row', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_form_break_style() {
		$this->start_jet_control_group( 'section_form_break_style' );

		$this->register_jet_control(
			'form_break_alignment',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Text align', 'jet-form-builder' ),
				'type'  => 'text-align',
				'css'   => [ [ 'property' => '--jfb-break-text-align' ] ],
			]
		);

		$this->register_jet_control(
			'form_break_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__next-page-wrap' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__next-page-wrap' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End form break style

	// Start form break buttons style
	public function control_group_form_break_buttons_style() {
		$this->register_jet_control_group(
			'section_form_break_next_style',
			[
				'title' => esc_html__( 'Form Break Buttons', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_form_break_buttons_style() {
		$this->start_jet_control_group( 'section_form_break_next_style' );

		$this->register_jet_control(
			'form_break_button_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__prev-page' ),
					],
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__next-page' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_button_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__prev-page' ),
					],
					[
						'property' => 'background-color',
						'selector' => $this->css_selector( '__next-page' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_button_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__prev-page' ),
					],
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__next-page' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_button_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__prev-page' ),
					],
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__next-page' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_button_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__prev-page' ),
					],
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__next-page' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End form break buttons style

	// Start form break disabled message style
	public function control_group_form_break_message_style() {
		$this->register_jet_control_group(
			'section_form_break_message_style',
			[
				'title' => esc_html__( 'Form Break Disabled Message', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_form_break_message_style() {
		$this->start_jet_control_group( 'section_form_break_message_style' );

		$this->register_jet_control(
			'form_break_message_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '__next-page-msg' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_message_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-break-message-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'form_break_message_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '__next-page-msg' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_message_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '__next-page-msg' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'form_break_message_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '__next-page-msg' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End form break disabled message style

	// Start progress wrap
	public function control_group_form_progress_wrap_style() {
		$this->register_jet_control_group(
			'jet_fb_progress_wrapper_section',
			[
				'title' => esc_html__( 'Form Progress - Wrapper', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_form_progress_wrap_style() {
		$this->start_jet_control_group( 'jet_fb_progress_wrapper_section' );

		$this->register_jet_control(
			'jet_fb_progress_wrapper_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-wrapper-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_wrapper_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '-progress-pages' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_wrapper_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '-progress-pages' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_wrapper_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '-progress-pages' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End progress wrap

	// Start progress pages
	public function control_group_form_progress_pages_style() {
		$this->register_jet_control_group(
			'jet_fb_progress_pages_section',
			[
				'title' => esc_html__( 'Form Progress - Pages', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_form_progress_pages_style() {
		$this->start_jet_control_group( 'jet_fb_progress_pages_section' );

		$this->register_jet_control(
			'jet_fb_progress_wrapper_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '-progress-pages__item--wrapper' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-default-page-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '-progress-pages__item' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '-progress-pages__item' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_pages_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '-progress-pages__item' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_separator_height',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Separator height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => [ [ 'property' => '--jfb-progress-default-page-separator-h' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_separator_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Separator color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-default-page-separator-color' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_circle_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Circle border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '-progress-pages__item--circle' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Passed page', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'color',
						'selector' => $this->css_selector( '-progress-pages__item--wrapper.passed-page' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-passed-page-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_border_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'border-color',
						'selector' => '.passed-page ' . $this->css_selector( '-progress-pages__item' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_separator_height',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Separator height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => [ [ 'property' => '--jfb-progress-passed-page-separator-h' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_separator_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Separator color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-passed-page-separator-color' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_passed_page_circle_border_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Circle border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'border-color',
						'selector' => '.passed-page ' . $this->css_selector( '-progress-pages__item--circle' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Active page', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'color',
						'selector' => $this->css_selector( '-progress-pages__item--wrapper.active-page' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-active-page-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_border_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'border-color',
						'selector' => '.active-page ' . $this->css_selector( '-progress-pages__item' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_separator_height',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Separator height', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 1,
				'max'   => 100,
				'css'   => [ [ 'property' => '--jfb-progress-active-page-separator-h' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_separator_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Separator color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-progress-active-page-separator-color' ] ],
			]
		);

		$this->register_jet_control(
			'jet_fb_progress_active_page_circle_border_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Circle border color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [
					[
						'property' => 'border-color',
						'selector' => '.active-page ' . $this->css_selector( '-progress-pages__item--circle' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End progress pages

	// Start message style
	public function control_group_message_style() {
		$this->register_jet_control_group(
			'section_message_style',
			[
				'title' => esc_html__( 'Messages', 'jet-form-builder' ),
				'tab'   => 'style',
			]
		);
	}

	public function controls_message_style() {
		$this->start_jet_control_group( 'section_message_style' );

		$this->register_jet_control(
			'message_margin',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Margin', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '-message--success' ),
					],
					[
						'property' => 'margin',
						'selector' => $this->css_selector( '-message--error' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'message_padding',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Padding', 'jet-form-builder' ),
				'type'  => 'dimensions',
				'css'   => [
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '-message--success' ),
					],
					[
						'property' => 'padding',
						'selector' => $this->css_selector( '-message--error' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'message_success_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Success message', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'message_success_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '-message--success' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'message_success_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-message-success-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'message_success_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '-message--success' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'message_error_heading',
			[
				'tab'   => 'style',
				'type'  => 'separator',
				'label' => esc_html__( 'Error message', 'jet-form-builder' ),
			]
		);

		$this->register_jet_control(
			'message_error_typography',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Typography', 'jet-form-builder' ),
				'type'  => 'typography',
				'css'   => [
					[
						'property' => 'typography',
						'selector' => $this->css_selector( '-message--error' ),
					],
				],
			]
		);

		$this->register_jet_control(
			'message_error_bg_color',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Background color', 'jet-form-builder' ),
				'type'  => 'color',
				'css'   => [ [ 'property' => '--jfb-message-error-bgc' ] ],
			]
		);

		$this->register_jet_control(
			'message_error_border',
			[
				'tab'   => 'style',
				'label' => esc_html__( 'Border', 'jet-form-builder' ),
				'type'  => 'border',
				'css'   => [
					[
						'property' => 'border',
						'selector' => $this->css_selector( '-message--error' ),
					],
				],
			]
		);

		$this->end_jet_control_group();
	}
	// End message style


	// Enqueue element styles and scripts
	public function enqueue_scripts() {
		wp_enqueue_style(
			$this->get_handle( 'frontend' ),
			$this->get_url( 'assets/build/css/frontend/frontend.css' ),
			[ 'jet-form-builder-frontend' ],
			Plugin::instance()->get_version(),
		);
	}

	// Render element HTML
	public function render() {

		$settings = $this->parse_jet_render_attributes( $this->get_jet_settings() );

		// STEP: Form field is empty: Show placeholder text
		if ( empty( $settings['form_id'] ) ) {
			return $this->render_element_placeholder(
				[
					'title' => esc_html__( 'Please select form to show.', 'jet-form-builder' )
				]
			);
		}

		$this->enqueue_scripts();

		$blocks = jet_form_builder()->module( \Jet_Form_Builder\Blocks\Module::class );

		echo "<div {$this->render_attributes( '_root' )}>";
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $blocks->get_form_class()->render_callback_field( $settings );
		echo "</div>";
	}

	public function css_selector( $mod = null ) {
		return sprintf( '%1$s%2$s', '.jet-form-builder', $mod );
	}
}
