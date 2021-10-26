<?php


namespace Jet_Form_Builder\Blocks\Modules\Fields_Errors;

abstract class Base_Field_Error {

	protected $name;
	protected $message;
	protected $params;

	abstract public function get_name();
	abstract public function get_title();

	public function set_params( $params = array() ) {
		$this->name    = $params['name'];
		$this->message = $params['message'];
		$this->params  = $params['params'];
	}

	public function get_manager( $data = array() ) {
		return jet_form_builder()->msg_router->get_manager( $data );
	}

	public function error() {
		return $this->get_manager()->get_message( 'empty_field' );
	}

}
