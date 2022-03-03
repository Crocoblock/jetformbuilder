<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;


class Record_Id_Column extends Column_Advanced_Base {

	protected $column = 'id';

	public function get_label(): string {
		return __( 'ID' );
	}
}