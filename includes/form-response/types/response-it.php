<?php


namespace Jet_Form_Builder\Form_Response\Types;

abstract class Response_It {

	protected $additional;

	public function __construct( $additional ) {
		$this->save_additional( $additional );
	}

	abstract public function additional_fields();

	abstract public function get_field_errors( $errors );

	abstract public function parse_status( $status );

	abstract public function send( array $query_args );

	private function save_additional( $additional ) {
		$insert = array();
		foreach ( $additional as $key => $value ) {
			if ( ! in_array( $key, $this->additional_fields(), true ) ) {
				continue;
			}
			$insert[ $key ] = $value;
		}

		$this->additional = (object) $insert;
	}

}
