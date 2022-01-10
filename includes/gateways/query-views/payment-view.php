<?php


namespace Jet_Form_Builder\Gateways\Query_Views;


use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Shipping_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;

class Payment_View extends View_Base {

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function get_prepared_join( Query_Builder $builder ) {
		$payments = Payment_Model::table();
		$payers = Payer_Model::table();
		$payers_ship = Payer_Shipping_Model::table();

		$builder->join = "
JOIN `{$payers_ship}` ON ( 
    `{$payments}`.`id` = `{$payers_ship}`.`relation_id`
    AND 
	`{$payers_ship}`.`relation_type` = 'PAY_NOW' 
)

JOIN `{$payers}` ON `{$payers_ship}`.`payer_id` = `{$payers}`.`id`
		";
	}

	public function table(): string {
		return Payment_Model::table();
	}

	public function select_columns(): array {
		return array_merge(
			Payment_Model::schema_columns(),
			Payer_Shipping_Model::schema_columns( 'ship' ),
			Payer_Model::schema_columns( 'payer' )
		);
	}
}