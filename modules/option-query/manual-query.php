<?php


namespace JFB_Modules\Option_Query;

use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Traits\Option_Query_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Manual_Query implements Option_Query_It {

	use Option_Query_Trait;

	public function rep_item_id() {
		return 'manual_input';
	}

	public function fetch(): \Generator {
		if ( ! $this->get_query( 'options' ) ) {
			return;
		}

		$options = $this->get_query( 'options' );

		foreach ( $options as $index => $option ) {
			$item = array(
				'value' => $option['value'] ?? $index,
			);

			if ( isset( $option['calculate'] ) && '' !== $option['calculate'] ) {
				$item['calculate'] = $option['calculate'];
			}

			$item['label'] = $option['label'] ?? $item['value'];

			if ( $this->has_query( 'search' ) &&
				false === strpos( $item['label'], $this->get_query( 'search' ) )
			) {
				continue;
			}

			yield $item;
		}
	}

}
