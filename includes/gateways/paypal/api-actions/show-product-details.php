<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;


class Show_Product_Details extends Base_Action {

	protected $method = 'GET';

	public function action_slug() {
		return 'SHOW_PRODUCT_DETAILS';
	}

	public function action_endpoint() {
		return 'v1/catalogs/products/{product_id}';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}
}