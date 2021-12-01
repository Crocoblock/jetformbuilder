<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

class Create_Webhook extends Base_Action {

	public function action_slug() {
		return 'CREATE_WEBHOOK';
	}

	public function action_endpoint() {
		return 'v1/notifications/webhooks';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function set_param_url( $url ) {
		$this->set_body(
			array(
				'url' => $url,
			)
		);

		return $this;
	}

	public function set_param_event_types( $types ) {
		$types = array_map(
			function ( $type ) {
				return array( 'name' => $type );
			},
			$types
		);

		$this->set_body(
			array(
				'event_types' => $types,
			)
		);

		return $this;
	}
}
