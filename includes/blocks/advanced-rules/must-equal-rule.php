<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Must_Equal_Rule extends Advanced_Rule {

	public function get_id(): string {
		return 'equal';
	}

	public function get_label(): string {
		return __( 'Equals', 'jet-form-builder' );
	}

}