<?php


namespace Jet_Form_Builder\Exceptions;

use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Form_Messages\Manager;

abstract class Handler_Exception extends \Exception {

	protected $default_type_message = 'failed';
	protected $dynamic_message      = '';

	protected $additional_data;

	public function __construct( $message = '', ...$additional_data ) {
		parent::__construct( $message, 0, null );

		$this->additional_data = $additional_data;

		if ( $this->save_exception() ) {
			Logger::instance()->log( $this );
		}
	}

	public function save_exception(): bool {
		return true;
	}

	public function dynamic_success(): Handler_Exception {
		$this->message = Manager::dynamic_success( $this->message );

		return $this;
	}

	public function dynamic_error(): Handler_Exception {
		$this->message = Manager::dynamic_error( $this->message );

		return $this;
	}


	public function get_form_status() {
		return $this->message ? $this->message : $this->default_type_message;
	}

	public function get_additional() {
		return $this->additional_data;
	}

}
