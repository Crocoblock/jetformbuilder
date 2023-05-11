<?php


namespace Jet_Form_Builder\Modules\Form_Record\Query_Views;

use Jet_Form_Builder\Db_Queries\Views\View_Base_Count_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_Fields_View_Count extends Record_Fields_View {

	use View_Base_Count_Trait;

}
