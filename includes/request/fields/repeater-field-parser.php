<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Field_Data_Parser;
use Jet_Form_Builder\Request\Parser_Manager;

class Repeater_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'repeater-field';
	}

	public function save_response() {
		return false;
	}

	public function after_init() {
		if ( ! is_array( $this->value ) ) {
			return;
		}
		Parser_Manager::instance()->request()->save_repeater( $this->name, $this->value );

		foreach ( $this->value as $index => $row ) {
			Parser_Manager::instance()->save_parsers_or_get_response( $this->inner, $row, $this->name, $index );
		}
	}

	protected function find_inner_block_by_name( $field_name ) {
		foreach ( $this->inner as $block ) {
			if ( isset( $block['attrs']['name'] ) && $field_name === $block['attrs']['name'] ) {
				return $block;
			}
		}

		return false;
	}

}