<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Repository_Static_Item_Trait;

abstract class Scenario_Item_Base implements Repository_Static_Item_Trait {

	abstract public static function scenario_id();

	public static function rep_item_id() {
		return static::scenario_id();
	}

}
