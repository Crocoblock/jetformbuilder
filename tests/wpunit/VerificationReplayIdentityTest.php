<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Security\Submitter_Identity;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Gateways\Base_Scenario_Gateway;
use JFB_Modules\Gateways\Scenarios_Abstract\Scenario_Logic_Base;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;

if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once __DIR__ . '/../_support/Record_Tables.php';

/**
 * A submission held for email confirmation is replayed in the request of
 * whoever opens the confirmation link. The stored, visitor-supplied request
 * must run with the submitter's identity, not with the capabilities of a
 * logged-in administrator who opens the link. The same applies to payment
 * return replays.
 */
class VerificationReplayIdentityTest extends \Codeception\TestCase\WPTestCase {

	const HOOK = 'replay_identity_probe';

	private $admin;
	private $observed = array();
	private $saved_handler;

	protected function setUp(): void {
		parent::setUp();

		Record_Tables::reset();
		$this->admin = self::factory()->user->create( array( 'role' => 'administrator' ) );

		// Actions and request of earlier tests live in the shared handlers.
		$this->saved_handler             = jet_form_builder()->form_handler;
		jet_form_builder()->form_handler = new \Jet_Form_Builder\Form_Handler();
		jet_fb_context()->parsers        = array();
		jet_fb_context()->set_request( array() );
		add_action( 'jet-form-builder/custom-action/' . self::HOOK, array( $this, 'probe' ) );
	}

	protected function tearDown(): void {
		remove_action( 'jet-form-builder/custom-action/' . self::HOOK, array( $this, 'probe' ) );
		remove_all_actions( 'jet-form-builder/custom-action/replay_identity_throw' );
		Record_Tables::drop();
		jet_fb_context()->parsers        = array();
		jet_fb_context()->set_request( array() );
		jet_form_builder()->form_handler = $this->saved_handler;
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	public function probe( $request ) {
		$this->observed[] = array(
			'user'           => get_current_user_id(),
			'can_edit_pages' => current_user_can( 'edit_pages' ),
			'who'            => (string) ( $request['who'] ?? '' ),
			'qv'             => (string) ( $request['qv'] ?? '' ),
			'ref'            => (string) ( $request['ref'] ?? '' ),
			'fb'             => (string) ( $request['fb'] ?? '' ),
			'mail'           => $this->html_mail( 'V:%vip%|G:%gold%|F:%fb%' ),
		);
	}

	/**
	 * Body of a text/html Send Email action with the given template.
	 */
	private function html_mail( string $template ): string {
		$email = new \JFB_Modules\Actions_V2\Send_Email\Send_Email_Action();
		$email->set_content_type( 'text/html' );
		$email->set_content( $template );
		$email->set_subject( 'Subject' );

		\JFB_Modules\Actions_V2\Send_Email\Send_Email_Hooks::basic_formatting( $email );

		return $email->get_content();
	}

	/* ------------------------------ helpers ------------------------------ */

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	/**
	 * Form with a server-only "Current User ID" hidden field and the given
	 * actions, saved by an administrator (no kses over block markup).
	 */
	private function create_form( array $actions ): int {
		$current = get_current_user_id();
		wp_set_current_user( $this->admin );

		$form_id = (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Held form',
				'post_content' => wp_slash(
					$this->block( 'text-field', array( 'name' => 'title' ) ) .
					$this->block( 'text-field', array( 'name' => 'post_id' ) ) .
					$this->block( 'text-field', array( 'name' => 'user_login' ) ) .
					$this->block( 'text-field', array( 'name' => 'user_email' ) ) .
					$this->block( 'text-field', array( 'name' => 'password' ) ) .
					$this->block( 'hidden-field', array( 'name' => 'who', 'render' => false, 'field_value' => 'user_id' ) ) .
					$this->block( 'hidden-field', array( 'name' => 'qv', 'render' => false, 'field_value' => 'query_var', 'query_var_key' => 'pid' ) ) .
					$this->block( 'hidden-field', array( 'name' => 'ref', 'render' => false, 'field_value' => 'referer_url' ) ) .
					// Empty Manual Input falls back to a Query Variable preset.
					$this->block(
						'hidden-field',
						array(
							'name'         => 'fb',
							'render'       => false,
							'field_value'  => 'manual_input',
							'hidden_value' => '',
							'default'      => wp_json_encode( array( 'jet_preset' => 1, 'from' => 'query_var', 'current_field_key' => 'fb' ) ),
						)
					) .
					// The author's own values: Manual Input, and an empty one with a plain Default.
					$this->block( 'hidden-field', array( 'name' => 'vip', 'render' => false, 'field_value' => 'manual_input', 'hidden_value' => '<strong>VIP</strong>' ) ) .
					$this->block( 'hidden-field', array( 'name' => 'gold', 'render' => false, 'field_value' => 'manual_input', 'hidden_value' => '', 'default' => '<em>Gold</em>' ) )
				),
			)
		);

		$list = array();
		foreach ( array_values( $actions ) as $index => $action ) {
			$list[] = array(
				'id'         => 98000 + $index,
				'type'       => $action[0],
				'is_execute' => true,
				'settings'   => array( $action[0] => $action[1] ),
				'conditions' => array(),
				'events'     => $action[2] ?? array(),
			);
		}
		update_post_meta( $form_id, '_jf_actions', wp_slash( wp_json_encode( $list ) ) );
		wp_set_current_user( $current );

		return $form_id;
	}

	private function probe_form(): int {
		return $this->create_form( array( array( 'call_hook', array( 'hook_name' => self::HOOK ) ) ) );
	}

	/**
	 * Held record with its fields and a confirmation token.
	 *
	 * @return array{record_id: int, token_id: int, token: string}
	 */
	private function hold( int $form_id, int $submitter, array $fields ): array {
		$record_id = ( new Record_Model() )->insert(
			array(
				'form_id'           => $form_id,
				'user_id'           => $submitter,
				'from_content_id'   => 1,
				'from_content_type' => 'page',
				'referrer'          => home_url( '/' ),
				'status'            => 'verification_pending',
			)
		);

		foreach ( $fields as $name => $value ) {
			( new Record_Field_Model() )->insert(
				array(
					'record_id'   => $record_id,
					'field_name'  => $name,
					'field_value' => (string) $value,
					'field_type'  => in_array( $name, array( 'who', 'qv', 'ref', 'fb', 'vip', 'gold' ), true ) ? 'hidden-field' : 'text-field',
					'field_attrs' => wp_json_encode( array() ),
				)
			);
		}

		list( $token_id, $token ) = Tokens_Model::create_token( 'verification' );
		( new Tokens_To_Records_Model() )->insert( array( 'token_id' => $token_id, 'record_id' => $record_id ) );

		return array( 'record_id' => $record_id, 'token_id' => $token_id, 'token' => $token );
	}

	/**
	 * What opening the confirmation link does, without the final redirect.
	 */
	private function open_link( array $held, string $token = '' ): void {
		/** @var \JFB_Modules\Webhook\Module $webhooks */
		$webhooks = jet_form_builder()->module( 'webhook' );
		/** @var \JFB_Modules\Verification\Module $verification */
		$verification = jet_form_builder()->module( 'verification' );

		// on_verification() ends with a redirect + die.
		remove_action( 'jet-form-builder/webhook/verification', array( $verification, 'on_verification' ) );

		$webhooks->set_token_id( $held['token_id'] );
		$webhooks->set_token( $token ? $token : $held['token'] );
		$webhooks->set_check_hash( true );
		$webhooks->confirm();

		add_action( 'jet-form-builder/webhook/verification', array( $verification, 'on_verification' ) );

		$this->assertSame( ! $token, $webhooks->is_verified(), 'Precondition: token check result.' );

		$verification->do_verification( $webhooks );
	}

	/* ------------------------- email confirmation ------------------------ */

	public function submitter_provider(): array {
		return array(
			'guest'      => array( false ),
			'subscriber' => array( true ),
		);
	}

	/**
	 * An administrator opens the confirmation link of a submission sent by
	 * somebody else.
	 *
	 * @dataProvider submitter_provider
	 */
	public function testConfirmationReplaysAsSubmitterNotAsAdmin( bool $logged_in ): void {
		$submitter = $logged_in ? self::factory()->user->create( array( 'role' => 'subscriber' ) ) : 0;
		$held      = $this->hold( $this->probe_form(), $submitter, array( 'title' => 'x', 'who' => '999' ) );

		wp_set_current_user( $this->admin );
		$this->open_link( $held );

		$this->assertCount( 1, $this->observed, 'The deferred action ran.' );
		$this->assertSame( $submitter, $this->observed[0]['user'] );
		$this->assertFalse( $this->observed[0]['can_edit_pages'], 'No administrator capabilities in the replay.' );
		$this->assertSame( $this->admin, get_current_user_id(), 'The administrator session is restored.' );
	}

	/**
	 * Server-side hidden values (Current User ID) were computed for the
	 * submitter when the form was sent and stored with the record; the
	 * administrator who opens the link does not replace them.
	 *
	 * @dataProvider submitter_provider
	 */
	public function testServerSideUserValuesStayThoseOfTheSubmitter( bool $logged_in ): void {
		$submitter = $logged_in ? self::factory()->user->create( array( 'role' => 'subscriber' ) ) : 0;
		$stored    = $logged_in ? (string) $submitter : '';
		$held      = $this->hold( $this->probe_form(), $submitter, array( 'title' => 'x', 'who' => $stored ) );

		wp_set_current_user( $this->admin );
		$this->open_link( $held );

		$this->assertNotSame( (string) $this->admin, $this->observed[0]['who'] );
		$this->assertSame( $stored, $this->observed[0]['who'] );
	}

	/**
	 * A guest asks to overwrite a page of the administrator; the
	 * administrator confirms.
	 */
	public function testGuestCannotUpdateAdministratorPageThroughConfirmation(): void {
		$page = self::factory()->post->create( array( 'post_type' => 'page', 'post_title' => 'Terms of Service', 'post_author' => $this->admin ) );
		$form = $this->create_form(
			array( array( 'insert_post', array( 'post_type' => 'page', 'fields_map' => array( 'post_id' => 'ID', 'title' => 'post_title' ) ) ) )
		);
		$held = $this->hold( $form, 0, array( 'post_id' => $page, 'title' => 'Security notice' ) );

		wp_set_current_user( $this->admin );
		$rejected = null;
		try {
			$this->open_link( $held );
		} catch ( \Jet_Form_Builder\Exceptions\Action_Exception $exception ) {
			$rejected = $exception;
		}

		$this->assertNotNull( $rejected, 'The update was attempted and rejected.' );
		$this->assertSame( 'Terms of Service', get_post( $page )->post_title );
		$this->assertSame( $this->admin, get_current_user_id() );
	}

	/**
	 * The legitimate flow keeps working: the author of a page asks to update
	 * it and confirms from a browser where nobody is logged in.
	 */
	public function testSubmitterUpdatesOwnPageWhenLinkIsOpenedLoggedOut(): void {
		$author = self::factory()->user->create( array( 'role' => 'author' ) );
		$post   = self::factory()->post->create( array( 'post_title' => 'Old title', 'post_author' => $author ) );
		$form   = $this->create_form(
			array( array( 'insert_post', array( 'post_type' => 'post', 'fields_map' => array( 'post_id' => 'ID', 'title' => 'post_title' ) ) ) )
		);
		$held   = $this->hold( $form, $author, array( 'post_id' => $post, 'title' => 'New title' ) );

		wp_set_current_user( 0 );
		$this->open_link( $held );

		$this->assertSame( 'New title', get_post( $post )->post_title );
		$this->assertSame( 0, get_current_user_id() );
	}

	public function testAdministratorIsRestoredWhenTheReplayFails(): void {
		$form = $this->create_form( array( array( 'call_hook', array( 'hook_name' => 'replay_identity_throw' ) ) ) );
		add_action(
			'jet-form-builder/custom-action/replay_identity_throw',
			static function () {
				throw new \RuntimeException( 'Action failed' );
			}
		);
		$held = $this->hold( $form, 0, array( 'title' => 'x' ) );

		wp_set_current_user( $this->admin );
		$caught = '';
		try {
			$this->open_link( $held );
		} catch ( \RuntimeException $exception ) {
			$caught = $exception->getMessage();
		}

		$this->assertSame( 'Action failed', $caught );
		$this->assertSame( $this->admin, get_current_user_id() );
		$this->assertFalse( Submitter_Identity::is_replaying() );
	}

	/* --------------------------- payment return -------------------------- */

	/**
	 * Payment return replays the stored request the same way.
	 */
	public function testPaymentReturnReplaysAsSubmitter(): void {
		$submitter = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$seen      = array();

		$scenario = new class( $submitter, $seen ) extends Scenario_Logic_Base {
			private $submitter;
			private $seen;
			public function __construct( $submitter, &$seen ) {
				$this->submitter = $submitter;
				$this->seen      = &$seen;
			}
			public static function scenario_id() { return 'replay-identity'; }
			public function after_actions() {}
			public function process_after() {}
			public function get_failed_statuses() { return array(); }
			protected function query_token() { return ''; }
			protected function query_scenario_row() { return array( 'record' => array( 'user_id' => $this->submitter ) ); }
			public function init_request() { $this->seen['init_request'] = get_current_user_id(); }
			public function init_actions() {}
			public function on_catch() {
				$this->seen['on_catch']  = get_current_user_id();
				$this->seen['can_edit'] = current_user_can( 'edit_pages' );
			}
		};

		$gateway = new class( $scenario ) extends Base_Scenario_Gateway {
			private $scenario;
			public function __construct( $scenario ) { $this->scenario = $scenario; }
			public function get_id() { return 'replay-identity'; }
			public function get_name() { return 'Replay identity'; }
			public function query_scenario() { return $this->scenario; }
			public function set_payment_token() { return $this; }
			public function set_form_gateways_meta() { return $this; }
			protected function retrieve_gateway_meta() { return array(); }
		};

		wp_set_current_user( $this->admin );
		$gateway->try_run_on_catch();

		$this->assertSame( $submitter, $seen['init_request'] ?? null, 'Stored request restored as the submitter.' );
		$this->assertSame( $submitter, $seen['on_catch'] ?? null );
		$this->assertFalse( $seen['can_edit'] ?? true );
		$this->assertSame( $this->admin, get_current_user_id() );
	}

	/* ------------------------------ helper ------------------------------- */

	public function testRecordWithoutSubmitterIsAGuest(): void {
		$this->assertSame( 0, Submitter_Identity::of_record( array() ) );
		$this->assertSame( 0, Submitter_Identity::of_record( null ) );
		$this->assertSame( 0, Submitter_Identity::of_record( array( 'user_id' => '-5' ) ) );
		$this->assertSame( 7, Submitter_Identity::of_record( array( 'user_id' => '7' ) ) );
	}

	public function testRunRestoresTheUserAndReturnsTheResult(): void {
		wp_set_current_user( $this->admin );

		$this->assertSame( 0, Submitter_Identity::run( 0, 'get_current_user_id' ) );
		$this->assertSame( $this->admin, get_current_user_id() );
	}

	/* ------------------------- review follow-ups ------------------------- */

	/**
	 * A wrong token still reaches the replay (VERIFICATION.FAILED actions).
	 * Anybody who knows a token id can trigger it, so it never runs with the
	 * stored submitter's capabilities.
	 */
	public function testFailedConfirmationRunsAsGuest(): void {
		$editor = self::factory()->user->create( array( 'role' => 'editor' ) );
		$form   = $this->create_form( array( array( 'call_hook', array( 'hook_name' => self::HOOK ), array( 'VERIFICATION.FAILED' ) ) ) );
		$held   = $this->hold( $form, $editor, array( 'title' => 'x' ) );

		wp_set_current_user( 0 );
		$this->open_link( $held, 'wrong-token' );

		$this->assertCount( 1, $this->observed, 'The failed-branch action ran.' );
		$this->assertSame( 0, $this->observed[0]['user'] );
		$this->assertFalse( $this->observed[0]['can_edit_pages'] );
	}

	public function testRecordOfDeletedUserReplaysAsGuest(): void {
		$gone = self::factory()->user->create( array( 'role' => 'editor' ) );
		$held = $this->hold( $this->probe_form(), $gone, array( 'title' => 'x' ) );
		require_once ABSPATH . 'wp-admin/includes/user.php';
		wp_delete_user( $gone );

		wp_set_current_user( $this->admin );
		$this->open_link( $held );

		$this->assertSame( 0, $this->observed[0]['user'] );
		$this->assertFalse( $this->observed[0]['can_edit_pages'] );
	}

	private function register_form(): int {
		return $this->create_form(
			array(
				array(
					'register_user',
					array(
						'allow_register' => false,
						'user_role'      => 'subscriber',
						'log_in'         => true,
						'fields_map'     => array( 'login' => 'user_login', 'email' => 'user_email', 'password' => 'password' ),
					),
				),
			)
		);
	}

	public function register_opener_provider(): array {
		return array(
			'guest opens the link'            => array( false, 1 ),
			'another account opens the link' => array( true, 0 ),
		);
	}

	/**
	 * Register User with "Log in after register": the guest's own link logs
	 * the new user in; a link opened while another account is logged in
	 * registers the user without replacing that session.
	 *
	 * @dataProvider register_opener_provider
	 */
	public function testRegistrationByLinkKeepsAnotherLoggedInSession( bool $admin_opens, int $logins ): void {
		$held   = $this->hold( $this->register_form(), 0, array( 'user_login' => 'replay_new_user', 'user_email' => 'replay-new@example.org', 'password' => 'Secret-123456' ) );
		$cookie = 0;
		add_filter( 'send_auth_cookies', '__return_false' );
		$count = static function () use ( &$cookie ) {
			++$cookie;
		};
		add_action( 'set_auth_cookie', $count );

		wp_set_current_user( $admin_opens ? $this->admin : 0 );
		$this->open_link( $held );

		remove_action( 'set_auth_cookie', $count );
		remove_filter( 'send_auth_cookies', '__return_false' );

		$this->assertInstanceOf( \WP_User::class, get_user_by( 'email', 'replay-new@example.org' ), 'The account is registered.' );
		$this->assertSame( $logins, $cookie );
		if ( $admin_opens ) {
			$this->assertSame( $this->admin, get_current_user_id() );
		}
	}

	public function testApprovalNoticeIsShownAgainForTheNewPaths(): void {
		$notice = new \JFB_Modules\Verification\Manual_Verification_Identity_Notice();
		wp_set_current_user( $this->admin );
		update_user_meta( $this->admin, \JFB_Modules\Verification\Manual_Verification_Identity_Notice::DISMISS_META_KEY, '1' );

		ob_start();
		$notice->render_notice();
		$html = ob_get_clean();

		$this->assertStringContainsString( 'confirmation link', $html, 'Dismissed #20720 notice is shown again.' );
	}

	/**
	 * The person who opens the link controls its query string and Referer.
	 * With the submitter's identity in place, request-derived hidden values
	 * keep what the submitter sent.
	 */
	public function testLinkOpenerCannotChangeRequestDerivedValues(): void {
		$editor = self::factory()->user->create( array( 'role' => 'editor' ) );
		$held   = $this->hold( $this->probe_form(), $editor, array( 'title' => 'x', 'qv' => '10', 'ref' => 'https://example.org/form/' ) );

		$_GET['pid']             = '1';
		$_SERVER['HTTP_REFERER'] = 'https://attacker.example/';
		wp_set_current_user( 0 );
		$this->open_link( $held );
		unset( $_GET['pid'], $_SERVER['HTTP_REFERER'] );

		$this->assertSame( '10', $this->observed[0]['qv'] );
		$this->assertSame( 'https://example.org/form/', $this->observed[0]['ref'] );
	}

	/**
	 * A server-only hidden field whose own source is empty falls back to its
	 * Default, here a Query Variable preset. The link opener's query string
	 * does not replace the value stored at submit time, nor fill an empty one.
	 */
	public function testLinkOpenerCannotChangePresetFallbackValues(): void {
		$editor = self::factory()->user->create( array( 'role' => 'editor' ) );
		$filled = $this->hold( $this->probe_form(), $editor, array( 'title' => 'x', 'fb' => '10' ) );
		$empty  = $this->hold( $this->probe_form(), $editor, array( 'title' => 'y' ) );

		$_GET['fb'] = '1';
		wp_set_current_user( 0 );
		$this->open_link( $filled );
		$this->open_link( $empty );
		unset( $_GET['fb'] );

		$this->assertSame( '10', $this->observed[0]['fb'] );
		$this->assertSame( '', $this->observed[1]['fb'] );
	}

	/**
	 * The preset fallback above still works for a regular submission.
	 */
	public function testPresetFallbackIsComputedOutsideReplay(): void {
		jet_fb_context()->set_parsers( \Jet_Form_Builder\Blocks\Block_Helper::get_blocks_by_post( $this->probe_form() ) );
		jet_fb_context()->set_request( array( 'fb' => 'sent-by-browser' ) );
		$_GET['fb'] = '7';
		jet_fb_context()->apply_request();
		$value = jet_fb_context()->get_value( 'fb' );
		unset( $_GET['fb'] );

		$this->assertSame( '7', (string) $value );
	}

	public function payment_opener_provider(): array {
		return array(
			'submitter returns logged out' => array( false, true ),
			'another account is logged in' => array( true, false ),
		);
	}

	/**
	 * Payment return: Register User with "Log in after register" logs in a
	 * submitter who returns logged out, but does not replace the session of
	 * another account logged in in that browser.
	 *
	 * @dataProvider payment_opener_provider
	 */
	public function testPaymentReturnKeepsAnotherLoggedInSession( bool $admin_opens, bool $log_in ): void {
		$scenario = new class() extends Scenario_Logic_Base {
			public $log_in;
			public function __construct() {}
			public static function scenario_id() { return 'replay-session'; }
			public function after_actions() {}
			public function process_after() {}
			public function get_failed_statuses() { return array(); }
			protected function query_token() { return ''; }
			protected function query_scenario_row() { return array( 'record' => array( 'user_id' => 0 ) ); }
			public function init_request() {}
			public function init_actions() {}
			public function on_catch() {
				$action = new \JFB_Modules\Actions_V2\Register_User\Register_User_Action();

				$action->settings = array( 'log_in' => true );
				do_action( 'jet-form-builder/before-do-action/register_user', $action );
				$this->log_in = $action->settings['log_in'];
			}
		};

		$gateway = new class( $scenario ) extends Base_Scenario_Gateway {
			private $scenario;
			public function __construct( $scenario ) { $this->scenario = $scenario; }
			public function get_id() { return 'replay-session'; }
			public function get_name() { return 'Replay session'; }
			public function query_scenario() { return $this->scenario; }
			public function set_payment_token() { return $this; }
			public function set_form_gateways_meta() { return $this; }
			protected function retrieve_gateway_meta() { return array(); }
		};

		wp_set_current_user( $admin_opens ? $this->admin : 0 );
		$gateway->try_run_on_catch();

		$this->assertSame( $log_in, $scenario->log_in );
		$this->assertFalse( has_action( 'jet-form-builder/before-do-action/register_user', array( Submitter_Identity::class, 'keep_session' ) ), 'The guard is removed after the replay.' );
	}

	/**
	 * An HTML e-mail sent on confirmation keeps the form author's own markup
	 * of server-only hidden fields, as on a regular submission, while a value
	 * that came from a preset source stays escaped and is the stored one.
	 */
	public function testConfirmationEmailKeepsAuthorMarkupOfHiddenFields(): void {
		$held = $this->hold(
			$this->probe_form(),
			0,
			array( 'title' => 'x', 'vip' => '<strong>VIP</strong>', 'gold' => '<em>Gold</em>', 'fb' => 'Hi <b>x</b>' )
		);

		$_GET['fb'] = '<i>opener</i>';
		wp_set_current_user( $this->admin );
		$this->open_link( $held );
		unset( $_GET['fb'] );

		$mail = $this->observed[0]['mail'];

		$this->assertStringContainsString( 'V:<strong>VIP</strong>', $mail );
		$this->assertStringContainsString( 'G:<em>Gold</em>', $mail );
		$this->assertStringContainsString( 'F:Hi &lt;b&gt;x&lt;/b&gt;', $mail );
		$this->assertStringNotContainsString( 'opener', $mail );
	}

	/**
	 * Same template on a regular submission: the reference behaviour the
	 * confirmation must match.
	 */
	public function testRegularSubmissionEmailKeepsAuthorMarkupOfHiddenFields(): void {
		jet_fb_context()->set_parsers( \Jet_Form_Builder\Blocks\Block_Helper::get_blocks_by_post( $this->probe_form() ) );
		jet_fb_context()->set_request( array( 'vip' => '<a>x</a>', 'gold' => '<a>x</a>' ) );
		jet_fb_context()->apply_request();

		$mail = $this->html_mail( 'V:%vip%|G:%gold%' );

		$this->assertStringContainsString( 'V:<strong>VIP</strong>', $mail );
		$this->assertStringContainsString( 'G:<em>Gold</em>', $mail );
	}
}
