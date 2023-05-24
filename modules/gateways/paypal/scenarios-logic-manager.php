<?php


namespace JFB_Modules\Gateways\Paypal;

use JFB_Modules\Gateways\Scenarios_Abstract\Scenario_Logic_Repository;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
