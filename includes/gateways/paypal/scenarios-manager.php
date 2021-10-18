<?php


namespace Jet_Form_Builder\Gateways\Paypal;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Base;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Pay_Now;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Subscribe;

/**
 * @method static Scenarios_Manager instance()
 * @method Scenario_Base rep_get_item( $slug )
 *
 * Class Actions_Manager
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Scenarios_Manager {

	const QUERY_VAR = 'jet_gateway_scenario';

	use Instance_Trait;
	use Repository_Pattern_Trait;

	private $scenarios;
	private $queried_scenario;

	private function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters( 'jet-form-builder/gateways/paypal/scenarios', array(
			new Scenario_Pay_Now(),
			new Scenario_Subscribe(),
		) );
	}

	/**
	 * @param Controller $paypal
	 *
	 * @return Scenario_Base
	 * @throws Gateway_Exception
	 */
	public function get_scenario( Controller $paypal ) {
		try {
			return $this->rep_get_item( $paypal->current_gateway( 'gateway_type' ) );
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	/**
	 * @return Scenario_Base
	 * @throws Gateway_Exception
	 */
	public function query_scenario() {
		try {
			if ( ! $this->queried_scenario ) {
				$scenario = $_GET[ self::QUERY_VAR ] ?? false;

				$this->queried_scenario = $this->rep_get_item( $scenario );
			}
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}

		return $this->queried_scenario;
	}


}