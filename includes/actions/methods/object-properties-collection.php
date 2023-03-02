<?php


namespace Jet_Form_Builder\Actions\Methods;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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