<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_3;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Allowlist;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;
use JFB_Modules\Validation\Ssr\Ssr_Blocked_Callback_Usages;
use JFB_Modules\Validation\Ssr\Ssr_Registry_Migration_Notice;

/**
 * Regression coverage: both `Ssr_Callback_Allowlist::rebuild_from_all_forms()` (used by
 * the historical `Version_3_6_5_2`) and `Version_3_6_5_3::up()` scan every
 * `jet-form-builder` post. On a large forms table this must not run unbounded inside the
 * single DB transaction `Auto_Migrator::run()` wraps around it — each call is time-boxed
 * and, when the budget is exceeded, persists a resume cursor and throws so the migration
 * stays "not installed" and a later call picks up where it left off, covering every form
 * exactly once with no duplicates or skips.
 */
class SsrCallbackMigrationBatchingTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Version_3_6_5_3::PROGRESS_OPTION );
		delete_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );

		global $wpdb;
		$wpdb->delete( $wpdb->postmeta, array( 'meta_key' => Ssr_Blocked_Callback_Usages::META_KEY ) );
	}

	public function tearDown(): void {
		remove_all_filters( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget' );
		remove_all_filters( 'jet-form-builder/ssr-registry-migration/time-budget' );

		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Version_3_6_5_3::PROGRESS_OPTION );
		delete_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );

		global $wpdb;
		$wpdb->delete( $wpdb->postmeta, array( 'meta_key' => Ssr_Blocked_Callback_Usages::META_KEY ) );

		// The forms this test created via create_ssr_forms() must not leak into a later test.
		// A direct SQL DELETE (not wp_delete_post()) does not cascade to wp_postmeta, so the
		// META_KEY cleanup above must happen before or alongside this, not rely on it.
		$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->posts} WHERE post_type = %s", 'jet-form-builder' ) );

		// `rebuild_from_all_forms()`/`Version_3_6_5_3::up()` issue their own `COMMIT` mid-run
		// to persist a resume cursor before throwing an "incomplete batch" signal. With
		// `autocommit = 0` (set by `WPTestCase::start_transaction()`), that explicit `COMMIT`
		// ends the transaction `setUp()` opened and MySQL silently opens a fresh implicit one
		// for whatever runs next — which, by the time a test method returns, is exactly the
		// cleanup above. `WPTestCase::tearDown()` only issues a plain `ROLLBACK`, which would
		// discard that implicit transaction (our cleanup) while leaving the earlier,
		// already-committed migration data (and test fixture forms) permanently in the
		// database. Committing explicitly here guarantees the cleanup itself always lands.
		$wpdb->query( 'COMMIT' );

		parent::tearDown();
	}

	public function testAllowlistRebuildResumesAcrossBatchBoundary(): void {
		global $wpdb;

		// Force the budget check to trip immediately, so every call processes at most one
		// batch, without relying on real wall-clock timing.
		add_filter( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget', '__return_zero' );

		$total = Ssr_Callback_Allowlist::REBUILD_BATCH_SIZE + 5;
		$ids   = $this->create_ssr_forms( $total, 'is_email' );

		// First call: must throw (incomplete) and persist progress after exactly one batch.
		$threw = false;

		try {
			Ssr_Callback_Allowlist::rebuild_from_all_forms();
		} catch ( \RuntimeException $exception ) {
			$threw = true;
		}

		$this->assertTrue( $threw, 'An incomplete rebuild must throw so the migration is retried.' );

		$progress = get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );

		$this->assertIsArray( $progress );
		$this->assertArrayHasKey( 'last_id', $progress );
		$this->assertArrayHasKey( 'callbacks', $progress );
		$this->assertGreaterThan( 0, $progress['last_id'] );

		// The final per-form option must not have been written yet.
		$this->assertFalse( get_option( Ssr_Callback_Allowlist::OPTION_KEY, false ) );

		// Resume: allow the budget check to pass so the remaining batches complete.
		remove_all_filters( 'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget' );

		Ssr_Callback_Allowlist::rebuild_from_all_forms();

		$this->assertSame(
			array( 'is_email' ),
			get_option( Ssr_Callback_Allowlist::OPTION_KEY )
		);
		$this->assertFalse(
			get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION, false ),
			'Progress must be cleared once the scan fully completes.'
		);

		// Every form was visited exactly once: per-form meta was written for all of them.
		foreach ( $ids as $id ) {
			$this->assertSame(
				array( 'is_email' ),
				get_post_meta( $id, Ssr_Callback_Allowlist::META_KEY, true )
			);
		}
	}

	public function testRegistryMigrationResumesAndOnlyImportsOnFinalCompletingCall(): void {
		global $wpdb;

		add_filter( 'jet-form-builder/ssr-registry-migration/time-budget', '__return_zero' );

		$total = Version_3_6_5_3::BATCH_SIZE + 5;
		$this->create_ssr_forms( $total, 'is_email' );

		$migration = new Version_3_6_5_3();

		$threw = false;

		try {
			$migration->up( $wpdb );
		} catch ( \RuntimeException $exception ) {
			$threw = true;
		}

		$this->assertTrue( $threw, 'An incomplete migration pass must throw so it is retried.' );

		$progress = get_option( Version_3_6_5_3::PROGRESS_OPTION );

		$this->assertIsArray( $progress );
		$this->assertArrayHasKey( 'last_id', $progress );
		$this->assertGreaterThan( 0, $progress['last_id'] );

		// Writes happen once per completed batch, not once for the whole scan: the batch
		// that hit the time budget already flushed its findings before persisting the
		// resume cursor and throwing, so the registry reflects that batch's forms even
		// though the overall scan is still incomplete (issues-tracker #20361 follow-up —
		// see `up()`'s docblock for why per-batch, not per-scan or per-form). The
		// migration notice, however, is only ever written once the entire scan finishes.
		$this->assertSame(
			array( 'is_email' ),
			Ssr_Callback_Registry::get_allowed_callbacks()
		);
		$this->assertFalse( get_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION, false ) );

		remove_all_filters( 'jet-form-builder/ssr-registry-migration/time-budget' );

		$migration->up( $wpdb );

		// Discovered names are merged directly into the trusted registry — restoring
		// backward compatibility for forms that already relied on them before the update
		// (issues-tracker #20361 follow-up), instead of requiring a manual admin approval.
		$this->assertSame(
			array( 'is_email' ),
			Ssr_Callback_Registry::get_allowed_callbacks()
		);

		$notice = get_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );
		$this->assertContains( 'is_email', $notice['imported'] );

		$this->assertFalse(
			get_option( Version_3_6_5_3::PROGRESS_OPTION, false ),
			'Progress must be cleared once the scan fully completes.'
		);
	}

	/**
	 * Regression for the follow-up UX gap: a denylisted name is never imported into the
	 * registry (it can never be approved), but an admin previously had no way to discover
	 * that a form's SSR rule now silently fails. `Version_3_6_5_3::up()` must record the
	 * (form, field, name) triple via `Ssr_Blocked_Callback_Usages` instead of dropping it.
	 */
	public function testMigrationRecordsBlockedCallbackUsagesForManualReview(): void {
		global $wpdb;

		$content = '<!-- wp:jet-forms/text-field {"name":"email","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"wp_insert_user"}' .
			']}} /-->';

		$form_id = $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => $content,
			)
		);

		( new Version_3_6_5_3() )->up( $wpdb );

		// A denylisted name must never enter the trusted registry.
		$this->assertSame( array(), Ssr_Callback_Registry::get_allowed_callbacks() );

		$usages = Ssr_Blocked_Callback_Usages::get_usages();

		$this->assertCount( 1, $usages );
		$this->assertSame( $form_id, $usages[0]['form_id'] );
		$this->assertSame( 'email', $usages[0]['field'] );
		$this->assertSame( 'wp_insert_user', $usages[0]['name'] );
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
