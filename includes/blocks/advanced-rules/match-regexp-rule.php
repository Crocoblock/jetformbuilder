<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Match_Regexp_Rule extends Advanced_Rule {

	public function get_id(): string {
		return 'regexp';
	}

	public function get_label(): string {
		return __( 'Matches regular expression', 'jet-form-builder' );
	}

	public function get_control_label(): string {
		return __( 'Regular expression', 'jet-form-builder' );
	}
}
