<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;

use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Actions\Types\Save_Record;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Process_Executor extends Base_Executor {

	public function before_execute() {
		do_action( 'jet-form-builder/actions/before-send' );

		parent::before_execute();
	}

	public function after_execute() {
		do_action( 'jet-form-builder/actions/after-send' );

		parent::after_execute();
	}

	protected function is_valid_action( Base $action ): bool {
		return ( ! count( $action->get_events() ) || parent::is_valid_action( $action ) );
	}

	/**
	 * @throws Action_Exception
	 */
	protected function execute_actions() {
		$save = jet_fb_action_handler()->get_action( Save_Record::ID );

		false === $save
			? jet_fb_action_handler()->run_actions( $this )
			: jet_fb_action_handler()->soft_run_actions( $this );
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}
}
