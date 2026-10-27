<?php

namespace JFB_Tests\Wpunit\Modules\MediaCleanup;

use JFB_Modules\Media_Cleanup\Module;

class HeuristicOwnershipTest extends \Codeception\TestCase\WPTestCase {

	private $owner_id;
	private $subscriber_id;
	private $attachment_id;
	private $post_id;

	protected function setUp(): void {
		parent::setUp();
		$this->owner_id      = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$this->subscriber_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$this->post_id       = self::factory()->post->create( array( 'post_author' => $this->subscriber_id ) );
		$this->attachment_id = self::factory()->post->create(
			array( 'post_type' => 'attachment', 'post_author' => $this->owner_id )
		);
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_form', 1 );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user', $this->owner_id );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user_heuristic', 1 );
	}

	protected function tearDown(): void {
		wp_set_current_user( 0 );
		parent::tearDown();
	}

	public function testCarrierOwnerCannotDeleteForeignHeuristicAttachment() {
		wp_set_current_user( $this->subscriber_id );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
		Module::delete_attachments( array( $this->attachment_id ), $this->post_id );
		$this->assertNotNull( get_post( $this->attachment_id ) );
	}

	public function testMatchingGuessedOwnerStillPassesWithoutDeleteCapability() {
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user', $this->subscriber_id );
		wp_set_current_user( $this->subscriber_id );
		$this->assertFalse( current_user_can( 'delete_post', $this->attachment_id ) );
		$this->assertTrue( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
		$this->assertTrue( Module::is_owned_by_current_actor( $this->attachment_id ) );
	}

	public function testDifferentAdministratorCanDeleteButCannotClaimWithoutContext() {
		$admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin_id );
		$this->assertTrue( current_user_can( 'delete_post', $this->attachment_id ) );
		$this->assertTrue( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id ) );
		Module::delete_attachments( array( $this->attachment_id ), $this->post_id );
		$this->assertNull( get_post( $this->attachment_id ) );
	}

	public function testRealUploaderBranchIsUnchanged() {
		delete_post_meta( $this->attachment_id, '_jfb_uploaded_by_user_heuristic' );
		$admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin_id );
		$this->assertTrue( current_user_can( 'delete_post', $this->attachment_id ) );
		$this->assertFalse( Module::is_owned_by_current_actor( $this->attachment_id, $this->post_id ) );
	}
}
