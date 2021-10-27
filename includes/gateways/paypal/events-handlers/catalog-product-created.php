<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Catalog_Product_Created extends Event_Handler_Base {

	public static function get_event_type() {
		return 'CATALOG.PRODUCT.CREATED';
	}

}
