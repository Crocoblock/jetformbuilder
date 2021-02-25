<?php


namespace Jet_Form_Builder\Widgets;


use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Widgets\Types;

class Elementor_Controller {

	private $_types = array();

	public function __construct() {
		add_action( 'elementor/init', array( $this, 'init_components' ) );
	}

	public function init_components() {
		$this->setup_widgets();
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

	private function setup_widgets() {
		foreach ( $this->widgets() as $widget ) {
			$this->setup_widget( $widget );
		}
	}

	public function setup_widget( $widget ) {
		$this->_types[ $widget->get_name() ] = $widget;
	}

	public function register_widgets( $manager ) {
		foreach ( $this->_types as $widget ) {
			$manager->register_widget_type( $widget );
		}
	}

}