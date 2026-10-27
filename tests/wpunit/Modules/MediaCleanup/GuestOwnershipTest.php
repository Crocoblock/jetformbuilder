<?php

namespace JFB_Tests\Wpunit\Modules\MediaCleanup;

use JFB_Modules\Media_Cleanup\Module;

class GuestOwnershipTest extends \Codeception\TestCase\WPTestCase {

	private $attachment_id;
	private $post_id;
	private $subscriber_id;

	protected function setUp(): void {
		parent::setUp();
		$this->subscriber_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$this->post_id = self::factory()->post->create( array( 'post_author' => $this->subscriber_id ) );
		$this->attachment_id = self::factory()->post->create( array( 'post_type' => 'attachment', 'post_author' => 0 ) );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_form', 1 );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user', 0 );
	}

	protected function tearDown(): void {
		wp_set_current_user( 0 );
		parent::tearDown();
	}

	public function testPostOwnerCannotDeleteInjectedGuestAttachment() {
		wp_set_current_user( $this->subscriber_id );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
		Module::delete_attachments( array( $this->attachment_id ), $this->post_id );
		$this->assertNotNull( get_post( $this->attachment_id ) );
	}

	public function testAdministratorCanDeleteButCannotClaimWithoutContext() {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
		$this->assertTrue( current_user_can( 'delete_post', $this->attachment_id ) );
		$this->assertTrue( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id ) );
		Module::delete_attachments( array( $this->attachment_id ), $this->post_id );
		$this->assertNull( get_post( $this->attachment_id ) );
	}

	public function testAnonymousVisitorDoesNotOwnGuestUploads() {
		wp_set_current_user( 0 );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id ) );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
	}
}
