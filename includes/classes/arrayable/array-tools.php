<?php


namespace Jet_Form_Builder\Classes\Arrayable;

use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Je_Relation_Property;

class Array_Tools {

	/**
	 * @param array|\Generator $payload
	 *
	 * @return array
	 */
	public static function to_array( $payload ): array {
		if ( $payload instanceof \Generator ) {
			return self::from_generator( $payload );
		}

		return self::from_array( $payload );
	}

	public static function from_generator( \Generator $generator ): array {
		$response = array();

		foreach ( $generator as $value ) {
			$response[] = $value;
		}

		return $response;
	}

	/**
	 * @param array|Collection $iterator
	 *
	 * @return \Generator
	 */
	public static function reverse( $iterator ): \Generator {
		for ( $current = count( $iterator ) - 1; $current >= 0; $current -- ) {
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

}
