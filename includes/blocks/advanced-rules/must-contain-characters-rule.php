<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Must_Contain_Characters_Rule extends Advanced_Rule {

	public function get_id(): string {
		return 'contain';
	}

	public function get_label(): string {
		return __( 'Must contain characters', 'jet-form-builder' );
	}

}
