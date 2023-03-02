<?php


namespace Jet_Form_Builder\Shortcodes;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Manager instance()
 *
 * Class Manager
 * @package Jet_Form_Builder\Shortcodes
 */
class Manager {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	private function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return array(
			new Form_Shortcode(),
		);
	}

	public static function get_shortcode( $type, $arguments ): string {
		$format = '[%1$s %2$s]';

		try {
			$type = self::instance()->rep_clone_item( $type );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return sprintf( $format, $type->get_name(), self::generate_arguments_string( $arguments ) );
	}

	public static function generate_arguments_string( $arguments ): string {
		$response = array();

		foreach ( $arguments as $name => $value ) {
			$response[] = "$name=\"$value\"";
		}

		return implode( ' ', $response );
	}
}
