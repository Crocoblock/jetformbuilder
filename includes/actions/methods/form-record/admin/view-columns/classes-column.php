<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Base;

class Classes_Column extends Column_Base {

	protected $type = 'rawArray';

	public function get_value( array $record = array() ) {
		return array(
			'list-table-item--not-viewed' => empty( $record['is_viewed'] ),
		);
	}

}