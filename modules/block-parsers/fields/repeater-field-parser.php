<?php


namespace JFB_Modules\Block_Parsers\Fields;

use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Block_Parsers\Parser_Context;

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
