<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Field_Data_Parser;

class Media_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'media-field';
	}

	public function get_response() {
		$string_value = wp_unslash( wp_specialchars_decode( $this->value, ENT_COMPAT ) );
		$value = json_decode( $string_value, true );

		if ( $this->is_value_format( 'id' ) ) {
			if ( ! is_array( $value ) ) {
				$value = ! empty( $value ) ? absint( $value ) : null;
			} else {
				$value = implode( ',', $value );
			}
		}

		if ( is_array( $value ) && $this->is_value_format( 'url' ) ) {
			$value = implode( ', ', $value );
		}

		return $value;
	}

	private function is_value_format( $format ) {
		return ( ! empty( $this->settings['insert_attachment'] )
		         && ! empty( $this->settings['value_format'] )
		         && $format === $this->settings['value_format'] );
	}
}