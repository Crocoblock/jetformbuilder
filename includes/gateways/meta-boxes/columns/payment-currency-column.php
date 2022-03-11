<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payment_Currency_Column extends Column_Advanced_Base {

	protected $column = 'amount_code';

	public function get_label(): string {
		return __( 'Currency Code', 'jet-form-builder' );
	}
}
