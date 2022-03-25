<?php


namespace Jet_Form_Builder\Gateways\Scenarios_Abstract;

use Jet_Form_Builder\Admin\Table_Views\View_Base;
use Jet_Form_Builder\Admin\Table_Views\View_Simple_Base;
use Jet_Form_Builder\Gateways\Paypal\Scenario_Item_Trait;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

abstract class Scenario_View_Base {

	use Scenario_Item_Trait;

	abstract public function get_title(): string;

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
