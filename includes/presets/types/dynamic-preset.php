<?php


namespace Jet_Form_Builder\Presets\Types;

use Jet_Form_Builder\Exceptions\Plain_Default_Exception;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Sources\Base_Source;

class Dynamic_Preset extends Base_Preset {

	private $field;
	public $json_value_key = 'default';

	const SLUG = 'dynamic';

	public function get_slug(): string {
		return self::SLUG;
	}

	public function is_unique(): bool {
		return true;
	}

	public function set_key( $json_value_key ): Dynamic_Preset {
		$this->json_value_key = $json_value_key;

		return $this;
	}

	public function get_source( $args = array() ): Base_Source {
		$this->field = $args['name'] ?? '';

		return parent::get_source( $args );
	}

	public function get_fields_map() {
		return array(
			$this->field => array(
				'prop'  => ! empty( $this->data['current_field_prop'] ) ? $this->data['current_field_prop'] : '',
				'key'   => ! empty( $this->data['current_field_key'] ) ? $this->data['current_field_key'] : '',
				'other' => $this->data,
			),
		);
	}

	/**
	 * @param $source
	 *
	 * @return bool
	 * @throws Plain_Default_Exception
	 */
	public function is_active_preset_json( $source ) {
		$dynamic_preset = json_decode( $source, true );

		if ( empty( $dynamic_preset['jet_preset'] ) && strlen( $source ) ) {
			$result = isset( $args['type'] )
				? Preset_Manager::instance()->prepare_result( $args['type'], $source )
				: $source;

			throw new Plain_Default_Exception( $result );
		}

		if ( empty( $dynamic_preset['jet_preset'] ) ) {
			return false;
		}

		$this->set_init_data( $dynamic_preset );

		return true;
	}


	/**
	 * @param $args
	 *
	 * @return bool
	 * @throws Plain_Default_Exception
	 */
	public function is_active_preset( $args ) {

		if ( ! isset( $args[ $this->json_value_key ] ) || is_array( $args[ $this->json_value_key ] ) ) {
			return false;
		}
		$source = (string) $args[ $this->json_value_key ];

		return $this->is_active_preset_json( $source );
	}

	/**
	 * @param $args
	 * @param string $value_key
	 *
	 * @return mixed|string
	 */
	public function parse_value( $args, $value_key = 'default' ) {
		$this->set_key( $value_key );
		try {
			if ( ! $this->is_active_preset( $args ) ) {
				return $args[ $this->json_value_key ];
			}
		} catch ( Plain_Default_Exception $exception ) {
			return $exception->getMessage();
		}

		return $this->get_result();
	}

	/**
	 * @param $json_string
	 *
	 * @return mixed
	 */
	public function parse_json( $json_string ) {
		try {
			if ( ! $this->is_active_preset_json( $json_string ) ) {
				return $json_string;
			}
		} catch ( Plain_Default_Exception $exception ) {
			return $exception->getMessage();
		}

		return $this->get_result();
	}

	/**
	 * @return mixed|string
	 */
	public function get_result() {
		try {
			return $this->get_source()->result();
		} catch ( Preset_Exception $exception ) {
			return '';
		}
	}


}
