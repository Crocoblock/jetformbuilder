<?php


namespace Jet_Form_Builder\Widgets;


use Jet_Form_Builder\Widgets\Types;

class Controller {

	private $_types = array();

	public function __construct() {
		$this->maybe_init();
	}

	private function maybe_init() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return;
		}

		$this->setup_widgets();
		add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ), 20 );
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

	private function register_widgets( $manager ) {
		foreach ( $this->_types as $widget ) {
			$manager->register_widget_type( $widget );
		}
	}

}