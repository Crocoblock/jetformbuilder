<?php


namespace JFB_Modules\Gateways\Query_Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Modules\Gateways\Db_Models\Payment_Model;

class Payment_For_Export_View extends View_Base {

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function __construct() {
		$this->set_select(
			array_keys( Payment_Model::schema() )
		);
	}

	public function table(): string {
		return Payment_Model::table();
	}

	public function set_filters( array $filters ) {
		parent::set_filters( $filters );

		$this->set_status_filter();

		return $this;
	}

	protected function set_status_filter() {
		$status = $this->filters['status'] ?? '';

		if ( ! in_array( $status, Payment_View::AVAILABLE_STATUSES, true ) ) {
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

}
