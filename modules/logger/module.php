<?php


namespace JFB_Modules\Logger;

use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Static_Instance_It;
use JFB_Components\Module\Base_Module_Static_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Module instance()
 *
 * Class Logger
 * @package Jet_Form_Builder\Dev_Mode
 */
final class Module implements Base_Module_It, Base_Module_Static_Instance_It {

	use Base_Module_Static_Instance_Trait;

	private $logged = array();

	public static function get_instance_id(): string {
		return 'logger';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	public function get_logs(): array {
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


	/**
	 * @since 3.1.0
	 *
	 * @param string $slug
	 *
	 * @return bool
	 */
	public function has_log( string $slug ): bool {
		foreach ( $this->logged as $exception_name => $args ) {
			if ( $slug === $exception_name ) {
				return true;
			}
		}

		return false;
	}
}
