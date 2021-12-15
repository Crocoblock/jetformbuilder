<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Repository_Pattern_Trait;

class Scenarios_Logic_Manager {

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/scenarios-logic',
			array(
				new Scenarios_Logic\Pay_Now(),
			)
		);
	}
}
