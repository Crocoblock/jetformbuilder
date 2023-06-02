<?php


namespace JFB_Compatibility\Elementor;

use Elementor\Widget_Base;
use JFB_Compatibility\Elementor\Widgets\Form;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Widget_Controller {

	private $types;

	public function __construct() {
		add_action( 'elementor/init', array( $this, 'init_widgets' ) );
		add_action( 'elementor/editor/after_enqueue_styles', array( $this, 'editor_styles' ) );
		add_action( 'elementor/preview/enqueue_scripts', array( $this, 'enqueue_form_assets' ) );
		add_action( 'elementor/elements/categories_registered', array( $this, 'register_category' ) );

		// compatibility with 3.7
		if (
			defined( 'ELEMENTOR_VERSION' ) &&
			version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' )
		) {
			add_action( 'elementor/widgets/register', array( $this, 'register_widgets' ) );
		} else {
			add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
		}
	}

	public function init_widgets() {
		$this->types = array(
			new Form(),
		);

		foreach ( $this->types as $type ) {
			$type->init_hooks();
		}
	}

	public function enqueue_form_assets() {
		wp_enqueue_style( 'jet-form-builder-frontend' );
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


	public function register_widgets( $manager ) {
		foreach ( $this->types as $widget ) {
			// compatibility with 3.7
			if ( method_exists( $manager, 'register' ) ) {
				$manager->register( $widget );
			} else {
				$manager->register_widget_type( $widget );
			}
		}
	}

}
