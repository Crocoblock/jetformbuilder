<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

class Media_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'media-field';
	}

	public function get_response() {
		$value = json_decode( wp_unslash( $this->value ), true );

		if ( ! empty( $this->settings['insert_attachment'] ) && ! empty( $this->settings['value_format'] ) ) {

			if ( 'id' === $this->settings['value_format'] ) {
				$value = absint( $value );
			} elseif ( is_array( $value ) ) {
				$value = implode( ',', $value );
			}
		}

		return $value;
	}
}