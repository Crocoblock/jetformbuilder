<?php


namespace Jet_Form_Builder\Actions\Events;


use Jet_Form_Builder\Actions\Executors\Action_Default_Executor;

abstract class Gateway_Base_Executor extends Base_Executor {

	abstract public function get_gateway_type(): string;

	public function before_execute() {
		parent::before_execute();

		do_action(
			"jet-form-builder/gateways/on-payment-{$this->get_gateway_type()}",
			jet_fb_gateway_current()
		);

		$this->validate_actions();
	}

	protected function execute_actions() {
		( new Action_Default_Executor() )->soft_run_actions();
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}
}