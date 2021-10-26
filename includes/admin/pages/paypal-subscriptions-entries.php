<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

class Paypal_Subscriptions_Entries extends Base_Page {

	public function slug(): string {
		return 'paypal-entries';
	}

	public function title(): string {
		return __( 'Paypal Entries', 'jet-form-builder' );
	}

	public function page_config(): array {
		$scenario = Scenarios_Logic\Subscribe_Now::scenario_id();

		list( $list, $columns ) = Scenarios_Manager::instance()->view()->load_scenario( $scenario );

		return array(
			'list'     => $list,
			'columns'  => $columns,
			'scenario' => $scenario,
		);
	}

}
