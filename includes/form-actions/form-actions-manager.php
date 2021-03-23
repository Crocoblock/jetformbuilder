<?php


namespace Jet_Form_Builder;


use Jet_Form_Builder\Form_Actions\Types\Base_Form_Action;

class Form_Actions_Manager {

	private $_types = array();

	public function __construct() {
		$this->register_actions();
	}

	public function register_action( Base_Form_Action $action ) {
		$this->_types[ $action->get_id() ] = $action;
	}

	public function register_actions() {

		$actions = apply_filters( 'jet-form-builder/form-actions/register', array(

		) );

		foreach ( $actions as $action ) {
			$this->register_action( $action );
		}
	}

}
