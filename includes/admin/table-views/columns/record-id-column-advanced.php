<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;


class Record_Id_Column_Advanced extends Column_Advanced_Base {

	protected $type   = 'integer';
	protected $column = 'id';

	public function get_label(): string {
		return __( 'ID' );
	}
}
