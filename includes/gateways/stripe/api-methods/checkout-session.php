<?php


namespace Jet_Form_Builder\Gateways\Stripe\Api_Methods;


class Checkout_Session extends Base_Api_Method {

	public function method_name() {
		return '/v1/checkout/sessions';
	}

}