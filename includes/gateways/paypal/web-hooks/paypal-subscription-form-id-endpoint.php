<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

class Paypal_Subscription_Form_Id_Endpoint extends Rest_Api_Endpoint_Base {

	use Paypal\Actions\List_Webhook_Trait;
	use Paypal_Subscription_Base_Trait;

	public static function get_rest_base() {
		return 'paypal-subscription/(?P<id>[\d]+)';
	}

	public function get_common_args() {
		return array(
			'id' => array(
				'type'     => 'integer',
				'required' => true,
			),
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public function get_token( \WP_REST_Request $request ) {
		return Paypal\Controller::get_token_by_form_id( $request->get_param( 'id' ) );
	}


}
