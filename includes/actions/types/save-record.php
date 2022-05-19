<?php


namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Events\Default_Process_Event;
use Jet_Form_Builder\Actions\Events_List;
use Jet_Form_Builder\Actions\Executors\Action_Default_Executor;
use Jet_Form_Builder\Actions\Executors\Action_Required_Executor;
use Jet_Form_Builder\Actions\Methods\Form_Record;
use Jet_Form_Builder\Actions\Methods\Form_Record\Controller;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Manager;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes\Record_To_Payment_Box;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

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

	public function get_required_events(): array {
		return array( Default_Process_Event::get_slug() );
	}

	public function dependence() {
		( new Form_Record\Records_Rest_Controller() )->rest_api_init();
		add_filter(
			'jet-form-builder/page-containers/jfb-payments-single',
			array(
				$this,
				'add_box_to_single_payment',
			)
		);

		add_action(
			'jet-form-builder/gateways/before-send',
			array( $this, 'before_send_gateway' ),
			10,
			3
		);

		return parent::dependence();
	}

	public function on_register_in_flow() {
		add_filter(
			'jet-form-builder/actions/run-callback',
			array(
				new Action_Default_Executor(),
				Action_Default_Executor::SOFT,
			)
		);
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

	public function before_send_gateway( $status, $action_error, Scenario_Logic_Base $scenario ) {
		// prepare record controller, for saving errors & actions
		$record     = $scenario->get_scenario_row( 'record' );
		$controller = ( new Controller() )->set_record_id( $record['id'] );
		$controller->set_setting( 'save_errors', Manager::instance()->active() );

		try {
			$controller->save_actions();
			$controller->save_errors();

		} catch ( Handler_Exception $exception ) {
			// do nothing
		}
	}

	/**
	 * Run 'Save record' action only once.
	 */
	public static function add_hidden() {
		if ( has_action(
			'jet-form-builder/form-handler/after-send',
			array( self::class, 'do_action_hidden' )
		) ) {
			return;
		}
		add_action( 'jet-form-builder/form-handler/after-send', array( self::class, 'do_action_hidden' ), 0 );
	}

	/**
	 * @throws Sql_Exception
	 */
	public static function do_action_hidden() {
		if ( false !== jet_fb_action_handler()->get_action_by_slug( self::ID ) ) {
			return;
		}
		/** @var Save_Record $self */
		$self = jet_form_builder()->actions->rep_get_item_or_die( self::ID );

		$self->do_action( array(), jet_fb_action_handler() );
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
			'save_user_data' => __( 'Store the IP address and other request headers', 'jet-form-builder' ),
		);
	}

}
