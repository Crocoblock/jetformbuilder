<?php


namespace Jet_Form_Builder\Classes\Resources;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;

class File implements Arrayable, Media_Block_Value {

	protected $error    = 0;
	protected $size     = 0;
	protected $name     = '';
	protected $tmp_name = '';
	protected $type     = '';

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
	 * @return string
	 */
	public function get_type(): string {
		return $this->type;
	}

	/**
	 * @return int
	 */
	public function get_error(): int {
		return $this->error;
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return $this->name;
	}

	/**
	 * @return int
	 */
	public function get_size(): int {
		return $this->size;
	}

	/**
	 * @return string
	 */
	public function get_tmp_name(): string {
		return $this->tmp_name;
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

		if ( $proper_filename ) {
			$this->name = $proper_filename;
		}

		if ( ( ! $type || ! $ext ) && ! current_user_can( 'unfiltered_upload' ) ) {
			throw new Sanitize_File_Exception( 'Incorrect extension or mime type' );
		}

		$this->type = $type;
	}

	/**
	 * @return array
	 */
	public function to_array(): array {
		return array(
			'name'     => $this->get_name(),
			'type'     => $this->get_type(),
			'size'     => $this->get_size(),
			'error'    => $this->get_error(),
			'tmp_name' => $this->get_tmp_name(),
		);
	}

	/*
	 * Realisation of
	 * \Jet_Form_Builder\Classes\Resources\Media_Block_Value
	 */

	/**
	 * @return string
	 */
	public function get_attachment_id(): string {
		return '';
	}

	/**
	 * @return string
	 */
	public function get_attachment_url(): string {
		return $this->get_tmp_name();
	}

	/**
	 * @return array
	 */
	public function get_attachment_both(): array {
		return array();
	}
}
