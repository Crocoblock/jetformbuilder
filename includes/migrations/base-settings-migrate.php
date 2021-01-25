<?php


namespace Jet_Form_Builder\Migrations;


abstract class Base_Settings_Migrate {

	protected $value;

	public function __construct( $value ) {
		$this->value = $this->parse_value( $value );
	}

	abstract protected function parse_value( $value );

	public function value() {
		return $this->value;
	}

}