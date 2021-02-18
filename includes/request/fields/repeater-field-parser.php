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
		if ( ! is_array( $this->value ) ) {
			return array();
		}
		$response = array();

		foreach ( $this->value as $index => $row ) {
			foreach ( $row as $field_name => $field_value ) {
				$field = $this->find_inner_block_by_name( $field_name );
				$response[ $index ][ $field_name ] = Parser_Manager::instance()->get_parsed_value( $field, $row, $field_name );
			}
		}

		return $response;
	}

	protected function find_inner_block_by_name( $field_name ) {
		foreach ( $this->inner as $block ) {
			if ( isset( $block['attrs']['name'] ) && $field_name === $block['attrs']['name'] ) {
				return $block;
			}
		}
	}

}