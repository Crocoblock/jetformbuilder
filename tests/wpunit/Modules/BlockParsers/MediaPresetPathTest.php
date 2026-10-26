<?php

namespace JFB_Tests\Wpunit\Modules\BlockParsers;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Tools;
use Jet_Form_Builder\Classes\Resources\Uploaded_File;

class MediaPresetPathTest extends \Codeception\TestCase\WPTestCase {

	private $attachment_id;
	private $path;
	private $other_path;
	private $file;

	protected function setUp(): void {
		parent::setUp();
		$upload = wp_upload_bits( 'preset-path.txt', null, 'first file' );
		$this->path = $upload['file'];
		$other = wp_upload_bits( 'other-preset-path.txt', null, 'second file' );
		$this->other_path = $other['file'];
		$this->attachment_id = self::factory()->post->create( array( 'post_type' => 'attachment' ) );
		update_attached_file( $this->attachment_id, $this->path );
		$this->file = new File(
			array(
				'error' => 0,
				'size' => 10,
				'name' => basename( $this->path ),
				'tmp_name' => $this->path,
				'type' => 'text/plain',
			)
		);
	}

	protected function tearDown(): void {
		wp_delete_attachment( $this->attachment_id, true );
		wp_delete_file( $this->other_path );
		parent::tearDown();
	}

	private function preset( array $extra = array() ): Uploaded_File {
		return ( new Uploaded_File() )->set_from_array(
			array_merge( array( 'id' => $this->attachment_id ), $extra )
		);
	}

	public function testIdOnlyResolvesStoredPath() {
		$preset = $this->preset();
		$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
	}

	public function testMatchingAndNormalizedPathsAreAccepted() {
		foreach ( array( $this->path, dirname( $this->path ) . '/./' . basename( $this->path ) ) as $path ) {
			$preset = $this->preset( array( 'file' => $path ) );
			$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
		}
	}

	public function testAnotherFilesPathCannotBePairedWithAllowedId() {
		$this->file->set_name( basename( $this->other_path ) );
		$preset = $this->preset( array( 'file' => $this->other_path ) );
		$this->assertFalse( File_Tools::get_uploaded( $this->file, $preset ) );
	}

	public function testRejectedPathsCannotFallBackToId() {
		foreach ( array( '', ABSPATH . 'wp-load.php', $this->path . '.missing' ) as $path ) {
			$preset = $this->preset( array( 'file' => $path ) );
			$this->assertFalse( File_Tools::get_uploaded( $this->file, $preset ) );
		}
	}

	public function testInvalidAttachmentIdIsRejected() {
		foreach ( array( array( 'id' => self::factory()->post->create(), 'file' => $this->path ), array( 'id' => PHP_INT_MAX, 'file' => $this->path ) ) as $data ) {
			$preset = ( new Uploaded_File() )->set_from_array( $data );
			$this->assertFalse( File_Tools::get_uploaded( $this->file, $preset ) );
		}
	}

	public function testPathAndUrlPresetsWithoutIdKeepExistingBehavior() {
		foreach ( array( array( 'file' => $this->path ), array( 'id' => 0, 'file' => $this->path ), array( 'url' => wp_get_attachment_url( $this->attachment_id ) ) ) as $data ) {
			$preset = ( new Uploaded_File() )->set_from_array( $data );
			$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
		}
	}

	public function testNullPathStillMeansNoNewPath() {
		$preset = $this->preset( array( 'file' => null ) );
		$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
		$preset->set_from_array( array( 'file' => $this->path ) );
		$preset->set_from_array( array( 'file' => null ) );
		$this->assertSame( $this->path, $preset->get_file() );
		$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
	}

	public function testStringablePathStillWorks() {
		$path = new class( $this->path ) {
			private $path;
			public function __construct( string $path ) {
				$this->path = $path;
			}
			public function __toString(): string {
				return $this->path;
			}
		};
		$preset = $this->preset( array( 'file' => $path ) );
		$this->assertSame( $this->path, $preset->get_file() );
		$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
	}

	public function testRejectedUpdatePreservesOldPathButPreventsAttachmentReuse() {
		$preset = $this->preset( array( 'file' => $this->path ) );
		$preset->set_from_array( array( 'file' => $this->path . '.missing' ) );
		$this->assertSame( $this->path, $preset->get_file() );
		$this->assertSame( realpath( $this->path ), $preset->get_attachment_file() );
		$this->assertFalse( File_Tools::get_uploaded( $this->file, $preset ) );
		$preset->set_from_array( array( 'file' => null ) );
		$this->assertFalse( File_Tools::get_uploaded( $this->file, $preset ) );
		$preset->set_from_array( array( 'file' => $this->path ) );
		$this->assertSame( $preset, File_Tools::get_uploaded( $this->file, $preset ) );
	}

	public function testMissingStoredFileIsRejected() {
		wp_delete_file( $this->path );
		$this->assertFalse( File_Tools::get_uploaded( $this->file, $this->preset() ) );
	}

	public function testListSkipsMismatchedPresetAndKeepsValidOne() {
		$bad = $this->preset( array( 'file' => $this->other_path ) );
		$good = $this->preset();
		$this->assertSame( $good, File_Tools::get_uploaded( $this->file, array( $bad, $good ) ) );
	}

	public function testSameBasenameInAnotherDirectoryIsNotEnough() {
		$directory = dirname( $this->path ) . '/preset-path-test-' . $this->attachment_id;
		wp_mkdir_p( $directory );
		$other = $directory . '/' . basename( $this->path );
		copy( $this->other_path, $other );
		try {
			$preset = $this->preset( array( 'file' => $other ) );
			$this->assertFalse( File_Tools::get_uploaded( $this->file, $preset ) );
		} finally {
			wp_delete_file( $other );
			rmdir( $directory );
		}
	}
}
