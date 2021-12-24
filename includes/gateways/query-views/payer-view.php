<?php


namespace Jet_Form_Builder\Gateways\Query_Views;


use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;

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