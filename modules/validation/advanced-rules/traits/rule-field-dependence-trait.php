<?php


namespace JFB_Modules\Validation\Advanced_Rules\Traits;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Rule_Field_Dependence_Trait {

	public function get_field_value( Field_Data_Parser $parser ) {
		if ( empty( $this->get_setting( 'field' ) ) ) {
			return $this->get_setting( 'value' );
		}

		try {
			$another_parser = $parser->resolve_to_up( $this->get_setting( 'field' ) );
		} catch ( Silence_Exception $exception ) {
			return false;
		}

		/**
		 * We need to make sure, that value for dependent field was applied.
		 * It is required, when depended field comes after current field-parser
		 */
		$another_parser->update_request();

		return $another_parser->get_value();
	}

}
