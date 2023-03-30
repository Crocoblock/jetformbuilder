<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Match_Not_Regexp_Rule extends Match_Regexp_Rule {

	public function get_id(): string {
		return 'regexp_not';
	}

	public function get_label(): string {
		return __( 'Does not match regular expression', 'jet-form-builder' );
	}
}
