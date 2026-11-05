<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Verification\Jobs\Verify_Manually;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once __DIR__ . '/../_support/Record_Tables.php';

/**
 * Companion coverage for issues-tracker #20720.
 *
 * `User_Id_Property::do_before()` (the guard that stops a submission from
 * naming another account) has a second, unrelated bypass besides the
 * verifying-admin identity this issue's main fix addresses:
 * `! Tools::is_webhook()`. That flag exists for paid payment addons
 * (PayPal/Stripe) to skip identity checks on their own server-to-server
 * webhook callbacks, which never carry a WP session; it is driven by the
 * `JET_FB_REST_WEBHOOK` constant, which this plugin never defines itself.
 *
 * The `Verify_Manually` replay is a *different* kind of "trusted replay" and
 * must never cause `Tools::is_webhook()` to report true - if it did, the
 * identity switch fixed in `VerifyManuallyReplayIdentityTest` would stop
 * mattering, because `User_Id_Property` would skip its capability check
 * independently of whose ID `get_current_user_id()` returns. This test pins
 * that the two mechanisms stay isolated, so a future change to either one
 * cannot silently reopen the account-takeover path by wiring them together.
 */
class VerifyManuallyWebhookBypassIsolationTest extends \Codeception\TestCase\WPTestCase {

	/** @var int[] record IDs created by a test, cleaned up in tearDown() */
	private $created_record_ids = array();

	protected function setUp(): void {
		parent::setUp();

		// Never depend on what earlier test files left in the (temporary)
		// records/token tables - see Record_Tables.
		Record_Tables::reset();
	}

	protected function tearDown(): void {
		foreach ( $this->created_record_ids as $record_id ) {
			try {
				( new Record_Model() )->delete( array( 'id' => $record_id ) );
			} catch ( \Exception $exception ) {
				// Best-effort cleanup only; never let it mask the test result.
			}
		}
		$this->created_record_ids = array();

		Record_Tables::drop();

		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function create_pending_record( int $submitter_id ): array {
		$record_id = ( new Record_Model() )->insert(
			array(
				'form_id'           => 1,
				'user_id'           => $submitter_id,
				'from_content_id'   => 1,
				'from_content_type' => 'post',
				'status'            => 'verification_pending',
			)
		);

		$this->created_record_ids[] = $record_id;

		list( $token_id, $token ) = Tokens_Model::create_token( 'verification' );

		( new Tokens_To_Records_Model() )->insert(
			array(
				'token_id'  => $token_id,
				'record_id' => $record_id,
			)
		);

		return array(
			'record_id' => $record_id,
			'token_id'  => $token_id,
			'token'     => $token,
		);
	}

	/**
	 * Sanity check on the precondition the rest of this test relies on: in
	 * this plugin's own codebase, nothing ever defines `JET_FB_REST_WEBHOOK`.
	 * If a future change makes the plugin itself define it, this test's
	 * other assertions would start passing for the wrong reason.
	 */
	public function testPluginNeverDefinesTheWebhookConstantItself(): void {
		$this->assertFalse(
			Tools::is_webhook(),
			'`JET_FB_REST_WEBHOOK` must only ever be defined by third-party payment ' .
			'addons, never by jetformbuilder itself; this plugin has no legitimate ' .
			'reason to self-report as a payment webhook.'
		);
	}

	/**
	 * Core of this companion test: running a manual-verification replay must
	 * not make `Tools::is_webhook()` start returning true. If it did,
	 * `User_Id_Property::do_before()` would skip its capability check for a
	 * reason unrelated to - and independent of - whichever identity
	 * `Verify_Manually` sets as the current user.
	 */
	public function testReplayNeverFlipsTheUnrelatedWebhookBypassFlag(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$admin_id      = self::factory()->user->create( array( 'role' => 'administrator' ) );

		$fixture = $this->create_pending_record( $submitter_id );

		wp_set_current_user( $admin_id );

		$observed = array();

		$probe = function () use ( &$observed ) {
			$observed['is_webhook'] = Tools::is_webhook();
		};

		add_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$job = new Verify_Manually();
		$job->execute( $fixture['record_id'], $admin_id );

		remove_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$this->assertFalse(
			$observed['is_webhook'] ?? true,
			'A manual-verification replay must never be reported as a payment-addon ' .
			'webhook; the two "trusted replay" contracts must stay isolated.'
		);
	}
}
