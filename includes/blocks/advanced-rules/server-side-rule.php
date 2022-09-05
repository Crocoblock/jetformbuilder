<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;


class Server_Side_Rule extends Match_Regexp_Rule {

	public function get_id(): string {
		return 'ssr';
	}

	public function get_label(): string {
		return __( 'Server-Side callback', 'jet-form-builder' );
	}

}