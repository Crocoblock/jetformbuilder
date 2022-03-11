<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payer_Last_Name_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Last Name', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		return $record['last_name'] ?? '';
	}
}