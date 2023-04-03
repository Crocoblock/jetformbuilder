<?php


namespace Jet_Form_Builder\Dev_Mode;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Logger instance()
 *
 * Class Logger
 * @package Jet_Form_Builder\Dev_Mode
 */
class Logger {

	private $logged = array();

	use Instance_Trait;

	public function get_logs() {
		return $this->logged;
	}

	public function push_log( string $name, $data ) {
		if ( ! array_key_exists( $name, $this->logged ) ) {
			$this->logged[ $name ] = array();
		}

		$this->logged[ $name ][] = $data;
	}

	public function unset_last( string $key ) {
		$exceptions = $this->logged[ $key ] ?? array();

		if ( ! count( $exceptions ) ) {
			return;
		}

		array_pop( $this->logged[ $key ] );
	}

	public function has_field_exception(): bool {
		foreach ( $this->logged as $exception_name => $args ) {
			if ( Sanitize_Value_Exception::class === $exception_name ) {
				return true;
			}
		}

		return false;
	}


}
