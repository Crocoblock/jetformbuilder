<?php


namespace Jet_Form_Builder\Wp_Cli;

use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Profilers\Cli_Migration_Profiler;
use Jet_Form_Builder\Migrations\Versions\Base_Migration;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_0;

class Database_Commands extends \WP_CLI_Command {

	public function migrate() {
		try {
			/** @var Base_Migration $migration */
			foreach ( Migrator::instance()->rep_get_items() as $migration ) {
				$migration->set_profiler( new Cli_Migration_Profiler() )->install();
			}

			\WP_CLI::line();
			\WP_CLI::success( 'Migrated successfully' );

		} catch ( Migration_Exception $exception ) {
			\WP_CLI::error( $exception->getMessage() );
		}
	}

	public function downgrade() {
		try {
			/** @var Base_Migration $migration */
			foreach ( Migrator::instance()->rep_get_items() as $migration ) {
				$migration->set_profiler( new Cli_Migration_Profiler() )->uninstall();
			}

			\WP_CLI::line();
			\WP_CLI::success( 'Downgraded successfully' );

		} catch ( Migration_Exception $exception ) {
			\WP_CLI::error( $exception->getMessage() );
		}
	}

}
