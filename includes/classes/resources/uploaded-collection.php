<?php


namespace Jet_Form_Builder\Classes\Resources;


class Uploaded_Collection implements Media_Block_Value {

	/** @var Uploaded_File[]  */
	protected $uploads;

	public function __construct( array $uploads ) {
		$this->uploads = $uploads;
	}

	/*
	 * Realisation of
	 * \Jet_Form_Builder\Classes\Resources\Media_Block_Value
	 */

	/**
	 * @return string
	 */
	public function get_attachment_id(): string {
		$ids = array();

		foreach ( $this->uploads as $upload ) {
			$ids[] = $upload->get_attachment_id();
		}

		return implode( ',', $ids );
	}

	/**
	 * @return string
	 */
	public function get_attachment_url(): string {
		$urls = array();

		foreach ( $this->uploads as $upload ) {
			$urls[] = $upload->get_attachment_url();
		}

		return implode( ',', $urls );
	}

	/**
	 * @return array
	 */
	public function get_attachment_both(): array {
		$both = array();

		foreach ( $this->uploads as $upload ) {
			$both[] = $upload->get_attachment_both();
		}

		return $both;
	}
}