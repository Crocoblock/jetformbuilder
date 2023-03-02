<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager as GM;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Scenario_Gateway extends Base_Gateway {

	/**
	 * @return Scenario_Logic_Base
	 * @throws Repository_Exception
	 */
	public function get_scenario() {
		return Scenarios_Manager::instance()->get_logic( $this );
	}

	/**
	 * @return Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function query_scenario() {
		return Scenarios_Manager::instance()->query_logic();
	}

	/**
	 * Prevent unnecessary notifications processing before form is send.
	 *
	 * @return void
	 * @throws Repository_Exception
	 */
	public function before_actions() {
		$this->set_form_meta( GM::instance()->gateways() );
		$this->get_scenario()->before_actions();
	}

	/**
	 * @param Action_Handler $handler
	 *
	 * @throws Repository_Exception
	 */
	public function after_actions( Action_Handler $handler ) {
		jet_fb_gateway_current()->get_scenario()->after_actions();
	}

	public function try_run_on_catch() {
		try {
			$scenario = $this->query_scenario();
		} catch ( Gateway_Exception $exception ) {
			return;
		}

		try {
			/** set to $this->payment_token */
			$this->set_payment_token();

		} catch ( Skip_Exception $exception ) {
			return;
		}

		/**
		 * Init actions for correct migrating
		 *
		 * Later should be deprecated
		 */
		$scenario->init_request();
		$scenario->init_actions();

		/** set to $this->gateways_meta */
		$this->set_form_gateways_meta();

		$scenario->on_catch();
	}

	// statuses from scenario

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	protected function retrieve_gateway_meta() {
		return $this->query_scenario()->get_gateways_meta();
	}

	/**
	 * @return string|void
	 * @throws Gateway_Exception
	 */
	public function get_payment_token() {
		return $this->query_scenario()->get_queried_token();
	}

	/**
	 * Apply macros in string
	 *
	 * @param null $string
	 *
	 * @return string [description]
	 * @throws Gateway_Exception
	 */
	public function apply_macros( $string = null ) {
		return $this->query_scenario()->apply_macros( $string );
	}

}
