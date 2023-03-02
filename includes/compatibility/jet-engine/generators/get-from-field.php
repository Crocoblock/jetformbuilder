<?php

namespace Jet_Form_Builder\Compatibility\Jet_Engine\Generators;

use Jet_Form_Builder\Generators\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Get_From_Field extends Base {

	/**
	 * Returns generator ID
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_field';
	}

	/**
	 * Returns generator name
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from JetEngine field options', 'jet-form-builder' );
	}

	/**
	 * Returns generated options list
	 *
	 * @param $args
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$field       = $args['generator_field'] ?? '';
		$all_fields  = jet_engine()->meta_boxes->get_registered_fields();
		$found_field = null;
		$result      = array();
		$parse_field = explode( '|', $field );
		$field       = $parse_field[0];
		$sub_field   = isset( $parse_field[1] ) ? $parse_field[1] : false;

		foreach ( $all_fields as $object => $fields ) {
			foreach ( $fields as $field_data ) {
				if ( ! empty( $field_data['name'] ) && $field === $field_data['name'] ) {
					$found_field = $field_data;
				}
			}
		}

		if ( ! empty( $sub_field ) && ! empty( $found_field['repeater-fields'] ) ) {
			foreach ( $found_field['repeater-fields'] as $repeater_field_data ) {
				if ( ! empty( $repeater_field_data['name'] ) && $sub_field === $repeater_field_data['name'] ) {
					$found_field = $repeater_field_data;
				}
			}
		}

		if ( empty( $found_field['options'] ) ) {
			return $result;
		}

		foreach ( $found_field['options'] as $option ) {
			$result[] = array(
				'value' => $option['key'],
				'label' => $option['value'],
			);
		}

		return $result;

	}

}
