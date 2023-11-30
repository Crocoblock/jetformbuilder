<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

use Jet_Form_Builder\Blocks\Advanced_Rules\Interfaces\Rule_Field_Dependence_It;
use Jet_Form_Builder\Blocks\Advanced_Rules\Traits\Rule_Field_Dependence_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Must_Equal_Rule extends Advanced_Rule implements Rule_Field_Dependence_It {

	use Rule_Field_Dependence_Trait;

	public function get_id(): string {
		return 'equal';
	}

	public function get_label(): string {
		return __( 'Equals', 'jet-form-builder' );
	}

	public function validate_field( Field_Data_Parser $parser ) {
		$value = $this->get_field_value( $parser );

		if ( $parser->get_value() === $value ) {
			return;
		}

		$parser->collect_error( 'not_equal', $this->get_setting( 'message' ) );
	}

}
