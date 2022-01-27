<?php


namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Executors\Action_Required_Executor;
use Jet_Form_Builder\Actions\Methods\Form_Record;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Manager;

class Save_Record extends Base {

	/**
	 * @return string
	 */
	public function get_id() {
		return 'save_record';
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return __( 'Save Form Record', 'jet-form-builder' );
	}

	public function get_flow_handler(): string {
		return Action_Required_Executor::class;
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Sql_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$args = jet_form_builder()->form_handler->get_response_args();

		( new Form_Record\Controller() )
			->set_setting( 'save_errors', Manager::instance()->active() )
			->save(
				array(
					'status' => $args['status'] ?? '',
				)
			);
	}

}
