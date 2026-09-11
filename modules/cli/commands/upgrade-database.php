<?php


namespace JFB_Modules\Cli\Commands;

use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migration_Incomplete_Exception;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Profilers\Cli_Migration_Profiler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Upgrade_Database implements Base_Command_It {

	public function rep_item_id() {
		return 'db-upgrade';
	}

	public function condition(): bool {
		return true;
	}

	public function do_command( $args, $assoc_args ) {
		try {
			Execution_Builder::instance()->transaction_start();
			Migrator::instance()->install( new Cli_Migration_Profiler() );
			Execution_Builder::instance()->transaction_commit();

			\WP_CLI::line();
			\WP_CLI::success( 'Migrated successfully' );

		} catch ( Migration_Incomplete_Exception $exception ) {
			// Not a data-loss failure: a time-boxed migration (e.g. the SSR registry
			// import) already committed its own partial progress and a resume cursor
			// before throwing this — see its own docblock. There is nothing left to roll
			// back here; running the command again resumes from that cursor. It is,
			// however, not "done" either — `WP_CLI::success()` here would exit 0, which
			// automation polling this command's exit code would read as "migration
			// complete" and never retry, silently leaving the site on partially-migrated
			// data (review finding, issues-tracker #20361 follow-up). `WP_CLI::error()`
			// gives it the same non-zero exit code as a genuine failure so such automation
			// reliably re-invokes the command instead.
			\WP_CLI::line();
			\WP_CLI::error( 'Migration is still in progress. Run this command again to continue.' );

		} catch ( Migration_Exception $exception ) {
			Execution_Builder::instance()->transaction_rollback();
			\WP_CLI::error( $exception->getMessage() );
		}
	}
}
