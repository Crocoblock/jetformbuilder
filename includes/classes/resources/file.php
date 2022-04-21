<?php


namespace Jet_Form_Builder\Classes\Resources;


class File {

	protected $error;
	protected $name;
	protected $size;
	protected $tmp_name;
	protected $type;

	/**
	 * File constructor.
	 *
	 * @param array $file
	 *
	 * @throws Sanitize_File_Exception
	 */
	public function __construct( array $file ) {
		$this->set_error( $file['error'] );
		$this->set_size( $file['size'] );
		$this->set_name( $file['name'] );
		$this->set_tmp_name( $file['tmp_name'] );
		$this->set_type( $file['type'] );

		$this->sanitize_filename();
	}

	/**
	 * @param mixed $error
	 *
	 * @return File
	 */
	public function set_error( $error ): File {
		$this->error = absint( $error );

		return $this;
	}

	/**
	 * @param mixed $name
	 *
	 * @return File
	 */
	public function set_name( $name ): File {
		$this->name = sanitize_file_name( $name );

		return $this;
	}

	/**
	 * @param mixed $size
	 *
	 * @return File
	 */
	public function set_size( $size ): File {
		$this->size = absint( $size );

		return $this;
	}

	/**
	 * @param mixed $tmp_name
	 *
	 * @return File
	 */
	public function set_tmp_name( $tmp_name ): File {
		$this->tmp_name = $tmp_name;

		return $this;
	}

	/**
	 * @param mixed $type
	 *
	 * @return File
	 */
	public function set_type( $type ): File {
		$this->type = sanitize_mime_type( $type );

		return $this;
	}

	/**
	 * @throws Sanitize_File_Exception
	 */
	protected function sanitize_filename() {
		require_once ABSPATH . 'wp-admin/includes/file.php';

		$validate = wp_check_filetype_and_ext( $this->tmp_name, $this->name );

		$ext             = $validate['ext'] ?? false;
		$type            = $validate['type'] ?? false;
		$proper_filename = $validate['proper_filename'] ?? false;

		if ( $proper_filename && $proper_filename !== $this->name ) {
			throw new Sanitize_File_Exception( 'Incorrect filename' );
		}

		if ( ! $ext || ! $type ) {
			throw new Sanitize_File_Exception( 'Incorrect extension or mime type' );
		}
	}

}