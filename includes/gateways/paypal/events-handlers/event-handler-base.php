<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

use Jet_Form_Builder\Classes\Repository_Static_Item_Trait;

abstract class Event_Handler_Base implements Repository_Static_Item_Trait {

	public static function rep_item_id() {
		return static::get_event_type();
	}

	abstract public static function get_event_type();

	public function on_catch_event( $webhook_event ) {
		update_option(
			"rest_api_jfb_test_{$this->get_event_type()}",
			wp_json_encode(
				array(
					date( 'Y-m-d H:i:s', time() + 3 * HOUR_IN_SECONDS ),
					$webhook_event,
				)
			)
		);
	}

}
