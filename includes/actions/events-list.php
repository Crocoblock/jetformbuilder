<?php


namespace Jet_Form_Builder\Actions;

use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class Events_List extends Collection {

	public static function create( array $events ): Events_List {
		$collection = new Events_List();
		foreach ( $events as $event ) {
			$collection->push( $event );
		}

		return $collection;
	}

	public function push( $event ): Events_List {
		if ( $event instanceof Base_Event ) {
			return $this->add( $event );
		}

		try {
			$item = Events_Manager::instance()->rep_clone_item( $event );
		} catch ( Repository_Exception $exception ) {
			return $this->add( Events_Manager::instance()->get_never_event() );
		}

		return $this->add( $item );
	}

	public function in_array( $state ): bool {
		if ( ! ( $state instanceof Base_Executor ) ) {
			return parent::in_array( $state );
		}
		$executor_name = get_class( $state );

		/** @var Base_Event $event */
		foreach ( $this as $event ) {
			if ( ! in_array( $executor_name, $event->ignored_executors(), true ) ) {
				return parent::in_array( $state->get_event() );
			}
		}

		return 0 !== count( $this );
	}

}
