<?php


namespace Jet_Form_Builder\Form_Actions;


use Jet_Form_Builder\Form_Actions\Types\Duplicate_Action;
use Jet_Form_Builder\Form_Actions\Types\Export_Action;
use Jet_Form_Builder\Form_Actions\Types\Import_Action;

class Form_Actions_Manager {

	private $_types = array();

	public function __construct() {
		$this->register_actions();

		add_filter( 'post_row_actions', array( $this, 'base_add_action_links' ), 10, 2 );
	}

	public function register_action( Base_Form_Action $action ) {
		$this->_types[ $action->get_id() ] = $action;
	}

	public function register_actions() {

		$actions = apply_filters( 'jet-form-builder/form-actions/register', array(
			new Export_Action(),
			new Import_Action(),
			new Duplicate_Action(),
		) );

		foreach ( $actions as $action ) {
			$this->register_action( $action );
		}
	}

	public function base_add_action_links( $actions, $post ) {
		foreach ( $this->_types as $type ) {
			if ( $type->display_action_link() ) {
				$actions = $type->register_action( $actions, $post );
			}
		}

		return $actions;
	}

}
