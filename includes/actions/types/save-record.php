<?php


namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Executors\Action_Required_Executor;
use Jet_Form_Builder\Actions\Methods\Form_Record;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Manager;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes\Record_To_Payment_Box;

class Save_Record extends Base {

	const ID = 'save_record';

	/**
	 * @return string
	 */
	public function get_id() {
		return self::ID;
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

	public function dependence() {
		( new Form_Record\Records_Rest_Controller() )->rest_api_init();
		add_filter( 'jet-form-builder/page-containers/jfb-payments-single', array( $this, 'add_box_to_single_payment' ) );

		return parent::dependence();
	}

	/**
	 * @param Base_Meta_Container[] $containers
	 *
	 * @return array
	 */
	public function add_box_to_single_payment( array $containers ): array {
		$containers[1]->add_meta_box( new Record_To_Payment_Box() );

		return $containers;
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Sql_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$record_id = ( new Form_Record\Controller() )
			->set_settings(
				array(
					'save_errors'    => Manager::instance()->active(),
					'save_user_data' => $this->settings['save_user_data'] ?? false,
				)
			)
			->save()
			->get_record_id();

		$this->add_context_once(
			array( 'id' => $record_id )
		);
	}

	public function editor_labels() {
		return array(
			'save_user_data' => __( 'Store the IP address and other specific request headers.', 'jet-form-builder' ),
		);
	}

}
