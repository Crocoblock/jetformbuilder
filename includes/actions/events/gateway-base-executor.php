<?php


namespace Jet_Form_Builder\Actions\Events;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Gateway_Base_Executor extends Base_Executor {

	abstract public function get_gateway_type(): string;

	public function before_execute() {
		parent::before_execute();

		do_action(
			"jet-form-builder/gateways/on-payment-{$this->get_gateway_type()}",
			jet_fb_gateway_current()
		);
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}
}
