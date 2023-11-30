<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules\Traits;

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

		return $another_parser->get_value();
	}

}
