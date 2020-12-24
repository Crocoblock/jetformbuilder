<?php


namespace Jet_Form_Builder\Presets\Types;


class Dynamic_Preset extends Base_Preset {

	public $json_value_key;

	public function __construct( $json_value_key = 'default' ) {
		$this->json_value_key = $json_value_key;
	}

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

		if ( empty( $args[ $this->json_value_key ] ) ) {
			return false;
		}

		$dynamic_preset = json_decode( $args[ $this->json_value_key ], true );

		if ( empty( $dynamic_preset ) || empty( $dynamic_preset['jet_preset'] ) ) {
			return false;
		}

		$this->set_init_data( $dynamic_preset );

		return true;
	}

	public function parse_value( $args ) {

		if ( ! $this->is_active_preset( $args ) ) {
			return $args[ $this->json_value_key ];
		}

		return $this->set_additional_data()->get_preset_value()['value'];
	}

}