<?php

namespace JFB_Modules\Option_Field;

use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Validation\Messages\Is_Selections_Min;
use JFB_Modules\Validation\Messages\Is_Selections_Max;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Selection_Limit {

	public static function get_limit( array $settings, string $type, string $bound = 'max' ): int {
		if (
			'checkbox-field' !== $type &&
			! ( 'select-field' === $type && ! empty( $settings['multiple'] ) ) &&
			! ( 'choices-field' === $type && ! empty( $settings['allow_multiple'] ) )
		) {
			return 0;
		}

		$minimum = max( 0, (int) ( $settings['min_selections'] ?? 0 ) );
		$maximum = max( 0, (int) ( $settings['max_selections'] ?? 0 ) );

		return 'min' === $bound ? $minimum : ( $maximum ? max( $minimum, $maximum ) : 0 );
	}

	public static function get_message( int $limit ): string {
		return str_replace( '%this(max_selections)%', (string) $limit, ( new Is_Selections_Max() )->get_initial() );
	}

	public static function get_min_message( int $limit ): string {
		return str_replace( '%this(min_selections)%', (string) $limit, ( new Is_Selections_Min() )->get_initial() );
	}

	public static function get_attributes( array $settings, string $type ): array {
		$limit   = self::get_limit( $settings, $type );
		$minimum = self::get_limit( $settings, $type, 'min' );

		$attributes = $limit ? array(
			'data-jfb-max-selections'         => $limit,
			'data-jfb-max-selections-message' => self::get_message( $limit ),
		) : array();

		if ( $minimum ) {
			$attributes['data-jfb-min-selections']         = $minimum;
			$attributes['data-jfb-min-selections-message'] = self::get_min_message( $minimum );
		}

		return $attributes;
	}

	public static function validate( Field_Data_Parser $parser ) {
		$type    = $parser->get_type();
		$limit   = self::get_limit( $parser->get_settings(), $type );
		$minimum = self::get_limit( $parser->get_settings(), $type, 'min' );

		if ( ! $limit && ! $minimum ) {
			return;
		}

		$value  = $parser->get_value();
		foreach ( (array) $value as $option ) {
			if ( null !== $option && ! is_scalar( $option ) ) {
				$parser->collect_error( 'invalid_value' );
				return;
			}
		}

		// Match the core validator: visibility of conditional fields is only known in the browser.
		if ( $parser->is_inside_conditional() ) {
			return;
		}

		$values = array_filter(
			'' === $value ? array() : (array) $value,
			static function ( $value ) use ( $type ) {
				return null !== $value && false !== $value && ( 'select-field' !== $type || '' !== $value );
			}
		);

		if ( $limit && count( $values ) > $limit ) {
			$parser->collect_error( 'too_many_selections', self::get_message( $limit ) );
		}

		$filled = array_filter(
			$values,
			static function ( $value ) {
				return '' !== $value;
			}
		);

		if ( $values && count( $filled ) < $minimum ) {
			$parser->collect_error( 'too_few_selections', self::get_min_message( $minimum ) );
		}
	}
}
