<?php


namespace Jet_Form_Builder\Classes;


class Date_Tools {

	public static function time_to_string( string $value, bool $time = false ): string {
		$value = jet_fb_parse_dynamic( $value );

		if ( ! is_scalar( $value ) ) {
			return '';
		}

		$format = $time ? 'Y-m-d\TH:i' : 'Y-m-d';

		return Tools::is_valid_timestamp( $value ) ? date( $format, $value ) : $value;
	}

}