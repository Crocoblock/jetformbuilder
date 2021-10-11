<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Controller;

class Paypal_Pay_Now_Action extends Paypal_Base_Action {

	use Paypal_App_Context_Trait;

	const SLUG = 'PAY_NOW';

	private $units = array();

	public function action_slug() {
		return self::SLUG;
	}

	public function action_endpoint() {
		return 'v2/checkout/orders';
	}

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return array(
			'intent'              => 'CAPTURE',
			'application_context' => $this->get_app_context(),
			'purchase_units'      => $this->get_units(),
		);
	}

	public function set_units( array $amounts ) {
		foreach ( $amounts as $order_id => $amount ) {
			$this->units[] = array(
				'custom_id' => Gateway_Manager::instance()->get_actions_handler()->get_form_id() . '-' . $order_id,
				'amount'    => $amount
			);
		}

		return $this;
	}

	public function get_units() {
		return $this->units;
	}

}