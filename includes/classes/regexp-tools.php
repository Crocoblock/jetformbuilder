<?php


namespace Jet_Form_Builder\Classes;


class Regexp_Tools {

	public static function has_macro( $value ): bool {
		if ( ! is_scalar( $value ) ) {
			return false;
		}

		return preg_match( '/%([\w\-]+::)?(.*?)%/', (string) $value );
	}

}