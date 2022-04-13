<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Ship_Full_Name_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Full Name', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		return $record['full_name'] ?? '';
	}

	public function is_editable( array $record = array() ): bool {
		return true;
	}
}
