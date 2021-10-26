<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views\Scenario_View_Base;

/**
 * @method static Scenarios_Manager instance()
 *
 * Class Actions_Manager
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Scenarios_Manager {

	const QUERY_VAR = 'jet_gateway_scenario';

	use Instance_Trait;

	private $scenarios;
	private $queried_scenario;
	private $_logic_manager;
	private $_view_manager;

	private function __construct() {
		$this->logic()->rep_install();
		$this->view()->rep_install();
	}

	public function logic(): Scenarios_Logic_Manager {
		if ( ! $this->_logic_manager ) {
			$this->_logic_manager = new Scenarios_Logic_Manager();
		}

		return $this->_logic_manager;
	}

	public function view(): Scenarios_View_Manager {
		if ( ! $this->_view_manager ) {
			$this->_view_manager = new Scenarios_View_Manager();
		}

		return $this->_view_manager;
	}

	/**
	 * @param Controller $paypal
	 *
	 * @return Scenarios_Logic\Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function get_logic( Controller $paypal ): Scenarios_Logic\Scenario_Logic_Base {
		try {
			return $this->logic()->rep_get_item( $paypal->current_gateway( 'gateway_type' ) );
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	/**
	 * @param $slug
	 *
	 * @return Scenario_View_Base
	 * @throws Repository_Exception
	 */
	public function get_view( $slug ): Scenario_View_Base {
		return $this->view()->rep_get_item( $slug );
	}

	/**
	 * @return Scenarios_Logic\Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function query_logic(): Scenarios_Logic\Scenario_Logic_Base {
		try {
			if ( ! $this->queried_scenario ) {
				$scenario = esc_attr( $_GET[ self::QUERY_VAR ] ) ?? false;

				$this->queried_scenario = $this->logic()->rep_get_item( $scenario );
			}
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}

		return $this->queried_scenario;
	}


}
