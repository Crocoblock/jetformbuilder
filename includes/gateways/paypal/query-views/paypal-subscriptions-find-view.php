<?php


namespace Jet_Form_Builder\Gateways\Paypal\Query_Views;


class Paypal_Subscriptions_Find_View extends Paypal_Subscriptions_View {

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

	protected function empty_message(): string {
		return __( 'Undefined subscription.', 'jet-form-builder' );
	}

	public function find_by( $column, $value ): Paypal_Subscriptions_Find_View {
		$this->json_prop  = $column;
		$this->json_value = $value;

		return $this;
	}

	public function limit(): array {
		return array( 1 );
	}
}
