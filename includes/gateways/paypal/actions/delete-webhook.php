<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Delete_Webhook extends Base_Action {

	protected $method = 'DELETE';
	private $webhook_id;

	public function action_slug() {
		return 'DELETE_WEBHOOK';
	}

	public function action_endpoint() {
		return "v1/notifications/webhooks/{$this->webhook_id}";
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function set_webhook_id( $id ) {
		$this->webhook_id = $id;

		return $this;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( ! $this->webhook_id ) {
			throw new Gateway_Exception( 'Undefined `webhook_id`' );
		}
	}

}
