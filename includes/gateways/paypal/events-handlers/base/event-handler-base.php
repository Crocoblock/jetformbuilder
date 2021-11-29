<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers\Base;

use Jet_Form_Builder\Classes\Repository_Static_Item_It;

abstract class Event_Handler_Base implements Repository_Static_Item_It {

	public static function rep_item_id() {
		return static::get_event_type();
	}

	abstract public static function get_event_type();

	public function on_catch_event( $webhook_event ): \WP_REST_Response {
		return new \WP_REST_Response(
			'Success',
			200,
			array(
				'X-JFB-Paypal-Webhook-Response' => 'Successfully catch!',
			)
		);
	}

}
