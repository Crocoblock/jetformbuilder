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
		Plugin::instance()->form_handler->request_handler->save_repeater( $this->name, $this->value );

		foreach ( $this->value as $index => $row ) {
			$response[ $index ] = Parser_Manager::instance()->get_values_fields( $this->inner, $row );
		}

		return $response;
	}

}