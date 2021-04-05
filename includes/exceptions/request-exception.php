<?php


namespace Jet_Form_Builder\Exceptions;


class Request_Exception extends Handler_Exception {

	private $errors;

	public function __construct( $message = "", ...$errors ) {
		$this->errors = $errors[0];

		parent::__construct( $message, $errors );
	}

	public function get_fields_errors() {
		return $this->errors;
	}



}