<?php


namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Regexp_Tools {

	public static function has_macro( $value ): bool {
		if ( ! is_scalar( $value ) || ! is_string( $value ) ) {
			return false;
		}

		return preg_match( '/%([\w\-]+::)?(.*?)%/', urldecode( (string) $value ) );
	}

}