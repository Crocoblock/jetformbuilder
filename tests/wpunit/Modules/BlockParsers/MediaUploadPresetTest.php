<?php

namespace JFB_Tests\Wpunit\Modules\BlockParsers;

use Jet_Form_Builder\Classes\Resources\File;
use JFB_Modules\Block_Parsers\Fields\Media_Field_Parser;

class MediaUploadPresetTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		wp_set_current_user( 0 );
		parent::tearDown();
	}

	public function testUploadBranchFiltersPresetsForEveryOutputFormat() {
		$user_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$other   = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user_id );
		$own     = $this->attachment( $user_id );
		$foreign = $this->attachment( $other );
		$guest   = $this->attachment( 0 );
		update_post_meta( $foreign, '_jfb_uploaded_by_user_heuristic', 1 );

		$own_preset = array( 'id' => $own, 'url' => 'https://example.org/own.pdf' );
		$path_only  = array( 'url' => 'https://example.org/upload.pdf' );
		$cases      = array(
			array( array( 'id' => $foreign ), array() ),
			array( array( 'id' => $guest ), array() ),
			array( array( 'id' => array( $own ) ), array() ),
			array( $own_preset, $own_preset ),
			array( $path_only, $path_only ),
			array( array( array( 'id' => $foreign ), $own_preset ), array( $own_preset ) ),
		);

		foreach ( array( 'id', 'ids', 'both', 'url' ) as $format ) {
			foreach ( $cases as $case ) {
				$parser = new Media_Field_Parser();
				$parser->set_settings(
					array(
						'insert_attachment' => true,
						'value_format'      => $format,
						// Stop before disk writes, after the upload preset has been parsed.
						'allowed_user_cap'  => 'upload_files',
						'max_files'         => 2,
					)
				);
				$parser->set_value( wp_json_encode( $case[0] ) );
				$parser->set_file(
					new File(
						array(
							'error'    => 0,
							'size'     => 1,
							'name'     => 'document.pdf',
							'tmp_name' => '/tmp/document.pdf',
							'type'     => 'application/pdf',
						)
					)
				);
				$this->assertFalse( $parser->get_response() );
				$this->assertSame( $case[1], json_decode( $parser->get_value(), true ), $format );
			}
		}
	}

	private function attachment( int $user_id ): int {
		$id = self::factory()->post->create( array( 'post_type' => 'attachment' ) );
		update_post_meta( $id, '_jfb_uploaded_by_form', 1 );
		update_post_meta( $id, '_jfb_uploaded_by_user', $user_id );
		return $id;
	}
}
