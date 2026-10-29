<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Actions_V2\Register_User\Register_User_Action;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Verification\Jobs\Verify_Manually;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Regression coverage for issues-tracker #20720: a held submission approved
 * via "Verify manually" used to replay with `wp_set_current_user()` set to
 * the *verifying admin*, so every `current_user_can()` / `get_current_user_id()`
 * check inside the queued actions (e.g. Update User's `User_Id_Property`)
 * was evaluated against the admin instead of the original, possibly
 * anonymous, submitter.
 *
 * These tests exercise `Verify_Manually` directly against a minimal
 * records/tokens/tokens_to_records fixture, without going through the full
 * form-submission pipeline, which this area of the codebase has no existing
 * test coverage for.
 */
class VerifyManuallyReplayIdentityTest extends \Codeception\TestCase\WPTestCase {

	/** @var int[] record IDs created by a test, cleaned up in tearDown() */
	private $created_record_ids = array();

	protected function tearDown(): void {
		foreach ( $this->created_record_ids as $record_id ) {
			try {
				( new Record_Model() )->delete( array( 'id' => $record_id ) );
			} catch ( \Exception $exception ) {
				// Best-effort cleanup only; never let it mask the test result.
			}
		}
		$this->created_record_ids = array();

		wp_set_current_user( 0 );

		parent::tearDown();
	}

	/**
	 * Creates a `records` row plus the `tokens` / `tokens_to_records` rows
	 * that link it to a verification token, mirroring the shape
	 * `Token_By_Record_View` / `Record_By_Token_View` expect to join against.
	 *
	 * @param int $submitter_id 0 for a guest submission.
	 *
	 * @return array{record_id: int, token_id: int}
	 */
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
	 * @return \ReflectionMethod
	 */
	private function get_accessible_method( string $name ): \ReflectionMethod {
		$method = new \ReflectionMethod( Verify_Manually::class, $name );
		$method->setAccessible( true );

		return $method;
	}

	/**
	 * Core of the fix: the job must resolve the record's own stored
	 * `user_id` as the replay identity, never the id passed in as the
	 * verifier.
	 */
	public function testSubmitterIdIsReadFromTheRecordNotFromTheVerifier(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$fixture      = $this->create_pending_record( $submitter_id );

		$job    = new Verify_Manually();
		$method = $this->get_accessible_method( 'get_submitter_id' );

		$resolved = $method->invoke( $job, $fixture['record_id'] );

		$this->assertSame(
			$submitter_id,
			$resolved,
			'The replay identity must be the record\'s stored submitter, regardless of who is verifying it.'
		);
	}

	/**
	 * A guest submission (user_id = 0) must replay as logged-out, not as
	 * whichever admin happens to be verifying it.
	 */
	public function testGuestSubmissionResolvesToZero(): void {
		$fixture = $this->create_pending_record( 0 );

		$job    = new Verify_Manually();
		$method = $this->get_accessible_method( 'get_submitter_id' );

		$resolved = $method->invoke( $job, $fixture['record_id'] );

		$this->assertSame( 0, $resolved );
	}

	/**
	 * An unresolvable record (deleted, wrong ID) must never fall back to the
	 * verifier's own id - 0 (logged-out / no special capabilities) is the
	 * only safe default.
	 */
	public function testUnknownRecordResolvesToZeroRatherThanThrowing(): void {
		$job    = new Verify_Manually();
		$method = $this->get_accessible_method( 'get_submitter_id' );

		$resolved = $method->invoke( $job, PHP_INT_MAX );

		$this->assertSame( 0, $resolved );
	}

	/**
	 * End-to-end identity switch, using the real `execute()` method the REST
	 * endpoint calls. An admin approves a record that was submitted by a
	 * low-privilege user; while the stored actions replay, `get_current_user_id()`
	 * and `current_user_can()` must reflect the *submitter*, not the admin
	 * who clicked "Verify manually".
	 *
	 * This is the exact condition `User_Id_Property::do_before()` relies on
	 * to stop a submission from naming another account: before the fix,
	 * `get_current_user_id()` returned the admin's id here and
	 * `current_user_can( 'edit_users' )` was true, so the guard never fired.
	 */
	public function testReplayRunsAsSubmitterNotAsVerifyingAdmin(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$admin_id     = self::factory()->user->create( array( 'role' => 'administrator' ) );

		$fixture = $this->create_pending_record( $submitter_id );

		wp_set_current_user( $admin_id );

		$observed = array();

		$probe = function () use ( &$observed ) {
			$observed['current_user_id'] = get_current_user_id();
			$observed['is_logged_in']    = is_user_logged_in();
			$observed['can_edit_users']  = current_user_can( 'edit_users' );
		};

		// Runs inside confirm(), while the replay identity is active.
		add_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$job = new Verify_Manually();
		$job->execute( $fixture['record_id'], $admin_id );

		remove_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$this->assertSame(
			$submitter_id,
			$observed['current_user_id'] ?? null,
			'Stored actions must replay as the original submitter, not as the verifying admin.'
		);
		$this->assertFalse(
			$observed['can_edit_users'] ?? true,
			'A subscriber-submitted record must not inherit the admin\'s edit_users capability during replay.'
		);

		// The job must restore the verifying admin's own session afterwards.
		$this->assertSame( $admin_id, get_current_user_id() );
	}

	/**
	 * Same scenario for a fully anonymous submission: the replay must run
	 * logged out, even though an administrator is the one triggering it.
	 */
	public function testReplayOfGuestSubmissionRunsLoggedOut(): void {
		$admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$fixture  = $this->create_pending_record( 0 );

		wp_set_current_user( $admin_id );

		$observed = array();

		$probe = function () use ( &$observed ) {
			$observed['is_logged_in']   = is_user_logged_in();
			$observed['can_edit_users'] = current_user_can( 'edit_users' );
		};

		add_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$job = new Verify_Manually();
		$job->execute( $fixture['record_id'], $admin_id );

		remove_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$this->assertFalse(
			$observed['is_logged_in'] ?? true,
			'An anonymous submission must replay logged out, not as the verifying admin.'
		);
		$this->assertFalse( $observed['can_edit_users'] ?? true );
		$this->assertSame( $admin_id, get_current_user_id() );
	}

	/**
	 * An expired token makes Webhook\Module::confirm() return before the
	 * verification hook fires; the verifier must still be restored.
	 */
	public function testVerifierIsRestoredWhenConfirmExitsEarly(): void {
		global $wpdb;

		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$admin_id     = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$fixture      = $this->create_pending_record( $submitter_id );

		$wpdb->update(
			Tokens_Model::table(),
			array( 'expire_at' => gmdate( 'Y-m-d H:i:s', time() - HOUR_IN_SECONDS ) ),
			array( 'id' => $fixture['token_id'] )
		);

		$hook_fired = false;
		$probe      = function () use ( &$hook_fired ) {
			$hook_fired = true;
		};

		add_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		wp_set_current_user( $admin_id );
		( new Verify_Manually() )->execute( $fixture['record_id'], $admin_id );

		remove_action( 'jet-form-builder/webhook/verification', $probe, 5 );

		$this->assertFalse( $hook_fired, 'Precondition: the expired token must short-circuit confirm().' );
		$this->assertSame( $admin_id, get_current_user_id() );
	}

	/**
	 * Applies the job's register_user adjustments while `$replay_user_id` is
	 * the current user (as during replay) and returns the action.
	 */
	private function prepare_register_action( int $replay_user_id, array $settings ): Register_User_Action {
		$action           = new Register_User_Action();
		$action->settings = $settings;

		wp_set_current_user( $replay_user_id );
		( new Verify_Manually() )->modify_register_user( $action );

		return $action;
	}

	/**
	 * A guest-submitted held registration replays logged out; it must still
	 * pass can_register() (previously it threw `not_logged_in`).
	 */
	public function testGuestHeldRegistrationPassesTheGate(): void {
		$action = $this->prepare_register_action(
			0,
			array(
				'allow_register'    => true,
				'role_can_register' => 'administrator',
				'log_in'            => true,
			)
		);

		$this->assertTrue( $action->can_register() );
		$this->assertFalse( $action->settings['log_in'] );
	}

	/**
	 * A logged-in submitter whose role differs from the form's configured
	 * role_can_register must still pass (previously `not_enough_cap`).
	 */
	public function testLoggedInSubmitterHeldRegistrationPassesTheGate(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );

		$action = $this->prepare_register_action(
			$submitter_id,
			array(
				'allow_register'    => true,
				'role_can_register' => 'administrator',
			)
		);

		$this->assertTrue( $action->can_register() );
		$this->assertFalse( $action->settings['log_in'] );
	}

	/**
	 * A logged-in submitter with no role on this site (e.g. a multisite
	 * network user) must still pass; no settings combination could satisfy
	 * the gate for them otherwise.
	 */
	public function testRolelessSubmitterHeldRegistrationPassesTheGate(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => '' ) );
		( new \WP_User( $submitter_id ) )->set_role( '' );

		$action = $this->prepare_register_action(
			$submitter_id,
			array(
				'allow_register'    => true,
				'role_can_register' => 'administrator',
			)
		);

		$this->assertTrue( is_user_logged_in() );
		$this->assertTrue( $action->can_register() );
	}

	/**
	 * Approval only replaces the role gate: a logged-in submitter on a form
	 * with allow_register disabled is still refused rather than getting a new
	 * account created from the stored fields.
	 */
	public function testApprovalKeepsTheExistingUserPathWhenRegisterIsDisallowed(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );

		$action = $this->prepare_register_action(
			$submitter_id,
			array(
				'allow_register' => false,
			)
		);

		$this->expectException( \Jet_Form_Builder\Exceptions\Action_Exception::class );
		$this->expectExceptionMessage( 'already_logged_in' );
		$action->can_register();
	}

	/**
	 * The replay hooks are scoped to execute(): once it returns, a Register
	 * User action running later in the same request is not marked approved.
	 */
	public function testReplayHooksAreRemovedAfterExecute(): void {
		$submitter_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$admin_id     = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$fixture      = $this->create_pending_record( $submitter_id );
		$job          = new Verify_Manually();

		wp_set_current_user( $admin_id );
		$job->execute( $fixture['record_id'], $admin_id );

		$this->assertFalse(
			has_action( 'jet-form-builder/before-do-action/register_user', array( $job, 'modify_register_user' ) )
		);
		$this->assertFalse(
			has_action( 'jet-form-builder/webhook/verification', array( $job, 'execute_actions' ) )
		);

		$action           = new Register_User_Action();
		$action->settings = array(
			'allow_register'    => true,
			'role_can_register' => 'administrator',
		);

		wp_set_current_user( 0 );
		do_action( 'jet-form-builder/before-do-action/register_user', $action );

		$this->expectException( \Jet_Form_Builder\Exceptions\Action_Exception::class );
		$action->can_register();
	}

	/**
	 * Without the job's approval the gate is unchanged: a guest on an
	 * allow_register form is still refused.
	 */
	public function testUnapprovedRegistrationKeepsTheOriginalGate(): void {
		$action           = new Register_User_Action();
		$action->settings = array(
			'allow_register'    => true,
			'role_can_register' => 'administrator',
		);

		wp_set_current_user( 0 );

		$this->expectException( \Jet_Form_Builder\Exceptions\Action_Exception::class );
		$action->can_register();
	}
}
