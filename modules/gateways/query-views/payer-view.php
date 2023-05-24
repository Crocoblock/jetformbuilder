<?php


namespace JFB_Modules\Gateways\Query_Views;

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Modules\Gateways\Db_Models\Payer_Model;
use JFB_Modules\Gateways\Db_Models\Payment_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payer_View extends View_Base {

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function table(): string {
		return Payer_Model::table();
	}

	public function select_columns(): array {
		return array_keys( Payer_Model::schema() );
	}
}
