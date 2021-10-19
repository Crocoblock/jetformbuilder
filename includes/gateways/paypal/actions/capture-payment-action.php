<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Capture_Payment_Action extends Base_Action {

	const SLUG = 'CAPTURE_PAYMENT';

	protected $order_id;

	public function action_slug() {
		return self::SLUG;
	}

	public function action_endpoint() {
		return "v2/checkout/orders/{$this->order_id}/capture";
	}

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return array();
	}

	public function set_order_id( $order_id ) {
		$this->order_id = $order_id;

		return $this;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( empty( $this->order_id ) ) {
			throw new Gateway_Exception( 'order_id is not set.' );
		}
	}
}