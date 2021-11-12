<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

/**
 * @method static Events_Listeners_Manager instance()
 *
 * Class Events_Listeners_Manager
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Events_Listeners_Manager {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return array(
			new Events_Handlers\Billing_Plan_Activated(),
			new Events_Handlers\Billing_Plan_Created(),
			new Events_Handlers\Billing_Plan_Deactivated(),
			new Events_Handlers\Billing_Plan_Pricing_Change_Activated(),
			new Events_Handlers\Billing_Plan_Updated(),
			new Events_Handlers\Billing_Subscription_Activated(),
			new Events_Handlers\Billing_Subscription_Cancelled(),
			new Events_Handlers\Billing_Subscription_Created(),
			new Events_Handlers\Billing_Subscription_Expired(),
			new Events_Handlers\Billing_Subscription_Payment_Failed(),
			new Events_Handlers\Billing_Subscription_Suspended(),
			new Events_Handlers\Billing_Subscription_Updated(),
			new Events_Handlers\Catalog_Product_Created(),
			new Events_Handlers\Catalog_Product_Updated(),
			new Events_Handlers\Payment_Sale_Completed(),
			new Events_Handlers\Payment_Sale_Refunded(),
			new Events_Handlers\Payment_Sale_Reversed(),
		);
	}

	/**
	 * @param $event_type
	 *
	 * @throws Repository_Exception
	 */
	public function get_event( $event_type ): Events_Handlers\Base\Event_Handler_Base {
		return $this->rep_get_item( $event_type );
	}

	public function get_events_types_list() {
		return $this->rep_get_items_keys();
	}
}
