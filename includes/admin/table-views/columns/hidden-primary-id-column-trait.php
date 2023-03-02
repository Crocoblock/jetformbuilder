<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Hidden_Primary_Id_Column_Trait {

	public function __construct() {
		$this->add_columns(
			array(
				'id' => new Record_Id_Column(),
			)
		);
	}

}
