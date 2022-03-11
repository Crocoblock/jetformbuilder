<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Postal_Code_Column extends Column_Advanced_Base {

	protected $column = 'postal_code';

	public function get_label(): string {
		return __( 'Zip / Postal Code','jet-form-builder' );
	}

}