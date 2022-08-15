<?php


namespace Jet_Form_Builder\Compatibility\Jet_Engine\Parsers;


use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Request\Field_Data_Parser;

class Map_Field_Parser extends Field_Data_Parser {

	/**
	 * @return mixed
	 */
	public function type() {
		return 'map-field';
	}

	/**
	 * @return mixed
	 * @throws Parse_Exception
	 */
	public function get_response() {
		if ( empty( $this->value ) ) {
			return $this->value;
		}

		$request = $this->context->get_request();

		$lat_name = $this->name . '_lat';
		$lng_name = $this->name . '_lng';

		throw new Parse_Exception(
			'Merge with request',
			array(
				$this->name => $this->value,
				$lat_name   => $request[ $lat_name ] ?? 0,
				$lng_name   => $request[ $lng_name ] ?? 0,
			)
		);
	}

}