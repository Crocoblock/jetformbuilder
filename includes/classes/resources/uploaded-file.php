<?php


namespace Jet_Form_Builder\Classes\Resources;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Uploaded_File implements Media_Block_Value, Uploaded_File_Path {

	protected $file          = '';
	protected $url           = '';
	protected $type          = '';
	protected $attachment_id = '';

	/**
	 * @param File $file
	 *
	 * @throws Upload_Exception
	 */
	public function upload( File $file ) {
		if ( ! function_exists( 'wp_handle_upload' ) ) {
			include_once ABSPATH . 'wp-admin/includes/file.php';
			include_once ABSPATH . 'wp-admin/includes/media.php';
		}

		add_filter( 'upload_dir', array( Upload_Dir::class, 'apply_upload_dir' ) );

		$file_array = $file->to_array();
		$this->upload_file( $file_array );

		remove_filter( 'upload_dir', array( Upload_Dir::class, 'apply_upload_dir' ) );
	}

	/**
	 * @param array $file
	 *
	 * @throws Upload_Exception
	 */
	protected function upload_file( array $file ) {
		$upload = wp_handle_upload(
			$file,
			array(
				'test_form' => false,
			)
		);

		if ( ! empty( $upload['error'] ) ) {
			throw new Upload_Exception( esc_html( $upload['error'] ) );
		}

		$this->set_from_array( $upload );
	}

	/**
	 * @throws Upload_Exception
	 */
	public function add_attachment() {
		if ( ! function_exists( 'wp_generate_attachment_metadata' ) ) {
			require_once ABSPATH . 'wp-admin/includes/image.php';
		}

		if ( ! function_exists( 'wp_read_video_metadata' ) ) {
			require_once ABSPATH . 'wp-admin/includes/media.php';
		}

		$attachment = wp_insert_attachment(
			array(
				'guid'           => $this->get_url(),
				'post_mime_type' => $this->get_type(),
				'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $this->get_file() ) ),
				'post_content'   => '',
				'post_status'    => 'publish',
			),
			$this->get_file(),
			0,
			true
		);

		if ( is_wp_error( $attachment ) ) {
			throw new Upload_Exception( esc_html( $attachment->get_error_message() ) );
		}

		wp_update_attachment_metadata(
			$attachment,
			wp_generate_attachment_metadata( $attachment, $this->get_file() )
		);

		$this->set_attachment_id( (string) $attachment );

		// Update file url for performance plugins compatibility
		$this->set_url( wp_get_attachment_url( $attachment ) );
	}

	public function set_from_array( array $upload ): Uploaded_File {
		if ( isset( $upload['file'] ) ) {
			$this->file = $upload['file'];
		}
		if ( isset( $upload['url'] ) ) {
			$this->url = $upload['url'];
		}
		if ( isset( $upload['type'] ) ) {
			$this->type = $upload['type'];
		}
		if ( isset( $upload['id'] ) ) {

			$this->set_attachment_id( (string) $upload['id'] );
		}

		return $this;
	}

	public function set_attachment_id( string $attachment_id ): Uploaded_File {
		$this->attachment_id = $attachment_id;

		return $this;
	}

	/**
	 * @return string
	 */
	public function get_type(): string {
		return $this->type;
	}

	/**
	 * @return string
	 */
	public function get_file(): string {
		return $this->file;
	}

	/**
	 * @return string
	 */
	public function get_url(): string {
		return $this->url;
	}

	/*
	 * Realisation of
	 * \Jet_Form_Builder\Classes\Resources\Media_Block_Value
	 */

	/**
	 * @return string
	 */
	public function get_attachment_id(): string {
		return $this->attachment_id;
	}


	/**
	 * @return string
	 */
	public function get_attachment_url(): string {
		return $this->get_url();
	}

	/**
	 * @return array
	 */
	public function get_attachment_both(): array {
		return array(
			'id'  => $this->get_attachment_id(),
			'url' => $this->get_attachment_url(),
		);
	}

	public function get_attachment_ids(): array {
		return array( $this->get_attachment_id() );
	}

	/*
	 * Realisation of
	 * \Jet_Form_Builder\Classes\Resources\Uploaded_File_Path
	 */

	/**
	 * @return string
	 */
	public function get_attachment_file(): string {
		$file = $this->get_file();

		if ( $file ) {
			return $file;
		}

		$id  = $this->get_attachment_id();
		$url = $this->get_attachment_url();

		if ( ( empty( $id ) || ! is_numeric( $id ) ) && ! empty( $url ) ) {
			$id = attachment_url_to_postid( $url );
		}

		$file = get_attached_file( $id );

		return is_string( $file ) ? $file : '';
	}

	/**
	 * @param string $url
	 */
	public function set_url( string $url ) {
		$this->url = $url;
	}
}
