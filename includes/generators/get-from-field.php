<?php

namespace Jet_Form_Builder\Generators;

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
	 * @return array
	 */
	public function generate( $field ) {

		$all_fields  = jet_engine()->meta_boxes->get_registered_fields();
		$found_field = null;
		$result      = array();

		foreach ( $all_fields as $object => $fields ) {
			foreach ( $fields as $field_data ) {
				if ( ! empty( $field_data['name'] ) && $field === $field_data['name'] ) {
					$found_field = $field_data;
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
