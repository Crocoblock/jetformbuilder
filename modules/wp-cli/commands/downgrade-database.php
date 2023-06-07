<?php


namespace JFB_Modules\Wp_Cli\Commands;

use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Profilers\Cli_Migration_Profiler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Downgrade_Database implements Base_Command_It {

	public function rep_item_id() {
		return 'db-downgrade';
	}

	public function condition(): bool {
		return true;
	}

	public function do_command( $args, $assoc_args ) {
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