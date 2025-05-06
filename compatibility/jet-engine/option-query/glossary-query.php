<?php


namespace JFB_Compatibility\Jet_Engine\Option_Query;

use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Traits\Option_Query_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Glossary_Query implements Option_Query_It {

	use Option_Query_Trait;

	public function rep_item_id() {
		return 'glossary';
	}

	public function fetch(): \Generator {
		$glossary_id = absint( $this->get_query( 'id' ) );
		$glossary    = jet_engine()->glossaries->data->get_item_for_edit( $glossary_id );

		if ( empty( $glossary['fields'] ) ) {
			return;
		}

		foreach ( $glossary['fields'] as $field ) {
			if ( $this->has_query( 'search' ) &&
				false === stripos( $field['label'], $this->get_query( 'search' ) )
			) {
				continue;
			}
			yield $field;
		}
	}

}
