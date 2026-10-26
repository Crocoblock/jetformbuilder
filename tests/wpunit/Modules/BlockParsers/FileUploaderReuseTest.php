<?php

namespace JFB_Tests\Wpunit\Modules\BlockParsers;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\Uploaded_File;
use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Block_Parsers\Fields\Media_Field_Parser;
use JFB_Modules\Block_Parsers\File_Uploader;

class FileUploaderReuseTest extends \Codeception\TestCase\WPTestCase {

	private $user_id;
	private $post_id;
	private $attachment_id;
	private $form_id;
	private $file;
	private $path;

	protected function setUp(): void {
		parent::setUp();
		$this->user_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		wp_set_current_user( $this->user_id );
		$this->post_id = self::factory()->post->create( array( 'post_author' => $this->user_id ) );
		$this->form_id = self::factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		jet_fb_action_handler()->set_form_id( $this->form_id );
		$upload              = wp_upload_bits( 'reuse-test.txt', null, 'test' );
		$this->path          = $upload['file'];
		$this->attachment_id = self::factory()->post->create( array( 'post_type' => 'attachment', 'post_author' => $this->user_id ) );
		update_attached_file( $this->attachment_id, $this->path );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_form', 1 );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user', $this->user_id );
		$this->file = new File(
			array(
				'error'    => 0,
				'size'     => 4,
				'name'     => basename( $this->path ),
				'tmp_name' => $this->path,
				'type'     => 'text/plain',
			)
		);
		$this->save_map( array( 'pid' => 'ID', 'doc' => 'document' ) );
	}

	protected function tearDown(): void {
		wp_delete_attachment( $this->attachment_id, true );
		wp_set_current_user( 0 );
		jet_fb_action_handler()->set_form_id( 0 );
		parent::tearDown();
	}

	private function save_map( array $map ): void {
		update_post_meta(
			$this->form_id,
			'_jf_actions',
			wp_slash(
				wp_json_encode(
					array(
						array(
							'id'       => 1,
							'type'     => 'insert_post',
							'settings' => array( 'insert_post' => array( 'fields_map' => $map ) ),
						)
					)
				)
			)
		);
	}

	private function find_reusable() {
		$context = new Parser_Context();
		$context->set_request( array( 'pid' => $this->post_id ) );
		$parser = new Media_Field_Parser();
		$parser->set_name( 'doc' );
		$parser->set_context( $context );
		$parser->set_settings( array( 'insert_attachment' => true, 'max_files' => 1 ) );
		$parser->set_value( wp_json_encode( array( 'id' => $this->attachment_id ) ) );
		$parser->set_file( $this->file );
		$uploader = new class() extends File_Uploader {
			public function find_reusable( File $file ) {
				return $this->get_uploaded( $file );
			}
		};
		$uploader->set_context( $parser );
		return $uploader->find_reusable( $this->file );
	}

	public function testOwnStoredAttachmentCanBeReusedInEverySavedShape() {
		foreach ( array( $this->attachment_id, (string) $this->attachment_id, array( $this->attachment_id ), array( 'id' => $this->attachment_id, 'url' => wp_get_attachment_url( $this->attachment_id ) ), wp_get_attachment_url( $this->attachment_id ) ) as $value ) {
			update_post_meta( $this->post_id, 'document', $value );
			$reusable = $this->find_reusable();
			$this->assertInstanceOf( Uploaded_File::class, $reusable );
			$this->assertSame( $this->attachment_id, (int) $reusable->get_attachment_id() );
		}
	}

	public function testOwnAttachmentFromAnotherFieldCannotBeReused() {
		update_post_meta( $this->post_id, 'other_document', $this->attachment_id );
		$this->assertFalse( $this->find_reusable() );
	}

	public function testInjectedForeignAttachmentCannotBeReusedEvenWhenStored() {
		update_post_meta( $this->post_id, 'document', $this->attachment_id );
		$other = self::factory()->user->create( array( 'role' => 'administrator' ) );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user', $other );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user_heuristic', 1 );
		$this->assertFalse( $this->find_reusable() );
	}

	public function testAnonymousAndUnknownUploadersCannotBeReused() {
		update_post_meta( $this->post_id, 'document', $this->attachment_id );
		update_post_meta( $this->attachment_id, '_jfb_uploaded_by_user', 0 );
		$this->assertFalse( $this->find_reusable() );
		delete_post_meta( $this->attachment_id, '_jfb_uploaded_by_user' );
		$this->assertFalse( $this->find_reusable() );
	}

	public function testUnauthorizedPostCannotSupplyStoredValue() {
		update_post_meta( $this->post_id, 'document', $this->attachment_id );
		wp_update_post( array( 'ID' => $this->post_id, 'post_author' => self::factory()->user->create() ) );
		$this->assertFalse( $this->find_reusable() );
	}

	public function testCreateFormCannotClaimAnExistingAttachment() {
		update_post_meta( $this->post_id, 'document', $this->attachment_id );
		$this->save_map( array( 'doc' => 'document' ) );
		$this->assertFalse( $this->find_reusable() );
	}

	public function testNameMismatchStillUploadsANewFile() {
		update_post_meta( $this->post_id, 'document', $this->attachment_id );
		$this->file->set_name( 'different.txt' );
		$this->assertFalse( $this->find_reusable() );
	}
}
