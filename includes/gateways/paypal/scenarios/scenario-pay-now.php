<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Capture_Payment_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Pay_Now_Action;

class Scenario_Pay_Now extends Scenario_Base {

	use Scenario_Set_Status_Trait;

	const SLUG = 'PAY_NOW';

	public function rep_item_id() {
		return self::SLUG;
	}

	protected function query_token() {
		return $_GET['token'] ?? false;
	}

	public function get_failed_statuses() {
		return array( 'VOIDED' );
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		return ( new Pay_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context( array(
				'return_url' => $this->get_success_url(),
				'cancel_url' => $this->get_failed_url()
			) )
			->set_units( array(
				$this->controller->get_order_id() => array(
					'currency_code' => $this->controller->current_gateway( 'currency' ),
					'value'         => $this->controller->get_price_var(),
				)
			) )
			->send_request();
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		return ( new Capture_Payment_Action() )
			->set_bearer_auth( $this->controller->get_token() )
			->set_order_id( $this->get_queried_token() )
			->send_request();
	}


	/**
	 * @throws Gateway_Exception
	 */
	public function process_save() {
		$this->set_payment_status();
		$this->set_payment_amount();
		$this->set_payer();
	}

	private function set_payment_amount() {
		$payment = $this->controller->get_payment();

		if ( empty( $payment['purchase_units'][0]['payments']['captures'] ) ) {
			return;
		}
		$this->controller->set_post_meta(
			'amount',
			$payment['purchase_units'][0]['payments']['captures'][0]['amount'] ?? 0
		);
	}

	private function set_payer() {
		$payment = $this->controller->get_payment();

		if ( empty( $payment['payer'] ) ) {
			return;
		}
		$this->controller->set_post_meta( 'payer', array(
			'first_name' => $payment['payer']['name']['given_name'] ?? '',
			'last_name'  => $payment['payer']['name']['surname'] ?? '',
			'email'      => $payment['payer']['email_address'] ?? '',
		) );
	}
}