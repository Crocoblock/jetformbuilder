<?php

namespace JFB_Tests\Wpunit\Modules\BlockParsers;

use JFB_Modules\Block_Parsers\File_Uploader;
use JFB_Modules\Media_Cleanup\Module as Media_Cleanup;

/**
 * The Media field's "user access" capability must also apply to submissions without a file.
 * A user who lacks it must leave the field's stored value untouched (never emptied, which
 * would let "Delete removed attachments" erase existing files).
 */
class MediaFieldCapabilityTest extends \Codeception\TestCase\WPTestCase {

	private $subscriber_id;
	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->subscriber_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$this->admin_id      = self::factory()->user->create( array( 'role' => 'administrator' ) );
	}

	protected function tearDown(): void {
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function media_field( array $attrs = array() ): array {
		return array(
			'blockName' => 'jet-forms/media-field',
			'attrs'     => array_merge(
				array(
					'insert_attachment' => true,
					'value_format'      => 'ids',
					'allowed_user_cap'  => 'upload_files',
				),
				$attrs
			),
		);
	}

	public function testIsPermittedHonoursCapability() {
		$this->assertFalse( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'upload_files' ) ) );
		$this->assertTrue( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'any_user' ) ) );
		$this->assertFalse( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'all' ) ) ); // 'all' still requires a logged-in user

		wp_set_current_user( $this->subscriber_id );
		$this->assertTrue( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'all' ) ) );

		$this->assertFalse( File_Uploader::is_permitted( array() ) ); // defaults to upload_files
		$this->assertFalse( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'upload_files' ) ) );
		$this->assertTrue( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'any_user' ) ) );

		wp_set_current_user( $this->admin_id );

		$this->assertTrue( File_Uploader::is_permitted( array( 'allowed_user_cap' => 'upload_files' ) ) );
	}

	public function testFieldIsLockedForUserWithoutCapability() {
		foreach ( array( 'id', 'ids', 'both' ) as $format ) {
			$this->assertTrue( Media_Cleanup::is_media_field_locked( $this->media_field( array( 'value_format' => $format ) ) ), $format ); // guest

			wp_set_current_user( $this->subscriber_id );
			$this->assertTrue( Media_Cleanup::is_media_field_locked( $this->media_field( array( 'value_format' => $format ) ) ), $format );
			wp_set_current_user( 0 );
		}
	}

	public function testFieldIsOpenForUserWithCapability() {
		wp_set_current_user( $this->admin_id );

		$this->assertFalse( Media_Cleanup::is_media_field_locked( $this->media_field() ) );
	}

	public function testOpenFieldIsNeverLocked() {
		wp_set_current_user( $this->subscriber_id );

		$this->assertFalse( Media_Cleanup::is_media_field_locked( $this->media_field( array( 'allowed_user_cap' => 'any_user' ) ) ) );
		$this->assertFalse( Media_Cleanup::is_media_field_locked( $this->media_field( array( 'allowed_user_cap' => 'all' ) ) ) );
	}

	public function testLockAppliesToEveryValueFormat() {
		wp_set_current_user( $this->subscriber_id );

		$this->assertTrue( Media_Cleanup::is_media_field_locked( $this->media_field( array( 'value_format' => 'url' ) ) ) );
		$this->assertTrue( Media_Cleanup::is_media_field_locked( $this->media_field( array( 'insert_attachment' => false ) ) ) );
		$this->assertTrue( Media_Cleanup::is_media_field_locked( array( 'blockName' => 'jet-forms/media-field', 'attrs' => array() ) ) ); // default cap
	}

	public function testOtherBlocksAreNeverLocked() {
		wp_set_current_user( $this->subscriber_id );

		$this->assertFalse( Media_Cleanup::is_media_field_locked( array( 'blockName' => 'jet-forms/text-field', 'attrs' => array() ) ) );
		$this->assertFalse( Media_Cleanup::is_media_field_locked( false ) );
	}
}
