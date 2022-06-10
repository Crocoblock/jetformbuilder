<?php


namespace Jet_Form_Builder\Actions;

use Jet_Form_Builder\Actions\Events\Base_Event;
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
			$item = Events_Manager::instance()->rep_get_item( $event );
		} catch ( Repository_Exception $exception ) {
			return $this;
		}

		return $this->add( $item );
	}

}
