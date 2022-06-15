<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;


use Jet_Form_Builder\Actions\Events\Base_Executor;

class Default_Process_Executor extends Base_Executor {


	public function before_execute() {
		parent::before_execute();

		do_action( 'jet-form-builder/actions/before-send' );
	}

	public function after_execute() {
		parent::after_execute();

		do_action( 'jet-form-builder/actions/after-send' );
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}
}