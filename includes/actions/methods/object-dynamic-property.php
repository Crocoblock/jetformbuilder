<?php


namespace Jet_Form_Builder\Actions\Methods;


interface Object_Dynamic_Property {

	public function is_supported( string $key, $value ): bool;

}