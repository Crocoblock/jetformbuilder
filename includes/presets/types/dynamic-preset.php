<?php


namespace Jet_Form_Builder\Presets\Types;


class Dynamic_Preset extends Base_Preset {


	public $result = array(
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

		if ( ! $this->source->src ) {
			return $this->result;
		}

		if ( ! $this->field_data ) {
			return $this->result;
		}

		return $this->_get_values();
	}

	public function is_active_preset( $args ) {

		if ( empty( $args['default'] ) ) {
			return false;
		}

		$dynamic_preset = json_decode( $args['default'], true );

		if ( empty( $dynamic_preset ) || empty( $dynamic_preset['jet_preset'] ) ) {
			return false;
		}

		$this->set_init_data( $dynamic_preset );

		return true;
	}

}