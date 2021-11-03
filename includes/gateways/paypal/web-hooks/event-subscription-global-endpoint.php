<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Event_Subscription_Global_Endpoint extends Base\Event_Subscription_Base {

	public static function get_rest_base() {
		return 'event-subscription';
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public function get_token( \WP_REST_Request $request ) {
		return Paypal\Controller::get_token_global();
	}
}
