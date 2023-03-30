<?php


namespace Jet_Form_Builder\Compatibility\Jet_Booking;

use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Compatibility\Deprecated;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Jet_Booking {

	const HANDLE = 'jet-fb-booking-compatibility';

	public static function register() {
		if ( ! function_exists( 'jet_abaf' ) ) {
			return;
		}
		new static();
	}

	private function __construct() {
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);

		add_filter(
			'render_block_jet-forms/check-in-out',
			array( $this, 'add_compatibility_script' )
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/jet-booking{min}.js' ),
			array(
				Deprecated::HANDLE,
				Manager::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_compatibility_script( string $markup ): string {
		wp_enqueue_script( self::HANDLE );

		return $markup;
	}

}
