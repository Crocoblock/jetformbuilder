<?php


namespace JFB_Modules\Block_Parsers\Fields;

use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Repeater_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'repeater-field';
	}

	/**
	 * @return int|void
	 * @throws Sanitize_Value_Exception
	 */
	public function get_response() {
		$indexes = $this->get_indexes();

		if ( ! $indexes ) {
			return '';
		}

		if ( ! $this->get_inner_template() ) {
			throw new Sanitize_Value_Exception();
		}

		foreach ( $indexes as $index ) {
			$context = clone $this->get_inner_template();
			$context->set_index_in_parent( $this->add_inner( $context ) );

			$context->set_request( $this->value[ $index ] ?? array() )
					->set_files( $this->file[ $index ] ?? array() );

			$context->apply();
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
