<?php


namespace Jet_Form_Builder\Actions;

use Jet_Form_Builder\Actions\Events\Bad_Request\Bad_Request_Event;
use Jet_Form_Builder\Actions\Events\Default_Required\Default_Required_Event;
use Jet_Form_Builder\Actions\Events\Base_Action_Event;
use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Actions\Events\Base_Gateway_Event;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Failed\Gateway_Failed_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Success\Gateway_Success_Event;
use Jet_Form_Builder\Actions\Events\On_Dynamic_State\On_Dynamic_State_Event;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Dynamic_Items_It;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;

/**
 * @method static Events_Manager instance()
 *
 * Class Events_Manager
 * @package Jet_Form_Builder\Actions
 */
class Events_Manager implements Arrayable, Repository_Dynamic_Items_It {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	private $types = array();

	public function __construct() {
		$this->rep_install();
	}

	/**
	 * @return array
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/event-types',
			array(
				new Default_Process_Event(),
				new Gateway_Success_Event(),
				new Gateway_Failed_Event(),
				new Bad_Request_Event(),
				new Default_Required_Event(),
				new On_Dynamic_State_Event(),
			)
		);
	}

	/**
	 * @param string $current
	 * @param null $form_id
	 *
	 * @throws Action_Exception
	 */
	public function execute( string $current, $form_id = null ) {
		try {
			$event = $this->get_event( $current );
		} catch ( Repository_Exception $exception ) {
			return;
		}

		// save all form actions
		jet_fb_action_handler()->set_form_id( $form_id );

		do_action( 'jet-form-builder/before-trigger-event', $event );
		$event->execute();
		do_action( 'jet-form-builder/after-trigger-event', $event );
	}

	/**
	 * @param string $slug
	 *
	 * @return Base_Event
	 * @throws Repository_Exception
	 */
	public function get_event( string $slug ): Base_Event {
		return $this->rep_get_item( $slug );
	}

	public function get_gateways_events(): array {
		/** @var Base_Event[] $response */
		$response = $this->rep_get_items();

		foreach ( $response as $key => $event ) {
			if ( ! ( $event instanceof Base_Gateway_Event ) ) {
				unset( $response[ $key ] );
			}
		}

		return $response;
	}

	public function get_actions_events(): array {
		/** @var Base_Event[] $response */
		$response = $this->rep_get_items();

		foreach ( $response as $key => $event ) {
			if ( ! ( $event instanceof Base_Action_Event ) ) {
				unset( $response[ $key ] );
			}
		}

		return $response;
	}


	/**
	 * @return array
	 */
	public function to_array(): array {
		return array(
			'types' => Array_Tools::to_array( $this->rep_get_items() ),
		);
	}
}
