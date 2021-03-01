<?php


namespace Jet_Form_Builder\Widgets;


use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Widgets\Types;

class Elementor_Controller {

	private $_types = array();

	public function __construct() {
		add_action( 'elementor/init', array( $this, 'setup_widgets' ) );
		add_action( 'elementor/init', array( $this, 'register_category' ) );
		add_action( 'elementor/editor/after_enqueue_styles', array( $this, 'editor_styles' ) );
		add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ), 11 );
		add_action( 'elementor/preview/enqueue_scripts', array( $this, 'enqueue_form_assets' ) );
	}

	public function enqueue_form_assets() {
		Plugin::instance()->blocks->enqueue_frontend_assets();
	}

	private function widgets() {
		return array(
			new Types\Form()
		);
	}

	/**
	 * Register category for elementor if not exists
	 *
	 * @return void
	 */
	public function register_category() {

		$elements_manager = \Elementor\Plugin::instance()->elements_manager;

		$elements_manager->add_category(
			'jet-form-builder',
			array(
				'title' => esc_html__( 'JetFormBuilder', 'jet-form-builder' ),
				'icon'  => 'font',
			)
		);
	}

	/**
	 * Enqueue editor styles
	 *
	 * @return void
	 */
	public function editor_styles() {

		wp_enqueue_style(
			'jet-form-builder-icons',
			jet_form_builder()->plugin_url( 'assets/css/icons.css' ),
			array(),
			jet_form_builder()->get_version()
		);

	}

	public function setup_widgets() {
		foreach ( $this->widgets() as $widget ) {
			$this->setup_widget( $widget );
		}
	}

	private function setup_widget( $widget ) {
		$this->_types[ $widget->get_name() ] = $widget;
	}

	public function register_widgets( $manager ) {
		foreach ( $this->_types as $widget ) {
			$manager->register_widget_type( $widget );
		}
	}

}