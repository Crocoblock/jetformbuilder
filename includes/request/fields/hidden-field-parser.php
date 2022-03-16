<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use Jet_Form_Builder\Request\Field_Data_Parser;

class Hidden_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'hidden-field';
	}

	/**
	 * @return mixed
	 */
	public function get_response() {
		if ( $this->settings['render'] ?? true ) {
			return $this->value;
		}

		/** @var Hidden_Field $hidden_type */
		$hidden_type = jet_form_builder()->blocks->get_field_by_name( $this->type() );

		$hidden_type->set_rendering( false );
		// the exception will never be thrown
		$hidden_type->set_block_data( $this->settings );
		$hidden_type->set_preset();

		return $hidden_type->block_attrs['field_value'] ?? $this->value;
	}


}
