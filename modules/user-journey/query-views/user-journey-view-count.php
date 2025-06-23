<?php


namespace JFB_Modules\User_Journey\Query_Views;

use Jet_Form_Builder\Db_Queries\Views\View_Base_Count_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_View_Count extends User_Journey_View {

	use View_Base_Count_Trait;
}
