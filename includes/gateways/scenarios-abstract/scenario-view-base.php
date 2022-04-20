<?php


namespace Jet_Form_Builder\Gateways\Scenarios_Abstract;

use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;
use Jet_Form_Builder\Gateways\Scenario_Item;

abstract class Scenario_View_Base implements Scenario_Item {

	abstract public function get_title(): string;

	public static function rep_item_id() {
		return static::scenario_id();
	}

	public function get_editor_labels(): array {
		return array();
	}

	public function get_editor_data(): array {
		return array();
	}

	/**
	 * @param $slug
	 *
	 * @return Scenario_View_Base
	 */
	protected function get_another( $slug ): Scenario_View_Base {
		return Scenarios_Manager::instance()->view()->rep_get_item_or_die( $slug );
	}

}
