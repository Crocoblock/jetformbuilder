<?php


namespace Jet_Form_Builder\Actions\Methods;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Object_Dynamic_Property {

	public function is_supported( string $key, $value ): bool;

}