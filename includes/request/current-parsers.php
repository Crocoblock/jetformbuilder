<?php


namespace Jet_Form_Builder\Request;


final class Current_Parsers {

	/**
	 * @var Field_Data_Parser[]
	 */
	private $parsers = array();

	public function add_parser( $parser ) {
		$this->parsers[] = $parser;
	}

	public function clear() {
		$this->parsers = array();
	}

	public function get_all() {
		return $this->parsers;
	}

	public function get_by_name( $name ) {
		foreach ( $this->parsers as $parser ) {
			if ( $parser->name === $name ) {
				return $parser;
			}
		}
		return false;
	}

	public function is_valid( $name ) {
		foreach ( $this->parsers as $parser ) {
			if ( $parser->name === $name ) {
				return $parser->is_valid();
			}
		}
	}



}