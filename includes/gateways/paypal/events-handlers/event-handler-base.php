<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


use Jet_Form_Builder\Classes\Repository_Item_Trait;

abstract class Event_Handler_Base {

	use Repository_Item_Trait;

	public function rep_item_id() {
		return $this->get_event_type();
	}

	abstract public function get_event_type();

	abstract public function on_catch_event();

}