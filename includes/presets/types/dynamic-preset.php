<?php


namespace Jet_Form_Builder\Presets\Types;


use Jet_Form_Builder\Exceptions\Plain_Default_Exception;

class Dynamic_Preset extends Base_Preset {

	public $json_value_key;

	public function __construct( $json_value_key = 'default' ) {
		$this->json_value_key = $json_value_key;
	}

	public function get_fields_map() {
		return array(
			$this->field => array(
				'prop'  => ! empty( $this->data['current_field_prop'] ) ? $this->data['current_field_prop'] : '',
				'key'   => ! empty( $this->data['current_field_key'] ) ? $this->data['current_field_key'] : '',
				'other' => $this->data
			),
		);
	}


	/**
	 * @param $args
	 *
	 * @return bool
	 * @throws Plain_Default_Exception
	 */
	public function is_active_preset( $args ) {

		if ( empty( $args[ $this->json_value_key ] ) || is_array( $args[ $this->json_value_key ] ) ) {
			return false;
		}
		$source = $args[ $this->json_value_key ];

		$dynamic_preset = json_decode( $source, true );

		if ( empty( $dynamic_preset['jet_preset'] ) && $source ) {
			throw new Plain_Default_Exception( $source );
		}

		if ( empty( $dynamic_preset['jet_preset'] ) ) {
			return false;
		}

		$this->set_init_data( $dynamic_preset );

		return true;
	}

	public function parse_value( $args ) {
		try {
			if ( ! $this->is_active_preset( $args ) ) {
				return $args[ $this->json_value_key ];
			}
		} catch ( Plain_Default_Exception $exception ) {
			return $exception->getMessage();
		}

		return $this->set_additional_data()->source->result();
	}

}