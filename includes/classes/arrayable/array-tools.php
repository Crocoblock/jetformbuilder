<?php


namespace Jet_Form_Builder\Classes\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Array_Tools {

	/**
	 * @param array|\Generator $payload
	 *
	 * @return array
	 */
	public static function to_array( $payload ): array {
		if ( $payload instanceof \Generator ) {
			return iterator_to_array( $payload );
		}

		return self::from_array( $payload );
	}

	/**
	 * @param array|Collection $iterator
	 *
	 * @return \Generator
	 */
	public static function reverse( $iterator ): \Generator {
		for ( $current = count( $iterator ) - 1; $current >= 0; $current-- ) {
			yield $iterator[ $current ];
		}
	}

	public static function from_array( array $payload ): array {
		foreach ( $payload as $index => $object ) {
			if ( is_array( $object ) ) {
				continue;
			}

			/** @var Arrayable $object */
			if ( is_object( $object ) && ! ( $object instanceof Arrayable ) ) {
				wp_die( 'Must implements Arrayable.', 'Illegal item of array' );
			}

			try {
				$payload[ $index ] = $object->to_array();
			} catch ( Array_Continue_Exception $exception ) {
				unset( $payload[ $index ] );
				continue;
			}
		}

		return array_values( $payload );
	}

	/**
	 * Copy-paste from WP-core function
	 *
	 * @param array $input_array
	 * @param array|string $path
	 * @param mixed $default_value
	 *
	 * @return array|mixed
	 * @see \_wp_array_get()
	 *
	 * @since 3.1.0
	 */
	public static function get( array $input_array, $path, $default_value = false ) {
		$path = self::path( $path );

		foreach ( $path as $path_element ) {
			if (
				( ! is_string( $path_element ) && ! is_integer( $path_element ) && ! is_null( $path_element ) ) ||
				! array_key_exists( $path_element, $input_array )
			) {
				return $default_value;
			}
			$input_array = $input_array[ $path_element ];
		}

		return $input_array;
	}

	/**
	 * Copy-paste from WP-core function
	 *
	 * @param array $input_array
	 * @param array|string $path
	 * @param null $value
	 *
	 * @since 3.1.0
	 *
	 * @see \_wp_array_set()
	 */
	public static function set( array &$input_array, $path, $value = null ) {
		$path        = self::path( $path );
		$path_length = count( $path );

		if ( 0 === $path_length ) {
			return;
		}

		foreach ( $path as $path_element ) {
			if (
				! is_string( $path_element ) && ! is_integer( $path_element ) &&
				! is_null( $path_element )
			) {
				return;
			}
		}

		for ( $i = 0; $i < $path_length - 1; ++$i ) {
			$path_element = $path[ $i ];
			if (
				! array_key_exists( $path_element, $input_array ) ||
				! is_array( $input_array[ $path_element ] )
			) {
				$input_array[ $path_element ] = array();
			}
			$input_array = &$input_array[ $path_element ]; // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.VariableRedeclaration
		}

		$input_array[ $path[ $i ] ] = $value;
	}

	/**
	 * @param $source
	 *
	 * @return int|string|null
	 */
	public static function last_key( $source ) {
		if ( function_exists( 'array_key_last' ) ) {
			// phpcs:ignore PHPCompatibility.FunctionUse.NewFunctions
			return array_key_last( $source );
		}

		if ( ! is_array( $source ) || empty( $source ) ) {
			return null;
		}

		end( $source );

		return key( $source );
	}

	/**
	 * @param $source
	 *
	 * @return int|string|null
	 */
	public static function last( $source ) {
		if ( ! is_array( $source ) || empty( $source ) ) {
			return null;
		}

		$key = self::last_key( $source );

		return $source[ $key ];
	}

	public static function path( $items ): array {
		return iterator_to_array( self::generate_path( $items ) );
	}

	private static function generate_path( $items ): \Generator {
		if ( is_string( $items ) ) {
			$items = explode( '.', $items );
		}
		foreach ( $items as $item ) {
			yield $item;
		}
	}

}
