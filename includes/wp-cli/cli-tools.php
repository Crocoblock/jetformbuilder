<?php


namespace Jet_Form_Builder\Wp_Cli;


class Cli_Tools {

	public static function is_cli(): bool {
		return defined( 'WP_CLI' ) && WP_CLI;
	}

}