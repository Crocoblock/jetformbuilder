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

		/**
		 * Records who actually uploaded this attachment, so a later request
		 * can't take credit for someone else's upload just because it also
		 * carries the `_jfb_uploaded_by_form` marker.
		 *
		 * A target post ID is deliberately NOT recorded here: at upload time
		 * (field/request parsing) no post has been authorized yet - the Insert
		 * Post action's `ID` property (which would map to a real post) is only
		 * resolved and capability-checked later, when that action itself runs.
		 * Binding to a not-yet-authorized `pid` value from the same request
		 * would just persist the attacker-controlled value the field-level
		 * check exists to distrust.
		 *
		 * Written BEFORE `_jfb_uploaded_by_form` (below), not after: the latter
		 * is the trust gate `Media_Cleanup::is_owned_by_current_actor()` reads
		 * to decide an attachment is plugin-owned at all. If this request were
		 * interrupted between the two writes, an attachment left with the
		 * trust gate set but no uploader identity would fall into that check's
		 * unconditional-allow "legacy, predates the marker system" branch -
		 * recreating the same unrestricted-trust primitive this fix exists to
		 * close. Writing the identity first means an interruption instead
		 * leaves the attachment with neither marker: not yet plugin-owned by
		 * anyone, exactly like an ordinary, unrelated attachment.
		 *
		 * Order alone is not enough, though: `update_post_meta()` is not
		 * guaranteed to persist just because it was called - a plugin hooked
		 * on the `update_post_meta`/`add_post_meta` filters (WP core lets any
		 * of them short-circuit the write by returning non-null) could silently
		 * swallow the identity write while the second call still succeeds. The
		 * explicit `metadata_exists()` check below confirms the identity is
		 * actually there before the trust gate is published; if it is not,
		 * this attachment is left exactly as an ordinary, non-plugin-owned one
		 * (no `_jfb_uploaded_by_form` either), rather than risk a trust gate
		 * with nothing behind it.
		 */
		update_post_meta( $attachment, '_jfb_uploaded_by_user', get_current_user_id() );

		if ( metadata_exists( 'post', $attachment, '_jfb_uploaded_by_user' ) ) {
			update_post_meta( $attachment, '_jfb_uploaded_by_form', 1 );
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
			$file = wp_normalize_path( (string) $upload['file'] );

			// Validate the path against uploads, but keep the original non-realpath
			// value so WordPress can correctly relativize symlinked upload paths.
			if ( '' !== self::normalize_allowed_upload_file_path( $file ) ) {
				$this->file = $file;
			}
		}
		if ( isset( $upload['url'] ) ) {
			$this->url = esc_url_raw( (string) $upload['url'] );
		}
		if ( isset( $upload['type'] ) ) {
			$this->type = sanitize_mime_type( (string) $upload['type'] );
		}
		if ( isset( $upload['id'] ) ) {

			$this->set_attachment_id( (string) absint( $upload['id'] ) );
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
			$file = self::normalize_allowed_upload_file_path( $file );
			if ( $file ) {
				return $file;
			}
		}

		$id  = $this->get_attachment_id();
		$url = $this->get_attachment_url();

		if ( ( empty( $id ) || ! is_numeric( $id ) ) && ! empty( $url ) ) {
			$id = attachment_url_to_postid( $url );
		}

		$file = get_attached_file( $id );

		if ( ! is_string( $file ) ) {
			return '';
		}

		return self::normalize_allowed_upload_file_path( $file );
	}

	/**
	 * @param string $url
	 */
	public function set_url( string $url ) {
		$this->url = esc_url_raw( $url );
	}

	/**
	 * Normalize path and allow only existing files inside wp-content uploads directory.
	 *
	 * @return string Normalized realpath to a file in uploads, or empty string.
	 */
	public static function normalize_allowed_upload_file_path( string $file ): string {
		if ( '' === $file ) {
			return '';
		}

		$path = wp_normalize_path( $file );
		$real = realpath( $path );

		if ( false === $real ) {
			return '';
		}

		$real = wp_normalize_path( $real );
		$real = untrailingslashit( $real );

		$uploads = wp_get_upload_dir();
		$base    = (string) ( $uploads['basedir'] ?? '' );

		if ( '' === $base ) {
			return '';
		}

		$base_real = realpath( $base );
		if ( false === $base_real ) {
			return '';
		}

		$base = wp_normalize_path( $base_real );
		$base = untrailingslashit( $base );

		if ( 0 === strpos( $real, $base . '/' ) && is_file( $real ) ) {
			return $real;
		}

		return '';
	}
}
