<?php

namespace Jet_Form_Builder\Generators;

use Jet_Engine\Query_Builder\Manager as Query_Manager;

class Get_From_Je_Query extends Base {

	/**
	 * Returns generator ID
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_query';
	}

	/**
	 * Returns generator name
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from JetEngine Query', 'jet-form-builder' );
	}

	public function can_generate() {
		return function_exists( 'jet_engine' );
	}

	/**
	 * Returns generated options list
	 *
	 * @param $args
	 *
	 * @return array
	 */
	public function generate( $args ) {

		$field = isset( $args['generator_field'] ) ? $args['generator_field'] : $args;

		$args = explode( '|', $field );

		$value_field      = $args[1] ?? 'ID';
		$label_field      = $args[2] ?? 'post_title';
		$calculated_field = $args[3] ?? false;
		$additional_args  = $args[4] ?? false;

		$query  = Query_Manager::instance()->get_query_by_id( $args[0] );
		$result = array();

		if ( ! $query ) {
			return $result;
		}

		$query->setup_query();
		$objects = $query->_get_items();

		foreach ( $objects as $object ) {
			// convert to array because in 8.2 dynamic properties will be deprecated
			$converted = get_object_vars( $object );

			$value      = $converted[ $value_field ] ?? false;
			$label      = $converted[ $label_field ] ?? $value;
			$calculated = $converted[ $calculated_field ] ?? false;

			$value      = apply_filters( 'jet-forms-generate-from-query/value', $value, $object, $additional_args );
			$label      = apply_filters( 'jet-forms-generate-from-query/label', $label, $object, $additional_args );
			$calculated = apply_filters( 'jet-forms-generate-from-query/calculated', $calculated, $object, $additional_args );

			$item = array();

			if ( $value ) {
				$item['value'] = $value;
				$item['label'] = $label;
			}

			if ( $calculated ) {
				$item['calculate'] = $calculated;
			}

			if ( ! empty( $item ) ) {
				$result[] = $item;
			}
		}

		return $result;

	}

}
