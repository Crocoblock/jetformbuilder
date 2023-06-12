<?php


namespace JFB_Modules\Gateways\Query_Views;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Modules\Gateways\Db_Models\Payer_Model;
use JFB_Modules\Gateways\Db_Models\Payer_Shipping_Model;
use JFB_Modules\Gateways\Db_Models\Payment_Model;
use JFB_Modules\Gateways\Db_Models\Payment_To_Payer_Shipping_Model;
use JFB_Modules\Gateways\Db_Models\Payment_To_Record;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payment_View extends View_Base {

	/**
	 * @since 3.1.0
	 */
	const AVAILABLE_STATUSES = array(
		'COMPLETED',
		'VOIDED',
	);

	protected $with_record = false;

	public function __construct() {
		$this->set_select(
			array_merge(
				Payment_Model::schema_columns(),
				Payer_Shipping_Model::schema_columns( 'ship' ),
				Payer_Model::schema_columns( 'payer' )
			)
		);
	}

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function set_filters( array $filters ) {
		parent::set_filters( $filters );

		$this->set_status_filter();

		return $this;
	}

	protected function set_status_filter() {
		$status = $this->filters['status'] ?? '';

		if ( ! in_array( $status, self::AVAILABLE_STATUSES, true ) ) {
			return;
		}

		$is_completed = 'COMPLETED' === $status;

		$this->add_conditions(
			array(
				array(
					'type'   => $is_completed
						? Query_Conditions_Builder::TYPE_EQUAL
						: Query_Conditions_Builder::TYPE_NOT_EQUAL,
					'values' => array( 'status', 'COMPLETED' ),
				),
			)
		);
	}

	/**
	 * @param Query_Builder $builder
	 */
	public function get_prepared_join( Query_Builder $builder ) {
		$payments_to_p_ships = ( new Payment_To_Payer_Shipping_Model() )->create()::table();
		$payers              = ( new Payer_Model() )->create()::table();
		$payments            = Payment_Model::table();
		$payers_ship         = Payer_Shipping_Model::table();

		$builder->join = "
LEFT JOIN `{$payments_to_p_ships}` ON 1=1
    AND `{$payments}`.`id` = `{$payments_to_p_ships}`.`payment_id`

LEFT JOIN `{$payers_ship}` ON 1=1 
	AND {$payers_ship}.`id` = `{$payments_to_p_ships}`.`payer_shipping_id`
	
LEFT JOIN `{$payers}` ON 1=1
	AND `{$payers}`.`id` = `{$payers_ship}`.`payer_id` 
		";

		if ( ! $this->with_record ) {
			return;
		}

		$payment_to_record = ( new Payment_To_Record() )->create()::table();

		$builder->join .= "
LEFT JOIN `{$payment_to_record}` ON 1=1
	AND `$payment_to_record`.`payment_id` = `{$payments}`.`id`
		";
	}

	public function table(): string {
		return Payment_Model::table();
	}

	public function set_payment_id( $payment_id ) {
		$this->set_conditions(
			static::prepare_columns(
				array(
					'id' => $payment_id,
				)
			)
		);
	}

	/**
	 * @param bool $with_record
	 */
	public function set_with_record( bool $with_record ) {
		$this->with_record = $with_record;
	}

}
