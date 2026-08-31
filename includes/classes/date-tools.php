<?php


namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Date_Tools {

	const TIME     = 1;
	const DATE     = 2;
	const DATETIME = 3;

	public static function time_to_string( string $value, int $stamp_format = self::DATE ): string {
		// Min/max come from the field block's own attributes (admin-authored).
		$value = jet_fb_parse_dynamic_trusted( $value );

		if ( ! is_scalar( $value ) ) {
			return '';
		}

		if ( self::TIME === $stamp_format ) {
			return $value;
		}

		$format = '';

		switch ( $stamp_format ) {
			case self::DATE:
				$format = 'Y-m-d';
				break;
			case self::DATETIME:
				$format = 'Y-m-d\TH:i';
				break;
		}

		// phpcs:ignore WordPress.DateTime.RestrictedFunctions
		return Tools::is_valid_timestamp( $value ) ? date( $format, $value ) : $value;
	}

}
