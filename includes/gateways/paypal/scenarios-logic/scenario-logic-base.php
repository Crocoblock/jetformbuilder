<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;

use Jet_Form_Builder\Classes\Repository_Static_Item_Trait;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Controller;
use Jet_Form_Builder\Gateways\Paypal\Scenario_Item_Base;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

abstract class Scenario_Logic_Base extends Scenario_Item_Base {

	/** @var Controller */
	protected $controller;

	protected $queried_token;

	abstract public function process_before();

	abstract public function process_after();

	abstract public function process_save();

	abstract protected function query_token();

	abstract public function get_failed_statuses();

	/**
	 * @throws Gateway_Exception
	 */
	public function set_gateway_data() {
		$this->controller->set_gateway_data();
	}

	public function get_queried_token() {
		if ( ! $this->queried_token ) {
			$this->queried_token = $this->query_token();
		}

		return $this->queried_token;
	}

	public function get_action_handler() {
		return $this->controller->get_action_handler();
	}

	public function get_additional_args() {
		return array(
			Scenarios_Manager::QUERY_VAR => static::scenario_id(),
		);
	}

	protected function get_success_url() {
		return $this->controller->get_refer_url( Controller::SUCCESS_TYPE, $this->get_additional_args() );
	}

	protected function get_failed_url() {
		return $this->controller->get_refer_url( Controller::FAILED_TYPE, $this->get_additional_args() );
	}

	public function install( Controller $paypal ) {
		if ( ! $this->controller ) {
			$this->controller = $paypal;
		}

		return $this;
	}

	public function redirect_to_checkout( $order ) {
		foreach ( $order['links'] as $link ) {
			if ( empty( $link['rel'] ) || 'approve' !== $link['rel'] ) {
				continue;
			}

			$this->get_action_handler()->add_response(
				array(
					'redirect' => $link['href'],
				)
			);
			break;
		}
	}

}
