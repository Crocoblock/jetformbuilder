<?php


namespace Jet_Form_Builder\Widgets\Types;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

class Form extends Widget_Base {

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );

		add_action(
			'jet-engine/booking-form/register-controls',
			array( $this, 'booking_form_register_controls' )
		);

		add_filter(
			'jet-engine/forms/pre-render-form',
			array( $this, 'booking_form_render' ), 10, 2
		);

		/*add_filter(
			'jet-engine/booking-form/is-register-custom-style-controls',
			'__return_true'
		);

		add_action(
			'jet-engine/booking-form/register-custom-style-controls',
			array( $this, 'booking_form_register_style_controls' )
		);*/
	}


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

	private function jet_form_builder_slug() {
		return jet_form_builder()->post_type->slug();
	}

	private function jet_engine_form_slug() {
		return jet_engine()->forms->slug();
	}

	public function booking_form_register_controls( $booking_form ) {
		$booking_form->remove_control( '_form_id' );

		$booking_form->add_control(
			'form_provider',
			array(
				'label'   => __( 'Choose Provider', 'jet-form-builder' ),
				'type'    => Controls_Manager::CHOOSE,
				'options' => array(
					$this->jet_form_builder_slug() => array(
						'title' => __( 'JetFormBuilder', 'jet-form-builder' ),
						'icon'  => 'fa fa-align-left',
					),
					$this->jet_engine_form_slug()  => array(
						'title' => __( 'JetEngine', 'jet-form-builder' ),
						'icon'  => 'fa fa-align-center',
					),
				),
				'default' => $this->jet_engine_form_slug(),
			)
		);

		$booking_form->add_control(
			'_form_id',
			array(
				'label'      => __( 'Select JetEngine form', 'jet-form-builder' ),
				'type'       => 'jet-query',
				'query_type' => 'post',
				'query'      => array(
					'post_type' => $this->jet_engine_form_slug(),
				),
				'condition'  => array( 'form_provider' => $this->jet_engine_form_slug() )
			)
		);

		$booking_form->add_control(
			'form_id',
			array(
				'label'      => __( 'Select JetForm', 'jet-form-builder' ),
				'type'       => 'jet-query',
				'query_type' => 'post',
				'query'      => array(
					'post_type' => $this->jet_form_builder_slug(),
				),
				'condition'  => array( 'form_provider' => $this->jet_form_builder_slug() )
			)
		);
	}

	public function booking_form_register_style_controls( $booking_form ) {

	}

	public function booking_form_render( $result, $settings ) {
		$slug = $this->jet_form_builder_slug();

		if ( empty( $settings['form_provider'] ) || $slug !== $settings['form_provider'] ) {
			return false;
		}
		if ( empty( $settings['form_id'] ) ) {
			return __( 'Please, select JetForm to show', 'jet-form-builder' );
		}

		return jet_fb_render_form( $settings );
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

		echo jet_fb_render_form( $settings );
	}


}