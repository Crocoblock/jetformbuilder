<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions\Traits;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions;

trait List_Webhook_Trait {

	/**
	 * @param $compared_url
	 *
	 * @param bool $token
	 *
	 * @return false|mixed
	 * @throws Gateway_Exception
	 */
	public function get_webhook_id_by_endpoint( $compared_url, $token ) {
		$response = ( new Actions\List_Webhooks() )
			->set_bearer_auth( $token )
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

			if ( 1 === preg_match( "#$endpoint#", $url ) ) {
				return $webhook['id'];
			}
		}

		return false;
	}

}
