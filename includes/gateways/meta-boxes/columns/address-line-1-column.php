<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Address_Line_1_Column extends Column_Advanced_Base {

	protected $column = 'address_line_1';

	public function get_label(): string {
		return __( 'Street Address Line 1', 'jet-form-builder' );
	}

}