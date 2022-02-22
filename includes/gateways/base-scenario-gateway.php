<?php


namespace Jet_Form_Builder\Gateways;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

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
		jet_fb_gateway_current()->get_scenario()->before_actions();
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
			/** set to $this->payment_token */
			$this->set_payment_token();

			/** set to $this->gateways_meta */
			$this->set_form_gateways_meta();

			/** here you can update scenario rows */
			$this->query_scenario()->on_catch();

		} catch ( Repository_Exception $exception ) {
			return;
		} catch ( Skip_Exception $exception ) {
			return;
		} catch ( Handler_Exception $exception ) {
			$exception->dynamic_error();

			$this->send_response(
				array(
					'status' => $exception->getMessage()
				)
			);
		}
	}

	// statuses from scenario

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function failed_statuses() {
		return $this->query_scenario()->get_failed_statuses();
	}

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

}