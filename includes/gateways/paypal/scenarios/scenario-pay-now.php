<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Capture_Payment_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Pay_Now_Action;

class Scenario_Pay_Now extends Scenario_Base {

	const SLUG = 'PAY_NOW';

	public function rep_item_id() {
		return self::SLUG;
	}

	protected function query_token() {
		return $_GET['token'] ?? false;
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		return ( new Paypal_Pay_Now_Action() )
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
	 * @throws Action_Exception
	 */
	public function process_after() {
		return ( new Paypal_Capture_Payment_Action() )
			->set_bearer_auth(
				$this->controller->get_token(
					$this->controller->current_gateway( 'client_id' ),
					$this->controller->current_gateway( 'secret' )
				)
			)->set_order_id( $this->get_queried_token() )
			->send_request();
	}
}