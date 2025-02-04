<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Request\Parser_Context;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Field_Value_Unique extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_field_value_unique';
	}

	public function get_label(): string {
		return __( 'Is field value unique', 'jet-form-builder' );
	}

	public function is_valid( $value, Parser_Context $context ): bool {
		echo '<pre>';
		print_r($value);
		echo '</pre>';
		die();
		if ( ! is_string( $value ) ) {
			return false;
		}

		return ! (bool) username_exists( $value );
	}
}
