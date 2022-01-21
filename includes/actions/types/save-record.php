<?php


namespace Jet_Form_Builder\Actions\Types;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Form_Record;
use Jet_Form_Builder\Dev_Mode\Manager;

class Save_Record extends Base {

	public function get_id() {
		return 'save_record';
	}

	public function get_name() {
		return __( 'Save Form Record', 'jet-form-builder' );
	}

	public function do_action( array $request, Action_Handler $handler ) {
		$save_errors = ! empty( $this->settings['save_errors'] )
			? $this->settings['save_errors']
			: Manager::instance()->active();

		$controller = ( new Form_Record\Controller )
			->set_saving_errors( $save_errors );

		add_action(
			'jet-form-builder/form-handler/after-send',
			array( $controller, 'hook_handler' ),
			10, 3
		);
	}
}