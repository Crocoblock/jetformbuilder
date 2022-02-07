<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Repository;

class Scenarios_Logic_Manager extends Scenario_Logic_Repository {

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/scenarios-logic',
			array(
				new Scenarios_Logic\Pay_Now(),
			)
		);
	}
}
