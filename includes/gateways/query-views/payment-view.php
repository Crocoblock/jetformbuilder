<?php


namespace Jet_Form_Builder\Gateways\Query_Views;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Shipping_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_To_Payer_Shipping_Model;

class Payment_View extends View_Base {

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	/**
	 * @param Query_Builder $builder
	 *
	 * @throws Query_Builder_Exception
	 */
	public function get_prepared_join( Query_Builder $builder ) {
		try {
			// and also safely create dependent tables
			$payments_to_p_ships = ( new Payment_To_Payer_Shipping_Model() )->safe_create()::table();

		} catch ( Sql_Exception $exception ) {
			throw new Query_Builder_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		$payments    = Payment_Model::table();
		$payers      = Payer_Model::table();
		$payers_ship = Payer_Shipping_Model::table();

		$builder->join = "
LEFT JOIN `{$payments_to_p_ships}` ON 1=1
    AND `{$payments}`.`id` = `{$payments_to_p_ships}`.`payment_id`

LEFT JOIN `{$payers_ship}` ON 1=1 
	AND {$payers_ship}.`id` = `{$payments_to_p_ships}`.`payer_shipping_id`
	
LEFT JOIN `{$payers}` ON 1=1
	AND `{$payers}`.`id` = `{$payers_ship}`.`payer_id` 
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
