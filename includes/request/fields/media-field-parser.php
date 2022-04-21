<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Field_Data_Parser;
use Psr\Container\ContainerInterface;

class Media_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'media-field';
	}

	private function get_temp_file(): string {
		
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

	private function is_value_format( $format ): bool {
		return ( ! empty( $this->settings['insert_attachment'] )
				&& ! empty( $this->settings['value_format'] )
				&& $format === $this->settings['value_format'] );
	}
}
