<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;


class Must_Equal_Rule extends Advanced_Rule {

	public function get_id(): string {
		return 'equal';
	}

	public function get_label(): string {
		return __( 'Equals', 'jet-form-builder' );
	}

}