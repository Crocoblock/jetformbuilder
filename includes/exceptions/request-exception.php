<?php


namespace Jet_Form_Builder\Exceptions;


class Request_Exception extends Handler_Exception {

	private $errors;

	public function __construct( $message = "", $errors = array() ) {
		$this->errors = $errors;

		parent::__construct( $message, array() );
	}

	public function get_fields_errors() {
		return $this->errors;
	}



}