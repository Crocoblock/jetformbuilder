<?php


namespace Jet_Form_Builder\Gateways\Query_Views;


use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Db_Queries\Views\View_Base_Count_Trait;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Shipping_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;

class Payment_Count_View extends Payment_View {

	use View_Base_Count_Trait;

}