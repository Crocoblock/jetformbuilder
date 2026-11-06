<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Actions_V2\Update_User\Update_User_Action;

/**
 * Update User edits another user only when the current user may edit THAT
 * user. A role with the general "edit_users" capability can still be
 * limited to some users through map_meta_cap (WooCommerce lets a shop
 * manager edit customers only).
 */
class UpdateUserTargetCapabilityTest extends \Codeception\TestCase\WPTestCase {

	private $admin_id;
	private $manager_id;
	private $customer_id;

	protected function setUp(): void {
		parent::setUp();

		add_role( 'jfb_test_manager', 'Manager', array( 'read' => true, 'edit_users' => true, 'list_users' => true ) );

		$this->admin_id    = self::factory()->user->create( array( 'role' => 'administrator', 'user_email' => 'admin@example.test' ) );
		$this->manager_id  = self::factory()->user->create( array( 'role' => 'jfb_test_manager', 'user_email' => 'manager@example.test' ) );
		$this->customer_id = self::factory()->user->create( array( 'role' => 'subscriber', 'user_email' => 'customer@example.test' ) );

		$admin_id = $this->admin_id;

		// The manager may edit users, except administrators.
		add_filter(
			'map_meta_cap',
			static function ( $caps, $cap, $user_id, $args ) use ( $admin_id ) {
				if ( 'edit_user' === $cap && isset( $args[0] ) && (int) $args[0] === $admin_id ) {
					return array( 'do_not_allow' );
				}

				return $caps;
			},
			10,
			4
		);
	}

	protected function tearDown(): void {
		remove_all_filters( 'map_meta_cap' );
		remove_role( 'jfb_test_manager' );
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	/**
	 * @return bool Whether the action finished without an error.
	 */
	private function submit( int $as_user, int $target, string $email ): bool {
		wp_set_current_user( $as_user );

		jet_fb_action_handler()->response_data = array();

		$blocks = '<!-- wp:jet-forms/hidden-field {"name":"uid"} /-->'
			. '<!-- wp:jet-forms/text-field {"name":"mail"} /-->';

		jet_fb_context()->set_parsers( parse_blocks( $blocks ) );
		jet_fb_context()->set_request( array( 'uid' => (string) $target, 'mail' => $email ) );
		jet_fb_context()->apply_request();

		$action      = new Update_User_Action();
		$action->_id = 9300;

		jet_fb_action_handler()->save_action( $action, array() );

		$action->settings = array(
			'fields_map' => array(
				'uid'  => 'ID',
				'mail' => 'email',
			),
		);

		try {
			jet_fb_action_handler()->process_single_action( $action );
		} catch ( \Throwable $exception ) {
			return false;
		}

		return true;
	}

	private function email( int $user_id ): string {
		clean_user_cache( $user_id );

		return get_userdata( $user_id )->user_email;
	}

	public function testCannotEditUserTheRoleMayNotEdit(): void {
		$this->assertFalse( $this->submit( $this->manager_id, $this->admin_id, 'taken@example.test' ) );
		$this->assertSame( 'admin@example.test', $this->email( $this->admin_id ) );
	}

	/**
	 * Backward compatibility: the same role edits users it may edit.
	 */
	public function testEditsAllowedUser(): void {
		$this->assertTrue( $this->submit( $this->manager_id, $this->customer_id, 'customer-new@example.test' ) );
		$this->assertSame( 'customer-new@example.test', $this->email( $this->customer_id ) );
	}

	/**
	 * Backward compatibility: a user edits himself.
	 */
	public function testEditsSelf(): void {
		$this->assertTrue( $this->submit( $this->customer_id, $this->customer_id, 'self@example.test' ) );
		$this->assertSame( 'self@example.test', $this->email( $this->customer_id ) );
	}

	/**
	 * Backward compatibility: an administrator edits another user.
	 */
	public function testAdministratorEditsOtherUser(): void {
		$this->assertTrue( $this->submit( $this->admin_id, $this->manager_id, 'manager-new@example.test' ) );
		$this->assertSame( 'manager-new@example.test', $this->email( $this->manager_id ) );
	}

	/**
	 * A user without user capabilities cannot edit another user.
	 */
	public function testSubscriberCannotEditOtherUser(): void {
		$this->assertFalse( $this->submit( $this->customer_id, $this->manager_id, 'x@example.test' ) );
		$this->assertSame( 'manager@example.test', $this->email( $this->manager_id ) );
	}
}
