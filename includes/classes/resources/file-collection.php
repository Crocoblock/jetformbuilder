<?php


namespace Jet_Form_Builder\Classes\Resources;

use Jet_Form_Builder\Classes\Arrayable\Collection;

class File_Collection extends Collection implements Media_Block_Value {

	public function push( array $file ): bool {
		try {
			$file = new File( $file );
		} catch ( Sanitize_File_Exception $exception ) {
			return false;
		}
		$this->add( $file );

		return true;
	}

	public function push_files( array $files ): File_Collection {
		foreach ( $files as $file ) {
			$this->push( $file );
		}

		return $this;
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
		$urls = array();

		foreach ( $this as $file ) {
			$urls[] = $file->get_attachment_url();
		}

		return implode( ',', $urls );
	}

	/**
	 * @return array
	 */
	public function get_attachment_both(): array {
		return array();
	}
}
