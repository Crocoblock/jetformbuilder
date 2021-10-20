<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

trait List_Webhook_Trait {

	/**
	 * @param $compared_url
	 *
	 * @return false|mixed
	 * @throws Gateway_Exception
	 */
	public function get_webhook_id_by_url( $compared_url ) {
		$response = ( new List_Webhooks() )
			->set_bearer_auth( $this->controller->get_token() )
			->send_request();

		if ( ! isset( $response['webhooks'] ) ) {
			throw new Gateway_Exception( 'Can\'t get webhooks list', $response );
		}
		$webhooks = $response['webhooks'] ?? array();

		return $this->search_webhook_by_url( $webhooks, $compared_url );
	}

	public function search_webhook_by_url( $webhooks, $endpoint ) {
		foreach ( $webhooks as $webhook ) {
			$url = $webhook['url'] ?? '';

			if ( $url === $endpoint ) {
				return $webhook['id'];
			}
		}

		return false;
	}

}