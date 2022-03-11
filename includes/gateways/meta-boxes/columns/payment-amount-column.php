<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payment_Amount_Column extends Column_Advanced_Base {

	protected $type   = 'price';
	protected $column = 'amount_value';

	public function get_label(): string {
		return __( 'Amount', 'jet-form-builder' );
	}
}
