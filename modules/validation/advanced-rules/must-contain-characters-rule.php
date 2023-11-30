<?php


namespace JFB_Modules\Validation\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Must_Contain_Characters_Rule extends Rule {

	public function get_id(): string {
		return 'contain';
	}

	public function get_label(): string {
		return __( 'Must contain characters', 'jet-form-builder' );
	}

}
