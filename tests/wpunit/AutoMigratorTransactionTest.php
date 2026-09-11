<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Migrations\Auto_Migrator;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_2;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_3;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Allowlist;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;
use JFB_Modules\Validation\Ssr\Ssr_Registry_Migration_Notice;

/**
 * Regression coverage for the real `Auto_Migrator::run()` transaction path (issues-tracker
 * #20361 review): `run()` wraps `install_migrations()` in a real `START TRANSACTION` /
 * `COMMIT`/`ROLLBACK` on the shared `$wpdb` connection. Both `Ssr_Callback_Allowlist::
 * rebuild_from_all_forms()` and `Version_3_6_5_3::up()` persist a resume-cursor option via
 * `update_option()` immediately before throwing to signal "incomplete batch, please retry".
 * That write happens on the very same connection `run()` then rolls back, so without an
 * explicit commit before the throw the progress cursor would be discarded by the same
 * `ROLLBACK` meant to let the migration resume, and every subsequent request would restart
 * the scan from `last_id = 0` instead of actually making progress.
 *
 * Unlike `AutoMigratorTest` (which stubs `transaction_start`/`commit`/`rollback` entirely)
 * and `SsrCallbackMigrationBatchingTest` (which calls `up()`/`rebuild_from_all_forms()`
 * directly, bypassing `Auto_Migrator::run()`'s transaction wrapper), this test drives the
 * real `Auto_Migrator::run()` end to end through the actual transaction.
 */
class AutoMigratorTransactionTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		Migrator::clear();

		delete_option( Auto_Migrator::DB_VERSION_OPTION );
		delete_transient( Auto_Migrator::LOCK_TRANSIENT );
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Version_3_6_5_3::PROGRESS_OPTION );
		delete_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );
	}

	public function tearDown(): void {
		remove_all_filters( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget' );
		remove_all_filters( 'jet-form-builder/ssr-registry-migration/time-budget' );

		Migrator::clear();

		delete_option( Auto_Migrator::DB_VERSION_OPTION );
		delete_transient( Auto_Migrator::LOCK_TRANSIENT );
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Version_3_6_5_3::PROGRESS_OPTION );
		delete_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );

		( new Version_3_6_5_2() )->down( $GLOBALS['wpdb'] );
		( new Version_3_6_5_3() )->down( $GLOBALS['wpdb'] );

		global $wpdb;

		// `down()` only resets the options/transients a migration's `up()` writes — it never
		// touches `wp_jet_fb_migrations`, so a migration this test drove to completion would
		// stay "installed" for the next test in this file to see. `Base_Migration::uninstall()`
		// would clear that row too, but it requires `manage_options`, which this test context
		// does not have; delete the row directly instead (test-only cleanup, not part of any
		// production uninstall path).
		$wpdb->delete( $wpdb->prefix . 'jet_fb_migrations', array( 'version' => Version_3_6_5_2::class ) );
		$wpdb->delete( $wpdb->prefix . 'jet_fb_migrations', array( 'version' => Version_3_6_5_3::class ) );

		// The forms this test created via create_ssr_forms() must not leak into the next
		// test either, for the same reason (see the transaction-boundary note below).
		$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->posts} WHERE post_type = %s", 'jet-form-builder' ) );

		// `Auto_Migrator::run()` and the migrations it drives (`Ssr_Callback_Allowlist::
		// rebuild_from_all_forms()`, `Version_3_6_5_3::up()`) issue their own `COMMIT` mid-run
		// to persist a resume cursor before throwing an "incomplete batch" signal. With
		// `autocommit = 0` (set by `WPTestCase::start_transaction()`), that explicit `COMMIT`
		// ends the transaction `setUp()` opened and MySQL silently opens a fresh implicit one
		// for whatever runs next — which, by the time a test method returns, is exactly the
		// cleanup this `tearDown()` just did above. `WPTestCase::tearDown()` (called via
		// `parent::tearDown()` below) only issues a plain `ROLLBACK`, which would discard that
		// implicit transaction (our cleanup) while leaving the earlier, already-committed
		// migration data permanently in the database — the opposite of the isolation this
		// class relies on. Committing explicitly here guarantees the cleanup itself always
		// lands, regardless of which implicit transaction it happened to fall into.
		$wpdb->query( 'COMMIT' );

		parent::tearDown();
	}

	/**
	 * Drives `Auto_Migrator::run()` (real transaction, not stubbed) against a forms table
	 * large enough that `Version_3_6_5_2` must yield mid-scan, and asserts the resume cursor
	 * it persisted right before throwing is still present after `run()`'s catch block calls
	 * `transaction_rollback()`. Without the fix, the `ROLLBACK` on the shared connection
	 * would discard that same-connection `update_option()` write.
	 */
	public function testProgressCursorSurvivesRunsRollback(): void {
		add_filter( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget', '__return_zero' );

		$total = Ssr_Callback_Allowlist::REBUILD_BATCH_SIZE + 5;
		$this->create_ssr_forms( $total, 'is_email' );

		$migrator = new Auto_Migrator();
		$this->invoke_run( $migrator );

		// The migration threw inside install_migrations(); run() must have rolled back and
		// left needs_upgrade() true (version not stamped).
		$this->assertFalse( get_option( Auto_Migrator::DB_VERSION_OPTION, false ) );

		$progress = get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );

		$this->assertIsArray(
			$progress,
			'The resume cursor must survive run()\'s rollback of the same connection.'
		);
		$this->assertArrayHasKey( 'last_id', $progress );
		$this->assertGreaterThan( 0, $progress['last_id'] );
	}

	/**
	 * After the cursor-preserving fix, a second `run()` call must resume from the persisted
	 * cursor rather than restarting the scan from `last_id = 0`, and eventually complete.
	 */
	public function testSecondRunResumesFromPersistedCursorAndCompletes(): void {
		add_filter( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget', '__return_zero' );
		add_filter( 'jet-form-builder/ssr-registry-migration/time-budget', '__return_zero' );

		$total = Ssr_Callback_Allowlist::REBUILD_BATCH_SIZE + 5;
		$this->create_ssr_forms( $total, 'is_email' );

		$migrator = new Auto_Migrator();
		$this->invoke_run( $migrator );

		$first_progress = get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		$this->assertIsArray( $first_progress );
		$this->assertArrayHasKey( 'last_id', $first_progress );

		// Resume: allow the budget check to pass so the remaining Version_3_6_5_2 batches
		// (and, once that migration is fully installed, Version_3_6_5_3) can complete.
		remove_all_filters( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget' );
		remove_all_filters( 'jet-form-builder/ssr-registry-migration/time-budget' );

		Migrator::clear();
		$this->invoke_run( new Auto_Migrator() );

		$this->assertFalse(
			get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION, false ),
			'Progress must be cleared once Version_3_6_5_2 fully completes.'
		);
		$this->assertSame(
			JET_FORM_BUILDER_VERSION,
			get_option( Auto_Migrator::DB_VERSION_OPTION ),
			'Once every selected migration completes, the version must be stamped.'
		);
	}

	/**
	 * Regression for review Finding #1: an incomplete `Version_3_6_5_2` batch commits its own
	 * partial progress (to persist the resume cursor) before throwing, which ends the
	 * transaction `run()` started. `install_migrations()` must stop immediately instead of
	 * attempting `Version_3_6_5_3` next in the same request — running it outside any
	 * transaction would mean a genuine failure in it could no longer be rolled back.
	 */
	public function testIncompleteFirstMigrationStopsSecondMigrationFromRunning(): void {
		// Version_3_6_5_2 (via Ssr_Callback_Allowlist) never has budget → always yields.
		// The budget check only runs once a full batch is fetched (`rebuild_from_all_forms()`
		// breaks out of the loop early via the "last, partial batch" path otherwise), so the
		// forms table must be at least REBUILD_BATCH_SIZE to actually exercise it.
		add_filter( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget', '__return_zero' );

		// Version_3_6_5_3 would finish in a single batch if it ran, but it must not be
		// attempted while Version_3_6_5_2 is still incomplete.
		$this->create_ssr_forms( Ssr_Callback_Allowlist::REBUILD_BATCH_SIZE, 'is_email' );

		$migrator = new Auto_Migrator();
		$this->invoke_run( $migrator );

		// Version_3_6_5_2 is still incomplete → version not stamped.
		$this->assertFalse( get_option( Auto_Migrator::DB_VERSION_OPTION, false ) );

		// Version_3_6_5_3 must not have run at all this request: nothing imported yet.
		$this->assertSame(
			array(),
			Ssr_Callback_Registry::get_allowed_callbacks(),
			'Version_3_6_5_3 must not run in the same request as an incomplete Version_3_6_5_2, since the outer transaction is no longer intact.'
		);

		// Once Version_3_6_5_2 finishes (budget restored), Version_3_6_5_3 runs and completes.
		remove_all_filters( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget' );
		Migrator::clear();
		$this->invoke_run( new Auto_Migrator() );

		// Version_3_6_5_3 merges discovered names directly into the trusted registry — a
		// name already in use before the update is restored without requiring a manual
		// per-name approval (issues-tracker #20361 follow-up).
		$this->assertSame(
			array( 'is_email' ),
			Ssr_Callback_Registry::get_allowed_callbacks(),
			'Version_3_6_5_3 must run once Version_3_6_5_2 completes in a prior request.'
		);
		$this->assertFalse( get_option( Version_3_6_5_3::PROGRESS_OPTION, false ) );
	}

	/**
	 * `Ssr_Callback_Allowlist::rebuild_from_all_forms()` and `Version_3_6_5_3::up()` issue
	 * their own `COMMIT` mid-scan (to persist a resume cursor before throwing an incomplete
	 * signal), separate from the `START TRANSACTION`/rollback pair `WPTestCase` wraps around
	 * this whole test for isolation. That inner `COMMIT` is invisible to WordPress's object
	 * cache — `update_option()`/`delete_option()` already wrote their in-memory cache entry
	 * before the SQL-level commit or the outer test transaction settles, so a later read in
	 * the same test/process can see a stale cached value even though the underlying row was
	 * legitimately written or removed. Flushing after each `run()` call keeps this test
	 * reading real DB state instead of an artifact of nesting two transaction mechanisms —
	 * this is a test-harness concern, not something production code needs to do (a real
	 * request always starts with a cold cache).
	 */
	private function invoke_run( Auto_Migrator $migrator ): void {
		$reflection = new \ReflectionMethod( Auto_Migrator::class, 'run' );
		$reflection->setAccessible( true );
		$reflection->invoke( $migrator );

		wp_cache_flush();
	}

	/**
	 * @return int[] Created post IDs.
	 */
	private function create_ssr_forms( int $count, string $function_name ): array {
		$content = '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"' . $function_name . '"}' .
			']}} /-->';

		$ids = array();

		for ( $i = 0; $i < $count; $i++ ) {
			$ids[] = $this->factory()->post->create(
				array(
					'post_type'    => 'jet-form-builder',
					'post_status'  => 'publish',
					'post_content' => $content,
				)
			);
		}

		return $ids;
	}
}
