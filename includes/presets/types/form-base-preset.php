<?php


namespace Jet_Form_Builder\Presets\Types;



class Form_Base_Preset extends Base_Preset {

	public function get_fields_map() {
		return ! empty( $this->data['fields_map'] ) ? $this->data['fields_map'] : $this->defaults['fields_map'];
	}

	public function get_preset_value() {

		if ( empty( $this->data['enabled'] ) || ! $this->source ) {
			return $this->result;
		}

		return $this->
	}

	/**
	 * @return mixed
	 */
	public function get_source() {
		// TODO: Implement get_source() method.
	}
}