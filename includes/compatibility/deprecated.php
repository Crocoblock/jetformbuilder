<?php


namespace Jet_Form_Builder\Compatibility;

use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Deprecated {

	const HANDLE = 'jet-form-builder-deprecated';

	public function __construct() {
		add_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'add_deprecated_script' )
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);
		add_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_scripts' )
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/deprecated{min}.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_deprecated_script( string $markup ): string {
		wp_enqueue_script( self::HANDLE );

		return $markup;
	}

}