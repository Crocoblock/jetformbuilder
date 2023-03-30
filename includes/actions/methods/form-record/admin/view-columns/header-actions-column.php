<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Columns\Base_Header_Actions_Column;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Header_Actions_Column extends Base_Header_Actions_Column {

	use Actions_List_For_Column;

}
