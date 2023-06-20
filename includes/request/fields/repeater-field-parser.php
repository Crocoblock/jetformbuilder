<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Exceptions\Exclude_Field_Exception;
use Jet_Form_Builder\Request\Field_Data_Parser;
use Jet_Form_Builder\Request\Parser_Context;
use Jet_Form_Builder\Request\Parser_List_Context;
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
		$indexes = $this->get_indexes();

		foreach ( $indexes as $index ) {
			$context = new Parser_Context();
			$this->add_inner( $context, $index );

			$context->set_request( $this->value[ $index ] ?? array() )
					->set_files( $this->file[ $index ] ?? array() );

			$context->apply( $this->get_inner_blocks() );
		}

		$this->set_file( false );

		return count( $indexes );
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
