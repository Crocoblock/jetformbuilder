<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Classes\Resources\Uploaded_Collection;
use Jet_Form_Builder\Classes\Resources\Uploaded_File;
use Jet_Form_Builder\Classes\Resources\Upload_Exception;
use Jet_Form_Builder\Classes\Resources\Upload_Permission_Exception;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;

class File_Uploader {

	protected $settings = array();

	/** @var File|File_Collection */
	protected $file;

	/** @var Uploaded_File|Uploaded_File[] */
	protected $preset;

	protected $max_files;
	protected $max_size;
	protected $allowed_user_cap;
	protected $allowed_mimes;
	protected $insert_attachment;


	/**
	 * @return Media_Block_Value
	 * @throws Upload_Exception
	 * @throws Upload_Permission_Exception
	 */
	public function upload() {
		$this->set_vars();
		$this->sanitize();

		return $this->upload_files();
	}

	protected function set_vars() {
		$this->max_files         = $this->get_max_files();
		$this->max_size          = $this->get_max_size();
		$this->allowed_user_cap  = $this->get_allowed_user_cap();
		$this->insert_attachment = $this->is_insert_attachment();
		$this->allowed_mimes     = $this->get_mime_types();
	}

	/**
	 * @throws Upload_Permission_Exception|Upload_Exception
	 */
	protected function sanitize() {
		try {
			$this->sanitize_permissions();
			$this->sanitize_max_files();
			$this->sanitize_files();
		} catch ( Skip_Exception $exception ) {
			return;
		}
	}

	/**
	 * @return Media_Block_Value
	 * @throws Upload_Exception
	 */
	protected function upload_files() {
		if ( $this->preset instanceof Uploaded_File ) {
			return $this->preset;
		}
		if ( $this->file instanceof File ) {
			return $this->upload_file( $this->file );
		}

		$uploaded = array();

		/** @var File $file */
		foreach ( $this->file as $file ) {
			try {
				$uploaded[] = $this->upload_file( $file );
			} catch ( Upload_Exception $exception ) {
				continue;
			}
		}

		return new Uploaded_Collection( $uploaded );
	}

	/**
	 * @param File $file
	 *
	 * @return Uploaded_File
	 * @throws Upload_Exception
	 */
	protected function upload_file( File $file ): Uploaded_File {
		$uploaded = new Uploaded_File();
		$uploaded->upload( $file );

		if ( ! $this->insert_attachment ) {
			return $uploaded;
		}

		$uploaded->add_attachment();

		return $uploaded;
	}

	/**
	 * @throws Upload_Permission_Exception
	 */
	protected function sanitize_permissions() {
		$cap = ! empty( $this->settings['allowed_user_cap'] ) ? $this->settings['allowed_user_cap'] : 'upload_files';

		if ( 'any_user' !== $cap && ! is_user_logged_in() ) {
			throw new Upload_Permission_Exception(
				__( 'You are not allowed to upload files', 'jet-form-builder' )
			);
		}

		if ( ! in_array( $cap, array( 'all', 'any_user' ), true ) && ! current_user_can( $cap ) ) {
			throw new Upload_Permission_Exception(
				__( 'You are not allowed to upload files', 'jet-form-builder' )
			);
		}
	}

	/**
	 * @throws Upload_Exception
	 */
	protected function sanitize_max_files() {
		if ( $this->count_files() > $this->max_files ) {
			throw new Upload_Exception( 'upload_max_files' );
		}
	}

	/**
	 * @throws Upload_Exception
	 */
	protected function sanitize_files() {
		if ( $this->file instanceof File ) {
			$this->sanitize_file( $this->file );

			return;
		}

		if ( ! ( $this->file instanceof File_Collection ) ) {
			return;
		}

		/** @var File $file */
		foreach ( $this->file as $file ) {
			$this->sanitize_file( $file );
		}
	}

	/**
	 * @param File $file
	 *
	 * @throws Upload_Exception
	 */
	protected function sanitize_file( File $file ) {
		if ( ! $file->get_size() > $this->max_size ) {
			throw new Upload_Exception( 'upload_max_size' );
		}

		if ( ! in_array( $file->get_type(), $this->allowed_mimes, true ) ) {
			throw new Upload_Exception( 'upload_mime_types' );
		}
	}

	protected function get_max_size(): int {
		$max_size       = wp_max_upload_size();
		$field_max_size = $max_size;

		if ( ! empty( $this->settings['max_size'] ) ) {

			$field_max_size = intval( floatval( $this->settings['max_size'] ) * MB_IN_BYTES );

			if ( $field_max_size > $max_size ) {
				$field_max_size = $max_size;
			}
		}

		return $field_max_size;
	}

	protected function count_files(): int {
		$counter = 0;
		if ( $this->file instanceof File ) {
			++$counter;
		} elseif ( $this->file instanceof File_Collection ) {
			$counter += count( $this->file );
		}

		if ( $this->preset instanceof Uploaded_File ) {
			++$counter;
		} elseif ( is_array( $this->preset ) ) {
			$counter += count( $this->preset );
		}

		return $counter;
	}

	protected function get_max_files(): int {
		$files = absint( $this->settings['max_files'] ?? 1 );

		return empty( $files ) ? 1 : $files;
	}

	protected function get_mime_types(): array {
		return $this->settings['allowed_mimes'] ?? array();
	}

	/**
	 * @return bool
	 */
	protected function is_insert_attachment(): bool {
		// Prevent non logged-in users insert attachment
		if ( ! is_user_logged_in() ) {
			return false;
		}

		return ! empty( $this->settings['insert_attachment'] );
	}

	protected function get_allowed_user_cap(): string {
		$capability = $this->settings['allowed_user_cap'] ?? 'upload_files';

		return empty( $capability ) ? 'upload_files' : $capability;
	}

	protected function is_must_be_single(): bool {
		return 1 === $this->max_files;
	}

	/**
	 * @param File|File_Collection $file
	 *
	 * @return File_Uploader
	 * @throws Upload_Exception
	 */
	public function set_file( $file ): File_Uploader {
		$this->file = $file;

		return $this;
	}

	public function set_preset( $preset ): File_Uploader {
		if ( empty( $preset ) || ! is_array( $preset ) ) {
			return $this;
		}

		if ( $this->is_must_be_single() ) {
			$uploaded     = new Uploaded_File();
			$this->preset = $uploaded->set_from_array( isset( $preset[0] ) ? $preset[0] : $preset );

			return $this;
		}

		$files = isset( $preset[0] ) ? $preset : array( $preset );

		foreach ( $files as $index => $file ) {
			$files[ $index ] = ( new Uploaded_File() )->set_from_array( $file );
		}

		$this->preset = $files;

		return $this;
	}

	/**
	 * @throws Skip_Exception
	 */
	protected function is_file_valid() {
		if ( ! ( $this->file instanceof File ) && ! ( $this->file instanceof File_Collection ) ) {
			throw new Skip_Exception( 'internal_error' );
		}
	}

	/**
	 * @param array $settings
	 *
	 * @return File_Uploader
	 */
	public function set_settings( array $settings ): File_Uploader {
		$this->settings = $settings;

		return $this;
	}


}
