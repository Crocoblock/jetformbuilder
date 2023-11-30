<?php


namespace JFB_Modules\Validation\Advanced_Rules;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Validation\Advanced_Rules\Interfaces\Rule_Collect_Error_It;
use JFB_Modules\Validation\Advanced_Rules\Interfaces\Rule_Field_Dependence_It;
use JFB_Modules\Validation\Advanced_Rules\Traits\Rule_Collect_Error_Trait;
use JFB_Modules\Validation\Advanced_Rules\Traits\Rule_Field_Dependence_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Match_Regexp_Rule extends Rule implements Rule_Field_Dependence_It, Rule_Collect_Error_It {

	use Rule_Field_Dependence_Trait;
	use Rule_Collect_Error_Trait;

	public function get_id(): string {
		return 'regexp';
	}

	public function get_label(): string {
		return __( 'Matches regular expression', 'jet-form-builder' );
	}

	public function get_control_label(): string {
		return __( 'Regular expression', 'jet-form-builder' );
	}

	public function validate_field( Field_Data_Parser $parser ) {
		$regexp      = Tools::to_string( $this->get_field_value( $parser ) );
		$field_value = Tools::to_string( $parser->get_value() );

		if ( $regexp &&
			preg_match(
				sprintf( '/%s/', $regexp ),
				$field_value
			)
		) {
			return;
		}

		$this->collect_error( $parser );
	}
}
