<?php


namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;

abstract class Base_Source {

	protected $fields_map;
	protected $field_data = array();
	protected $field_args;
	protected $preset_data;
	protected $field = '__condition__';
	protected $prop;
	private $src;

	const FUNC_PREFIX = '_source__';
	const EMPTY       = '';

	abstract public function query_source();

	abstract public function get_id();

	public function condition(): bool {
		return true;
	}

	/**
	 * @param $fields_map
	 * @param $field_args
	 * @param $preset_data
	 *
	 * @return $this
	 * @throws Preset_Exception
	 */
	public function init_source( $fields_map, $field_args, $preset_data ) {
		$this->fields_map  = $fields_map;
		$this->field_args  = $field_args;
		$this->preset_data = $preset_data;
		$this->field       = $this->field_args['name'] ?? '';
		$this->field_data  = $this->get_field_data();
		$this->prop        = $this->get_prop();
		$this->src         = $this->maybe_query_source();

		$this->after_init();

		return $this;
	}

	public function after_init() {
	}

	public function after_register() {
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function maybe_query_source() {
		if ( $this->prop ) {
			return $this->query_source();
		}

		throw new Preset_Exception( 'Empty `prop` in ' . get_class( $this ), $this->field_data );
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	protected function get_field_data() {
		if ( $this->has_field_in_map() ) {
			return $this->fields_map[ $this->field ];
		}

		throw new Preset_Exception(
			"Empty `{$this->field}` `fields_map` in " . get_class( $this ),
			$this->fields_map
		);
	}

	public function has_field_in_map() {
		return ( isset( $this->fields_map[ $this->field ]['prop'] ) || isset( $this->fields_map[ $this->field ]['key'] ) );
	}

	public function src() {
		return $this->src;
	}

	protected function can_get_preset() {
		return ( ! empty( $this->src() ) && ! is_wp_error( $this->src() ) );
	}

	/**
	 * @throws Preset_Exception
	 */
	final protected function throw_if_preset_not_available() {
		if ( ! $this->can_get_preset() ) {
			throw new Preset_Exception( static::class . '::can_get_preset return FALSE' );
		}
	}


	/**
	 * @param string $prop
	 *
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function default_prop( string $prop ) {
		$source = $this->src;

		if ( isset( $source->$prop ) ) {
			return $source->$prop;
		} elseif ( isset( $source->data ) && isset( $source->data->$prop ) ) {
			return $source->data->$prop;
		}

		throw new Preset_Exception( "Can't get value from " . get_class( $source ) );
	}

	protected function get_prop() {
		return ( ! empty( $this->field_data['prop'] ) ? $this->field_data['prop'] : false );
	}

	/**
	 * @return false|mixed
	 * @throws Preset_Exception
	 */
	public function get_result_on_prop() {
		$func_name = self::FUNC_PREFIX . $this->prop;

		if ( is_callable( array( $this, $func_name ) ) ) {
			return call_user_func( array( $this, $func_name ) );
		}

		return $this->default_prop( $this->prop );
	}


	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	final public function result() {
		$this->throw_if_preset_not_available();

		return $this->parse_result_value( $this->get_result_on_prop() );
	}

	public function parse_result_value( $value ) {
		if ( ! isset( $this->field_args['type'] ) ) {
			return $value;
		}

		return Preset_Manager::instance()->prepare_result( $this->field_args['type'], $value );
	}

}
