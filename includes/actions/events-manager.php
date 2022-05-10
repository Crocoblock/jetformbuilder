<?php


namespace Jet_Form_Builder\Actions;


use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Actions\Events\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Failed_Gateway_Event;
use Jet_Form_Builder\Actions\Events\Success_Gateway_Event;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

/**
 * @method static Events_Manager instance()
 *
 * Class Events_Manager
 * @package Jet_Form_Builder\Actions
 */
class Events_Manager {

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

	/**
	 * @return array
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/event-types',
			array(
				new Default_Process_Event(),
				new Success_Gateway_Event(),
				new Failed_Gateway_Event(),
			)
		);
	}
}