<?php


namespace Jet_Form_Builder\Classes\Resources;

class File_Collection implements \Iterator {

	protected $position = 0;
	protected $files    = array();

	public function __construct( array $files ) {
		$this->add_files( $files );
	}

	public function add_file( array $file ): bool {
		try {
			$file = new File( $file );
		} catch ( Sanitize_File_Exception $exception ) {
			return false;
		}
		$this->files[] = $file;

		return true;
	}

	public function add_files( array $files ): File_Collection {
		foreach ( $files as $file ) {
			$this->add_file( $file );
		}

		return $this;
	}

	/**
	 * @return mixed
	 */
	public function current() {
		return $this->files[ $this->position ];
	}

	/**
	 *
	 */
	public function next() {
		++ $this->position;
	}

	/**
	 * @return bool|float|int|string|null
	 */
	public function key() {
		return $this->position;
	}

	/**
	 * @return bool
	 */
	public function valid() {
		return isset( $this->files[ $this->position ] );
	}

	public function rewind() {
		$this->position = 0;
	}
}
