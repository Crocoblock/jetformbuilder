<?php


namespace Jet_Form_Builder\Dev_Mode;

use Jet_Form_Builder\Classes\Instance_Trait;

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


}
