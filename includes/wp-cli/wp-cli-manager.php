<?php


namespace Jet_Form_Builder\Wp_Cli;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wp_Cli_Manager {

	public static function register() {
		if ( ! defined( 'WP_CLI' ) || ! WP_CLI ) {
			return;
		}

		\WP_CLI::add_command( 'jfb-db', Database_Commands::class );
	}

}

