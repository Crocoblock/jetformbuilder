<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Admin\Tabs_Handlers\Ssr_Callbacks_Handler;
use Jet_Form_Builder\Migrations\Auto_Migrator;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;

require_once __DIR__ . '/../_support/Ajax_Die_Signal.php';

/**
 * Regression coverage for issues-tracker #20361 follow-up review Finding #1: the legacy-
 * migration import (`Migrations\Versions\Version_3_6_5_3`, via `Ssr_Callback_Registry::
 * import_trusted_callbacks()`) does an unlocked read-merge-write of `Ssr_Callback_Registry::
 * OPTION_KEY`. A manual save from the "Allowed Server-Side Callbacks" settings tab in the
 * middle of that window would race it — whichever of the two writes lands last silently
 * discards the other's names. `Ssr_Callbacks_Handler` closes this on the server, not only in
 * the Vue UI (which a direct AJAX request could bypass): `on_load()` reports whether a
 * migration is still in progress, and `on_get_request()` refuses to save at all while one is.
 *
 * `Auto_Migrator::is_migration_in_progress()` itself is exercised directly (no AJAX/`wp_die`
 * involved), while the handler's AJAX response path is exercised via the same "intercept
 * `wp_die`" approach `WP_Ajax_UnitTestCase` uses upstream, since `wp_send_json_*()` always
 * terminates the request.
 */
class SsrCallbacksHandlerMigrationGuardTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		delete_option( Auto_Migrator::DB_VERSION_OPTION );
		delete_option( Ssr_Callback_Registry::OPTION_KEY );

		add_filter( 'wp_doing_ajax', '__return_true' );
	}

	public function tearDown(): void {
		remove_filter( 'wp_doing_ajax', '__return_true' );
		remove_all_filters( 'wp_die_ajax_handler' );

		delete_option( Auto_Migrator::DB_VERSION_OPTION );
		delete_option( Ssr_Callback_Registry::OPTION_KEY );

		parent::tearDown();
	}

	// -- Auto_Migrator::is_migration_in_progress() -------------------------

	public function testMigrationInProgressWhenStampMissingAndNotAllInstalled(): void {
		$migrator = $this->makeMigratorSpy( false );

		$this->assertTrue( $migrator->is_migration_in_progress() );
	}

	public function testMigrationNotInProgressWhenStampCurrent(): void {
		update_option( Auto_Migrator::DB_VERSION_OPTION, JET_FORM_BUILDER_VERSION, false );

		$migrator = $this->makeMigratorSpy( false );

		$this->assertFalse(
			$migrator->is_migration_in_progress(),
			'A current stamp means needs_upgrade() is false regardless of all_installed().'
		);
	}

	public function testMigrationNotInProgressOnceEverythingIsInstalled(): void {
		$migrator = $this->makeMigratorSpy( true );

		$this->assertFalse( $migrator->is_migration_in_progress() );
	}

	// -- Ssr_Callbacks_Handler::on_load() -----------------------------------

	public function testOnLoadReportsMigrationInProgressTrue(): void {
		$this->withMigrationInProgress(
			true,
			function () {
				$loaded = ( new Ssr_Callbacks_Handler() )->on_load();

				$this->assertTrue( $loaded['migrationInProgress'] );
			}
		);
	}

	public function testOnLoadReportsMigrationInProgressFalse(): void {
		$this->withMigrationInProgress(
			false,
			function () {
				$loaded = ( new Ssr_Callbacks_Handler() )->on_load();

				$this->assertFalse( $loaded['migrationInProgress'] );
			}
		);
	}

	// -- Ssr_Callbacks_Handler::on_get_request() ----------------------------

	public function testSaveIsRejectedWhileMigrationInProgress(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email' ), false );

		$this->withMigrationInProgress(
			true,
			function () {
				// phpcs:ignore WordPress.Security.NonceVerification.Missing -- test bypasses on_raw_request()'s nonce gate to exercise on_get_request() directly.
				$_POST['callbacks'] = 'is_numeric';

				$response = $this->captureAjaxResponse(
					function () {
						( new Ssr_Callbacks_Handler() )->on_get_request();
					}
				);

				$this->assertFalse( $response['success'] );
				$this->assertTrue( $response['data']['migrationInProgress'] );
			}
		);

		// The would-be save must never have reached the registry.
		$this->assertSame( array( 'is_email' ), Ssr_Callback_Registry::get_allowed_callbacks() );
	}

	public function testSaveSucceedsOnceMigrationIsNotInProgress(): void {
		$this->withMigrationInProgress(
			false,
			function () {
				// phpcs:ignore WordPress.Security.NonceVerification.Missing -- test bypasses on_raw_request()'s nonce gate to exercise on_get_request() directly.
				$_POST['callbacks'] = 'is_numeric';

				$response = $this->captureAjaxResponse(
					function () {
						( new Ssr_Callbacks_Handler() )->on_get_request();
					}
				);

				$this->assertTrue( $response['success'] );
				$this->assertFalse( $response['data']['migrationInProgress'] );
			}
		);

		$this->assertSame( array( 'is_numeric' ), Ssr_Callback_Registry::get_allowed_callbacks() );

		unset( $_POST['callbacks'] );
	}

	// -- Helpers --------------------------------------------------------------

	/**
	 * Forces `Auto_Migrator::instance()->is_migration_in_progress()` (as seen by
	 * `Ssr_Callbacks_Handler`, which always resolves the real singleton — it cannot be
	 * constructor-injected) to the given value for the duration of the callback.
	 *
	 * Swaps `Auto_Migrator::$instance` (public, per `Instance_Trait`) for a spy whose
	 * `all_installed()` is pinned, rather than relying on `DB_VERSION_OPTION` alone: by the
	 * time wpunit tests run, plugin activation has typically already installed every
	 * auto-migration for real (see `AutoMigratorTransactionTest`'s `tearDown()`, which has to
	 * explicitly delete migration-table rows for the same reason), so clearing the stamp
	 * alone would not reliably make `is_migration_in_progress()` true.
	 */
	private function withMigrationInProgress( bool $in_progress, callable $callback ): void {
		$previous_stamp    = get_option( Auto_Migrator::DB_VERSION_OPTION, false );
		$previous_instance = Auto_Migrator::$instance;

		if ( $in_progress ) {
			delete_option( Auto_Migrator::DB_VERSION_OPTION );
		} else {
			update_option( Auto_Migrator::DB_VERSION_OPTION, JET_FORM_BUILDER_VERSION, false );
		}

		Auto_Migrator::$instance = $this->makeMigratorSpy( ! $in_progress );

		try {
			$callback();
		} finally {
			Auto_Migrator::$instance = $previous_instance;

			if ( false === $previous_stamp ) {
				delete_option( Auto_Migrator::DB_VERSION_OPTION );
			} else {
				update_option( Auto_Migrator::DB_VERSION_OPTION, $previous_stamp, false );
			}
		}
	}

	/**
	 * `Auto_Migrator::instance()` is a real singleton (`Instance_Trait`), so
	 * `is_migration_in_progress()` is exercised directly against it rather than through a
	 * subclass spy in the handler tests above (the handler always resolves the real
	 * instance). This spy is only used to isolate `needs_upgrade()` from `all_installed()`
	 * for the `Auto_Migrator`-level assertions, without depending on every migration's
	 * install state in this test environment.
	 */
	private function makeMigratorSpy( bool $all_installed ): Auto_Migrator {
		return new class( $all_installed ) extends Auto_Migrator {
			private $all_installed;

			public function __construct( bool $all_installed ) {
				$this->all_installed = $all_installed;
			}

			protected function all_installed(): bool {
				return $this->all_installed;
			}
		};
	}

	/**
	 * Runs `$callback` (expected to end in a `wp_send_json_success()`/`wp_send_json_error()`
	 * call) and returns the decoded JSON payload instead of letting the request actually
	 * terminate. `wp_send_json_*()` first `echo`s the JSON body, then calls `wp_die()` — so
	 * the payload is captured via output buffering, and `wp_die()` itself is short-circuited
	 * via the `wp_die_ajax_handler` filter (the same approach WordPress core's
	 * `WP_Ajax_UnitTestCase` uses, reimplemented here since this suite does not extend it).
	 *
	 * @return array{success: bool, data: array}
	 */
	private function captureAjaxResponse( callable $callback ): array {
		$handler = function () {
			throw new \JFB_Tests\Wpunit\Ajax_Die_Signal();
		};

		add_filter(
			'wp_die_ajax_handler',
			function () use ( $handler ) {
				return $handler;
			}
		);

		ob_start();

		try {
			$callback();
		} catch ( Ajax_Die_Signal $signal ) {
			// Expected: wp_send_json_*() always dies.
		} finally {
			$captured = ob_get_clean();
		}

		remove_all_filters( 'wp_die_ajax_handler' );

		$this->assertIsString( $captured, 'wp_send_json_*() must have produced JSON output.' );

		$decoded = json_decode( $captured, true );

		$this->assertIsArray( $decoded );

		return $decoded;
	}
}

