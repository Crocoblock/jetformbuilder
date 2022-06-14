<?php


namespace Jet_Form_Builder\Wp_Cli;

use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Profilers\Cli_Migration_Profiler;
use Jet_Form_Builder\Migrations\Versions\Base_Migration;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_0;

class Database_Commands extends \WP_CLI_Command {

	public function migrate() {
		try {
			Execution_Builder::instance()->transaction_start();
			Migrator::instance()->install( new Cli_Migration_Profiler() );
			Execution_Builder::instance()->transaction_commit();

			\WP_CLI::line();
			\WP_CLI::success( 'Migrated successfully' );

		} catch ( Migration_Exception $exception ) {
			Execution_Builder::instance()->transaction_rollback();
			\WP_CLI::error( $exception->getMessage() );
		}
	}

	public function downgrade() {
		try {
			Execution_Builder::instance()->transaction_start();
			Migrator::instance()->uninstall( new Cli_Migration_Profiler() );
			Execution_Builder::instance()->transaction_commit();

			\WP_CLI::line();
			\WP_CLI::success( 'Downgraded successfully' );

		} catch ( Migration_Exception $exception ) {
			Execution_Builder::instance()->transaction_rollback();

			\WP_CLI::error( $exception->getMessage() );
		}
	}

}
