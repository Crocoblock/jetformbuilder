<?php


namespace Jet_Form_Builder\Modules\Form_Record\Action_Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Events\Default_Required\Default_Required_Event;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Modules\Form_Record;
use Jet_Form_Builder\Modules\Form_Record\Controller;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Manager;
use Jet_Form_Builder\Modules\Form_Record\Admin\Meta_Boxes\Record_To_Payment_Box;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Save_Record extends Base {

	const ID = 'save_record';

	const SPAM_STATUSES = array(
		'captcha_failed',
		'nonce_failed',
		'csrf_failed',
	);

	private $spam_statuses;

	public function __construct() {
		parent::__construct();

		$this->spam_statuses = apply_filters(
			'jet-form-builder/action/save-record/spam-statuses',
			self::SPAM_STATUSES
		);
	}

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

	public function get_required_events(): array {
		return array(
			Default_Required_Event::class,
		);
	}

	public function supported_events(): array {
		return array(
			Default_Required_Event::class,
		);
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
			$controller->save_fields();
			$controller->save_actions();
			$controller->save_errors();

		} catch ( Handler_Exception $exception ) {
			// do nothing
		}
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Sql_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$status    = jet_fb_handler()->response_args['status'] ?? '';
		$save_spam = $this->settings['save_spam'] ?? false;

		if ( ! $save_spam && in_array( $status, $this->spam_statuses, true ) ) {
			return;
		}

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
			'save_spam'      => __(
				'Keep form records that have not passed spam or captcha protection.',
				'jet-form-builder'
			),
		);
	}

}
