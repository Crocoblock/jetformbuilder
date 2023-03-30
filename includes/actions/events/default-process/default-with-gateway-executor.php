<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Actions\Types\Save_Record;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_With_Gateway_Executor extends Default_Process_Executor {

	public function before_execute() {
		try {
			jet_fb_gateway_current()->before_actions();
		} catch ( Repository_Exception $exception ) {
			return;
		}

		parent::before_execute();
	}

	protected function execute_actions() {
		jet_fb_action_handler()->soft_run_actions( $this );
	}

	/**
	 * @throws Action_Exception
	 */
	public function after_execute() {
		parent::after_execute();

		Save_Record::add_hidden();

		try {
			jet_fb_gateway_current()->after_actions( jet_fb_action_handler() );
		} catch ( Repository_Exception $exception ) {
			return;
		} catch ( Gateway_Exception $exception ) {
			throw ( new Action_Exception( $exception->getMessage(), $exception->get_additional() ) )->dynamic_error();
		}
	}

	protected function is_valid_action( Base $action ): bool {
		return $this->get_event()->is_valid_action( $action );
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
