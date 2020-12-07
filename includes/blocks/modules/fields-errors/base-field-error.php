<?php


namespace Jet_Form_Builder\Blocks\Modules\Fields_Errors;


abstract class Base_Field_Error {

	protected $name;
	protected $message;
	protected $params;

	abstract public function get_name();
	abstract public function get_title();

	public function set_params( $params = array() ) {
		$this->name = $params['name'];
		$this->message = $params['message'];
		$this->params = $params['params'];
	}

	public function error() {
		return 'This field has an error.';
	}

}