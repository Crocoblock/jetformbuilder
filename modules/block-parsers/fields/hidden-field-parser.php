<?php


namespace JFB_Modules\Block_Parsers\Fields;

use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Hidden_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'hidden-field';
	}

	/**
	 * @return mixed
	 * @throws \Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field
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
