<?php


namespace Jet_Form_Builder\Migrations\Profilers;


use Jet_Form_Builder\Migrations\Versions\Base_Migration;

class Cli_Migration_Profiler extends Base_Migration_Profiler {

	public function on_up_end( Base_Migration $migration, string $timer_stop ) {
		$name = get_class( $migration );

		\WP_CLI::line(
			\WP_CLI::colorize( "%G{$name}: %n{$timer_stop} (s)" )
		);
	}

	public function on_down_end( Base_Migration $migration ) {
		$name = get_class( $migration );

		\WP_CLI::line(
			\WP_CLI::colorize( "%m{$name}" )
		);
	}

}