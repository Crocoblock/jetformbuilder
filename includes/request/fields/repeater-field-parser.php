<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Field_Data_Parser;
use Jet_Form_Builder\Request\Parser_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Repeater_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'repeater-field';
	}

	public function get_response() {
		$response = array();
		$indexes  = $this->get_indexes();
		$context  = clone $this->context;

		foreach ( $indexes as $index ) {
			$row   = $this->value[ $index ] ?? array();
			$files = $this->file[ $index ] ?? array();

			$context->set_request_context( $row )->set_files_context( $files );

			$response[ $index ] = Parser_Manager::instance()->get_values_fields( $this->inner, $context );
		}

		return $response;
	}

	protected function get_indexes(): array {
		if ( ! is_array( $this->value ) ) {
			$this->value = array();
		}
		if ( ! is_array( $this->file ) ) {
			$this->file = array();
		}

		$indexes      = array_keys( $this->value );
		$file_indexes = array_keys( $this->file );

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/2095
		 */
		return max( $indexes, $file_indexes );
	}

}
