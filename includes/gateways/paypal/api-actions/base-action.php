<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

use Jet_Form_Builder\Gateways\Base_Gateway_Action;
use Jet_Form_Builder\Gateways\Gateway_Manager;

abstract class Base_Action extends Base_Gateway_Action {

	public function base_url(): string {
		return Gateway_Manager::instance()->is_sandbox
			? 'https://api-m.sandbox.paypal.com/'
			: 'https://api-m.paypal.com/';
	}

}
