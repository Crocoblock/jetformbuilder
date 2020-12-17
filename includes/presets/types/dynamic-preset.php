<?php


namespace Jet_Form_Builder\Presets\Types;


class Dynamic_Preset extends Base_Preset {

	protected $result = array(
		'rewrite' => true,
		'value'   => '',
	);

	public function get_fields_map() {
		return array(
			$this->field => array(
				'prop' => ! empty( $this->data['current_field_prop'] ) ? $this->data['current_field_prop'] : '',
				'key'  => ! empty( $this->data['current_field_key'] ) ? $this->data['current_field_key'] : '',
			),
		);
	}

	public function get_preset_value() {

		if ( ! $this->source ) {
			return $this->result;
		}

		if ( ! $this->field_data ) {
			return $this->result;
		}

		return $this->__get_values();
	}

	/**
	 * @return mixed
	 */
	public function get_source() {
		// TODO: Implement get_source() method.
	}
}