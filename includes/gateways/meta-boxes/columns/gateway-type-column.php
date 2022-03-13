<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Gateway_Type_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Gateway' );
	}

}