<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Catalog_Product_Updated extends Event_Handler_Base {

	public function get_event_type() {
		return 'CATALOG.PRODUCT.UPDATED';
	}

	public function on_catch_event() {
		// TODO: Implement on_catch_event() method.
	}
}