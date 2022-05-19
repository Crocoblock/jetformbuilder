<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Field_Data_Parser;
use Jet_Form_Builder\Request\Parser_Manager;

class Repeater_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'repeater-field';
	}

	public function get_response() {
		$response = array();
		$indexes  = $this->get_indexes();

		foreach ( $indexes as $index ) {
			$row   = $this->value[ $index ] ?? array();
			$files = $this->file[ $index ] ?? array();

			$response[ $index ] = Parser_Manager::instance()->get_values_fields(
				$this->inner,
				$row,
				$files,
				$this->inside_conditional
			);
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

		$indexes = array_keys( $this->value );

		return count( $indexes ) ? $indexes : array_keys( $this->file );
	}

}
