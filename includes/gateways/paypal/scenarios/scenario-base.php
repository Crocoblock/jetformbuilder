<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Classes\Repository_Item_Trait;
use Jet_Form_Builder\Gateways\Paypal\Controller;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

abstract class Scenario_Base {

	use Repository_Item_Trait;

	/** @var Controller */
	protected $controller;

	protected $queried_token;

	abstract public function process_before();

	abstract public function process_after();

	abstract protected function query_token();

	public function get_queried_token() {
		if ( ! $this->queried_token ) {
			$this->queried_token = $this->query_token();
		}

		return $this->queried_token;
	}

	public function get_additional_args() {
		return array(
			Scenarios_Manager::QUERY_VAR => $this->rep_item_id()
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

}