<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payment_Status_Column extends Column_Advanced_Base {

	protected $column = 'status';

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}
}