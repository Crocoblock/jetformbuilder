<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Migrations\Auto_Migrator;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_2;

/**
 * Coverage for the auto-run-migrations-on-update mechanism (`Auto_Migrator`), including
 * the "client jumps several plugin versions at once" case: a site updating straight from
 * a pre-3.6.5.2 version to a much newer one must still pick up `Version_3_6_5_2`.
 */
class AutoMigratorTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		delete_option( Auto_Migrator::DB_VERSION_OPTION );
		delete_transient( Auto_Migrator::LOCK_TRANSIENT );
	}

	public function tearDown(): void {
		delete_option( Auto_Migrator::DB_VERSION_OPTION );
		delete_transient( Auto_Migrator::LOCK_TRANSIENT );

		parent::tearDown();
	}

	public function testNeedsUpgradeWhenNoStampYet(): void {
		$this->assertTrue( ( new Auto_Migrator() )->needs_upgrade() );
	}

	public function testNeedsUpgradeWhenStampOlderThanPlugin(): void {
		update_option( Auto_Migrator::DB_VERSION_OPTION, '3.6.4.0', false );

		$this->assertTrue( ( new Auto_Migrator() )->needs_upgrade() );
	}

	public function testDoesNotNeedUpgradeWhenStampMatchesPlugin(): void {
		update_option( Auto_Migrator::DB_VERSION_OPTION, JET_FORM_BUILDER_VERSION, false );

		$this->assertFalse( ( new Auto_Migrator() )->needs_upgrade() );
	}

	public function testDoesNotNeedUpgradeWhenStampNewerThanPlugin(): void {
		update_option( Auto_Migrator::DB_VERSION_OPTION, '99.0.0', false );

		$this->assertFalse( ( new Auto_Migrator() )->needs_upgrade() );
	}

	public function testSuccessfulRunStampsVersionAndInstalls(): void {
		$spy = $this->makeSpy( false /* not all installed → must install */ );

		$spy->run_public();

		$this->assertSame( 1, $spy->install_calls, 'install_migrations() must run when something is outstanding' );
		$this->assertSame(
			JET_FORM_BUILDER_VERSION,
			get_option( Auto_Migrator::DB_VERSION_OPTION ),
			'version must be stamped after a successful run'
		);
	}

	public function testFailedRunDoesNotStampVersion(): void {
		$spy = $this->makeSpy( false );
		$spy->throw_on_install = true;

		$spy->run_public();

		$this->assertSame( 1, $spy->install_calls );
		$this->assertFalse(
			get_option( Auto_Migrator::DB_VERSION_OPTION ),
			'version must NOT be stamped when migration fails, so the next admin request retries'
		);
	}

	public function testRunWithNothingOutstandingStampsWithoutInstalling(): void {
		$spy = $this->makeSpy( true /* everything already installed */ );

		$spy->run_public();

		$this->assertSame( 0, $spy->install_calls, 'install_migrations() must be skipped when all installed' );
		$this->assertSame(
			JET_FORM_BUILDER_VERSION,
			get_option( Auto_Migrator::DB_VERSION_OPTION )
		);
	}

	/**
	 * The version-skip case: a client on 3.6.4 updates straight to a hypothetical much
	 * newer build. The old stamp is behind the plugin version (needs_upgrade), and
	 * `Version_3_6_5_2` is NOT yet installed → the run must actually install migrations
	 * (picking up the skipped one), not just re-stamp.
	 */
	public function testVersionSkipStillTriggersInstall(): void {
		update_option( Auto_Migrator::DB_VERSION_OPTION, '3.6.4.0', false );

		$spy = $this->makeSpy( false /* Version_3_6_5_2 not installed yet */ );

		$this->assertTrue( $spy->needs_upgrade(), 'old stamp must be treated as needing upgrade' );

		$spy->run_public();

		$this->assertSame( 1, $spy->install_calls, 'the skipped migration set must be installed on a version jump' );
		$this->assertSame( JET_FORM_BUILDER_VERSION, get_option( Auto_Migrator::DB_VERSION_OPTION ) );
	}

	public function testOnlyExplicitSsrAllowlistMigrationIsSelectedForAutoRun(): void {
		$probe = new class() extends Auto_Migrator {
			public function migration_classes(): array {
				return array_map( 'get_class', $this->migration_instances() );
			}
		};

		$this->assertSame(
			array( Version_3_6_5_2::class ),
			$probe->migration_classes(),
			'Auto migration must not execute the full historical Migrator registry.'
		);
	}

	/**
	 * Returns an Auto_Migrator subclass that records install calls and stubs out the real
	 * Migrator/DB transaction, so the branching logic is tested without touching the
	 * migrations table.
	 */
	private function makeSpy( bool $all_installed ) {
		return new class( $all_installed ) extends Auto_Migrator {
			public $install_calls    = 0;
			public $throw_on_install = false;
			private $all_installed;

			public function __construct( bool $all_installed ) {
				$this->all_installed = $all_installed;
			}

			public function run_public() {
				$this->run();
			}

			protected function all_installed(): bool {
				return $this->all_installed;
			}

			protected function install_migrations() {
				$this->install_calls++;

				if ( $this->throw_on_install ) {
					throw new \RuntimeException( 'boom' );
				}
			}

			// Stub out the real DB transaction so the branching logic is tested in isolation.
			protected function transaction_start() {}
			protected function transaction_commit() {}
			protected function transaction_rollback() {}
		};
	}
}
