<?php


namespace JFB_Modules\Gateways\Query_Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Db_Queries\Views\View_Base_Count_Trait;
use JFB_Modules\Gateways\Db_Models\Payer_Model;
use JFB_Modules\Gateways\Db_Models\Payer_Shipping_Model;
use JFB_Modules\Gateways\Db_Models\Payment_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payment_Count_View extends Payment_View {

	use View_Base_Count_Trait;

}
