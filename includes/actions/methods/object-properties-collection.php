<?php


namespace Jet_Form_Builder\Actions\Methods;


use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;

class Object_Properties_Collection extends Collection {

	public function get_dynamic(): \Generator {
		foreach ( Array_Tools::reverse( $this ) as $current ) {
			if ( ! is_a( $current, Object_Dynamic_Property::class ) ) {
				continue;
			}
			yield $current;
		}
	}

}