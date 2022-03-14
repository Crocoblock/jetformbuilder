<?php


namespace Jet_Form_Builder\Dev_Mode;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Handler_Exception;

/**
 * @method static Logger instance()
 *
 * Class Logger
 * @package Jet_Form_Builder\Dev_Mode
 */
class Logger {

	private $logged = array();

	use Instance_Trait;

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
			'message'      => $exception->getMessage(),
			'file'         => $this->make_pretty_filename( $exception->getFile() ),
			'line'         => $exception->getLine(),
			'data'         => $exception->get_additional(),
			'trace_string' => $exception->getTraceAsString(),
			'version'      => jet_form_builder()->get_version(),
			'action_id'    => jet_fb_action_handler()->get_position(),
		);
	}

	private function make_pretty_filename( $file ) {
		$path = explode( 'wp-content\\', $file );

		return isset( $path[1] ) ? $path[1] : explode( 'wp-content/', $file )[1];
	}


}
