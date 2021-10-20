<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Field_Data_Parser;

class Media_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'media-field';
	}

	public function parse_value( $value ) {
		$string_value = wp_unslash( wp_specialchars_decode( $value, ENT_COMPAT ) );

		return json_decode( $string_value, true );
	}

	public function get_response() {
		if ( $this->is_value_format( 'id' ) ) {
			if ( ! is_array( $this->value ) ) {
				$this->value = ! empty( $this->value ) ? absint( $this->value ) : null;
			} else {
				$this->value = implode( ',', $this->value );
			}
		}

		if ( is_array( $this->value ) && $this->is_value_format( 'url' ) ) {
			$this->value = implode( ', ', $this->value );
		}

		return $this->value;
	}

	private function is_value_format( $format ) {
		return ( ! empty( $this->settings['insert_attachment'] )
		         && ! empty( $this->settings['value_format'] )
		         && $format === $this->settings['value_format'] );
	}
}