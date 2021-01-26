<?php


namespace Jet_Form_Builder\Widgets\Types;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

class Form extends Widget_Base {


	/**
	 * @return string
	 */
	public function get_name() {
		return 'jet-form-builder-form';
	}

	public function get_title() {
		return __( 'JetForm', 'jet-form-builder' );
	}

	public function get_icon() {
		return 'jet-engine-icon-forms';
	}

	public function get_categories() {
		return array( 'jet-listing-elements' );
	}

	/**
	 * Register the widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.1.0
	 *
	 * @access protected
	 */
	protected function _register_controls() {

		$options = Tools::get_form_settings_options( true );
	    
		$this->start_controls_section(
			'section_form_settings',
			[
				'label' => __( 'Form Settings', 'jet-form-builder' ),
			]
		);

		$this->add_control(
			'form_id',
			array(
				'label'       => __( 'Choose Form', 'jet-form-builder' ),
				'type'        => Controls_Manager::SELECT2,
				'default'     => '',
				'label_block' => true,
				'options'     => Tools::get_forms_list_for_js( true ),
			)
		);

		$this->add_control(
			'fields_layout',
			[
				'label'   => __( 'Fields Layout', 'jet-form-builder' ),
				'type'    => Controls_Manager::SELECT,
				'default' => __( 'column', 'jet-form-builder' ),
				'options' => $options['fields_layout']
			]
		);

		$this->add_control(
			'required_mark',
			[
				'label'   => __( 'Required Mark', 'jet-form-builder' ),
				'type'    => Controls_Manager::TEXT,
				'default' => __( '*', 'jet-form-builder' ),
			]
		);

		$this->add_control(
			'submit_type',
			[
				'label'   => __( 'Submit Type', 'jet-form-builder' ),
				'type'    => Controls_Manager::SELECT,
				'default' => __( 'reload', 'jet-form-builder' ),
				'options' => $options['submit_type']
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Render the widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.1.0
	 *
	 * @access protected
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();

		echo Plugin::instance()->blocks->get_form_class()->render_callback_field( $settings );
	}


}