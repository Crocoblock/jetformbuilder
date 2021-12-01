<?php


namespace Jet_Form_Builder\Gateways\Paypal\Query_Views;

use Jet_Form_Builder\Gateways\Paypal\Query_Views;

class Recurring_Payment_Find_View extends Query_Views\Recurring_Payments_View {

	private $json_prop;
	private $json_value;

	public function conditions(): array {
		return array_merge(
			parent::conditions(),
			array(
				array(
					'type'   => 'like',
					'values' => array(
						'meta_value',
						$this->json_pair( $this->json_prop, $this->json_value ),
					),
				),
			)
		);
	}

	public function order_by(): array {
		return array();
	}

	public function find_by( $column, $value ): Recurring_Payment_Find_View {
		$this->json_prop  = $column;
		$this->json_value = $value;

		return $this;
	}

	public function limit(): array {
		return array( 1 );
	}


}