<?php


namespace Jet_Form_Builder\Compatibility\Jet_Appointment;

use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Jet_Appointment {

	const HANDLE = 'jet-fb-appointment-compatibility';

	public static function register() {
		if ( ! function_exists( 'jet_apb' ) ) {
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
			'render_block_jet-forms/appointment-date',
			array( $this, 'add_compatibility_script' ),
			10, 3
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/jet-appointment{min}.js' ),
			array(
				Manager::MAIN_SCRIPT_HANDLE,
				Manager::LISTING_OPTIONS_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_compatibility_script( string $markup, array $parsed, $block ): string {
		wp_enqueue_script( self::HANDLE );

		return $markup;
	}

}