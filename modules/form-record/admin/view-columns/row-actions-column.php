<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Columns\Base_Row_Actions_Column;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Row_Actions_Column extends Base_Row_Actions_Column {

	use Actions_List_For_Column;
}
