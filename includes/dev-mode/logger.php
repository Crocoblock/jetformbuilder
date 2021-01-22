<?php


namespace Jet_Form_Builder\Dev_Mode;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Plugin;

class Logger {

	private $logged = array();

	use Instance_Trait;

	private function __construct() {
	}

	public function log( Handler_Exception $exception ) {
		if ( ! Manager::instance()->active() ) {
			return;
		}
		$this->save_log( $exception );
	}

	public function get_logs() {
		return $this->logged;
	}

	private function save_log( Handler_Exception $exception ) {
		$this->logged[ get_class( $exception ) ][] = array(
			'message' => $exception->getMessage(),
			'file'    => $this->make_pretty_filename( $exception->getFile() ),
			'line'    => $exception->getLine(),
			'data'    => $exception->get_additional()
		);
	}

	private function make_pretty_filename( $file ) {
		$path = explode( 'plugins\\', $file );

		return isset( $path[1] ) ? $path[1] : explode( 'plugins/', $file )[1];
	}


}