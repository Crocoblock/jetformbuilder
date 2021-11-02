<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

/**
 * Class Scenarios_View_Manager
 *
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Scenarios_View_Manager {

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/scenarios-view',
			array(
				new Scenarios_Views\Subscribe_Now(),
			)
		);
	}

	/**
	 * @param $record
	 *
	 * @return Scenarios_Views\Scenario_View_Base
	 * @throws Repository_Exception
	 */
	public function get_view( $record ): Scenarios_Views\Scenario_View_Base {
		if ( is_array( $record ) ) {
			$scenario = $record['scenario'] ?? false;

			return $this->rep_get_item( $scenario );
		}

		return $this->rep_get_item( $record );
	}


	/**
	 * @param $scenario_id
	 *
	 * @return array
	 */
	public function load_view( $scenario_id ): array {
		try {
			return $this->get_view( $scenario_id )->load_view();
		} catch ( Repository_Exception $exception ) {
			return array();
		}
	}
}
