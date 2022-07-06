<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;


use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;

class Default_With_Gateway_Executor extends Default_Process_Executor {

	public function before_execute() {
		try {
			jet_fb_gateway_current()->before_actions();
		} catch ( Repository_Exception $exception ) {
			return;
		}

		parent::before_execute();
	}

	/**
	 * @throws Action_Exception
	 */
	public function after_execute() {
		parent::after_execute();

		try {
			jet_fb_gateway_current()->after_actions( jet_fb_action_handler() );
		} catch ( Repository_Exception $exception ) {
			return;
		} catch ( Gateway_Exception $exception ) {
			throw ( new Action_Exception( $exception->getMessage(), $exception->get_additional() ) )->dynamic_error();
		}
	}

	public function is_supported(): bool {
		Gateway_Manager::instance()->set_gateways_options_by_form_id( jet_fb_handler()->form_id );

		try {
			Gateway_Manager::instance()->get_current_gateway_controller();
		} catch ( Repository_Exception $exception ) {
			return false;
		}

		return true;
	}

}