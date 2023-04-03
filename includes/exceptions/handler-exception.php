<?php


namespace Jet_Form_Builder\Exceptions;

use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Form_Messages\Manager;
use \Jet_Form_Builder\Dev_Mode\Manager as DevManager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Handler_Exception extends \Exception {

	protected $default_type_message = 'failed';

	protected $additional_data;

	public function __construct( $message = '', ...$additional_data ) {
		parent::__construct( $message, 0, null );

		$this->additional_data = $additional_data;

		$this->log();
	}

	public function set_code( $code ) {
		$this->code = $code;

		return $this;
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
		return $this->message ?: $this->default_type_message;
	}

	public function get_additional() {
		return $this->additional_data;
	}

	public function unset_log() {
		Logger::instance()->unset_last( static::class );
	}

	public function log() {
		if ( ! DevManager::instance()->active() ) {
			return;
		}
		Logger::instance()->push_log(
			static::class,
			array(
				'message'   => $this->getMessage(),
				'file'      => $this->make_pretty_filename( $this->getFile() ),
				'line'      => $this->getLine(),
				'data'      => $this->get_additional(),
				'version'   => jet_form_builder()->get_version(),
				'action_id' => jet_fb_action_handler()->get_position(),
			)
		);
	}

	private function make_pretty_filename( string $file ) {
		$path = explode( 'wp-content\\', $file );

		return $path[1] ?? ( explode( 'wp-content/', $file )[1] ?? $file );
	}

}
