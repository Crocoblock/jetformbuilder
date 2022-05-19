<?php


namespace Jet_Form_Builder\Actions;


use Jet_Form_Builder\Actions\Events\Base_Action_Event;
use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Actions\Events\Base_Gateway_Event;
use Jet_Form_Builder\Actions\Events\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Failed_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Success_Event;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

/**
 * @method static Events_Manager instance()
 *
 * Class Events_Manager
 * @package Jet_Form_Builder\Actions
 */
class Events_Manager implements Arrayable {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	private $types = array();

	/** @var Base_Event|null */
	private $current;

	public function __construct() {
		$this->rep_install();
	}

	/**
	 * @param string $current
	 *
	 * @return bool
	 */
	public function set_current( string $current ): bool {
		try {
			$event = $this->get_event( $current );
		} catch ( Repository_Exception $exception ) {
			return false;
		}

		$this->current = $event;

		return true;
	}

	/**
	 * @return Base_Event|null
	 */
	public function get_current() {
		return $this->current;
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
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/event-types',
			array(
				new Default_Process_Event(),
				new Gateway_Success_Event(),
				new Gateway_Failed_Event(),
			)
		);
	}

	/**
	 * @return array
	 */
	public function to_array(): array {
		return array(
			'types' => Array_Tools::to_array( $this->rep_get_items() ),
			//'locked' =>
		);
	}
}