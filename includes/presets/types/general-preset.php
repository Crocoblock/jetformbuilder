<?php


namespace Jet_Form_Builder\Presets\Types;



use Jet_Form_Builder\Plugin;

class General_Preset extends Base_Preset {

	public function is_active_preset( $args ) {
		return $this->data['enabled'];
	}

	public function get_fields_map() {
		return ! empty( $this->data['fields_map'] ) ? $this->data['fields_map'] : $this->defaults['fields_map'];
	}

	public function get_preset_value() {
		if ( empty( $this->data['enabled'] ) || ! $this->source->src || empty( $this->field_data ) ) {
			return $this->result;
		}

		return $this->_get_values();
	}

	public function preset_source( $form_id ) {
		return Plugin::instance()->post_type->get_preset( $form_id );
	}


}