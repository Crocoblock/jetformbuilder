<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Exception_Name_Column extends Column_Advanced_Base {

	protected $column = 'name';

	public function get_label(): string {
		return __( 'Exception', 'jet-form-builder' );
	}

}
