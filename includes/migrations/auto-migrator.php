<?php


namespace Jet_Form_Builder\Migrations;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_2;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_3;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Runs outstanding migrations automatically once the plugin files are updated to a
 * newer version, without waiting for a manual "Update DB" click (that notice only
 * covers form-record table migrations, not general ones like `Version_3_6_5_2`) and
 * without relying on `register_activation_hook` (which does NOT fire on plugin update,
 * only on manual (re)activation).
 *
 * Only migrations explicitly returned by `migration_instances()` are auto-run. This is
 * intentionally separate from `Migrator::install()`: older schema migrations can be
 * expensive and may require a deliberate/manual update, so an unrelated admin request
 * must not start the full historical migration set.
 *
 * The selected migration classes stay in this registry permanently. Therefore a client
 * may skip the release that introduced `Version_3_6_5_2` and update directly to 3.7.0 (or
 * later): its stored DB version is still older than the running plugin, the auto-migrator
 * runs, and `Base_Migration::install()` executes every selected migration that is not yet
 * recorded in the migrations table. `Version_3_6_5_2` and `Version_3_6_5_3` each run a
 * time-boxed batch loop per request and persist a resume cursor when their time budget is
 * exceeded; an incomplete pass throws so the migration stays "not installed" and the next
 * capable admin's `admin_init` request continues it automatically from that cursor — no
 * AJAX or manual admin-page step is involved. A migration signaling an incomplete batch also
 * issues its own intermediate `COMMIT` before throwing (to persist the resume cursor), which
 * ends the transaction this class started; `install_migrations()` therefore stops immediately
 * on that signal rather than attempting a later migration outside any transaction. The next
 * capable admin's request retries from the beginning of `migration_instances()`, skipping
 * whatever already recorded itself as installed, until every migration completes.
 *
 * @since 3.6.5.2
 */
class Auto_Migrator {

	use Instance_Trait;

	const DB_VERSION_OPTION = 'jet_fb_db_version';
	const LOCK_TRANSIENT    = 'jet_fb_migrations_running';

	public function init_hooks() {
		add_action( 'admin_init', array( $this, 'maybe_run' ) );
	}

	/**
	 * Runs migrations if the plugin code is newer than the last migrated DB version.
	 * Cheap no-op on the vast majority of requests (single option read + version compare).
	 */
	public function maybe_run() {
		if ( ! $this->needs_upgrade() ) {
			return;
		}

		// Only an admin-context request that can manage the site should trigger schema/data
		// changes. Other admin requests (e.g. admin-ajax from a low-priv user) just skip;
		// they'll be picked up on the next capable admin's page load.
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		// Guard against two overlapping admin requests both running migrations at once.
		if ( get_transient( self::LOCK_TRANSIENT ) ) {
			return;
		}

		set_transient( self::LOCK_TRANSIENT, 1, MINUTE_IN_SECONDS * 5 );

		try {
			$this->run();
		} finally {
			delete_transient( self::LOCK_TRANSIENT );
		}
	}

	public function needs_upgrade(): bool {
		$stored = get_option( self::DB_VERSION_OPTION, '' );

		// No stamp yet: either a genuine update from a pre-3.6.5.2 version (including a
		// client that skipped straight to a later release), or a fresh install. `run()`
		// checks the selected migrations individually, so both cases are safe.
		if ( '' === $stored ) {
			return true;
		}

		return version_compare( $stored, JET_FORM_BUILDER_VERSION, '<' );
	}

	/**
	 * Whether the auto-migration set (`migration_instances()`) has not yet fully completed
	 * for this site. On a small site this is true for at most a single `admin_init` request;
	 * on a large site it can span several requests while a time-boxed migration resumes
	 * itself batch by batch. Exposed so UI that depends on the migrated data being complete
	 * (e.g. the "Allowed Server-Side Callbacks" settings tab, whose `import_trusted_callbacks()`
	 * only runs once the whole scan finishes) can disable editing and show a wait state
	 * instead of racing a save against a migration batch still in flight.
	 *
	 * @since 3.6.5.3
	 */
	public function is_migration_in_progress(): bool {
		return $this->needs_upgrade() && ! $this->all_installed();
	}

	protected function run() {
		// Nothing outstanding (e.g. fresh install already stamped by table creation) →
		// just record the version and skip touching the DB in a transaction.
		if ( $this->all_installed() ) {
			$this->stamp_version();

			return;
		}

		try {
			if ( false === $this->transaction_start() ) {
				throw new \RuntimeException( 'Failed to start the auto-migration transaction.' );
			}

			$this->install_migrations();

			if ( false === $this->transaction_commit() ) {
				throw new \RuntimeException( 'Failed to commit the auto-migration transaction.' );
			}
		} catch ( \Throwable $exception ) {
			$this->transaction_rollback();

			// Do NOT stamp the version on failure — leave `needs_upgrade()` true so the
			// next capable admin request retries. Surface the reason for support.
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
					'[jet-form-builder] auto-migration failed: ' . $exception->getMessage()
				);
			}

			return;
		}

		// Success → record the version so we don't re-scan on every admin load until the
		// next update bumps the plugin version again.
		$this->stamp_version();
	}

	/**
	 * Runs only the migration classes explicitly selected for automatic execution. Each
	 * migration is skipped internally if it is already recorded as installed, so keeping
	 * an old migration in this list is both safe and required for clients that skip the
	 * release where it was introduced.
	 *
	 * A migration signaling an incomplete batch (`Migration_Incomplete_Exception`) stops the
	 * loop immediately instead of continuing to the next migration. Time-boxed migrations
	 * (e.g. `Version_3_6_5_2`, `Version_3_6_5_3`) persist their own progress by issuing an
	 * intermediate `COMMIT` before throwing, so the outer transaction `run()` started is no
	 * longer intact once one of them yields — a later migration run in that same request
	 * would execute outside any transaction, and a genuine failure in it could no longer be
	 * rolled back. Re-throwing right away still leaves `needs_upgrade()` true (via `run()`'s
	 * catch block skipping `stamp_version()`) so the next capable admin request resumes the
	 * interrupted migration, and only then attempts the ones after it.
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Exception
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception
	 */
	protected function install_migrations() {
		foreach ( $this->migration_instances() as $migration ) {
			$migration->install();
		}
	}

	protected function all_installed(): bool {
		foreach ( $this->migration_instances() as $migration ) {
			if ( ! $migration->is_installed() ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Automatic migrations must remain listed in future plugin versions so sites that
	 * jump over the introducing release still receive them. Do not place regular/manual
	 * schema migrations here.
	 *
	 * @return \Jet_Form_Builder\Migrations\Versions\Base_Migration[]
	 */
	protected function migration_instances(): array {
		return array(
			new Version_3_6_5_2(),
			new Version_3_6_5_3(),
		);
	}

	protected function stamp_version() {
		update_option( self::DB_VERSION_OPTION, JET_FORM_BUILDER_VERSION, false );
	}

	protected function transaction_start() {
		return Execution_Builder::instance()->transaction_start();
	}

	protected function transaction_commit() {
		return Execution_Builder::instance()->transaction_commit();
	}

	protected function transaction_rollback() {
		return Execution_Builder::instance()->transaction_rollback();
	}
}
