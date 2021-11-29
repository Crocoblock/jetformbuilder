<?php


namespace Jet_Form_Builder\Gateways\Paypal;

trait Scenario_Item_Trait {

	abstract public static function scenario_id();

	public static function rep_item_id() {
		return static::scenario_id();
	}

}
