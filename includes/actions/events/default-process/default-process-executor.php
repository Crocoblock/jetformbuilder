<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;


use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events_List;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;

class Default_Process_Executor extends Base_Executor {

	public function before_execute() {
		do_action( 'jet-form-builder/actions/before-send' );

		parent::before_execute();
	}

	public function after_execute() {
		do_action( 'jet-form-builder/actions/after-send' );

		parent::after_execute();
	}

	protected function is_valid_action( Base $action, Events_List $events ): bool {
		return ( ! count( $events ) || $events->in_array( $this ) ) && $action->on_validate( $this );
	}

	/**
	 * @throws Action_Exception
	 */
	protected function execute_actions() {
		jet_fb_action_handler()->run_actions( $this );
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}
}