<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Pay_Now_Action extends Base_Action {

	use Traits\App_Context_Trait;

	const SLUG = 'PAY_NOW';

	private $units = array();

	public function action_slug() {
		return self::SLUG;
	}

	public function action_endpoint() {
		return 'v2/checkout/orders';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
			'Prefer'       => 'return=representation'
		);
	}

	public function action_body() {
		return array(
			'intent'              => 'CAPTURE',
			'application_context' => $this->get_app_context(),
			'purchase_units'      => $this->get_units(),
		);
	}

	public function set_units( array $amounts ) {
		foreach ( $amounts as $amount ) {
			$this->units[] = array(
				'custom_id' => jet_fb_handler()->get_form_id(),
				'amount'    => $amount,
			);
		}

		return $this;
	}

	public function get_units() {
		return $this->units;
	}

}
