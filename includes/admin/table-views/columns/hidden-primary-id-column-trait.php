<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

trait Hidden_Primary_Id_Column_Trait {

	public function __construct() {
		$this->add_columns(
			array(
				'id' => new Record_Id_Column(),
			)
		);
	}

}
