<?php


namespace Jet_Form_Builder\Presets\Sources;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Dev_Mode\Manager;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Types\Base_Preset;

abstract class Base_Source {

	protected $fields_map;
	protected $field_data = array();
	protected $field_args;
	protected $preset_data;
	protected $field = '__condition__';
	protected $prop;
	private $src;

	const FUNC_PREFIX = '_source__';
	const EMPTY = '';

	abstract public function query_source();

	abstract public function get_id();

	public function init_source( $fields_map, $field_args, $preset_data ) {
		$this->fields_map  = $fields_map;
		$this->field_args  = $field_args;
		$this->preset_data = $preset_data;
		$this->field       = $this->field_args['name'] ?? '';
		$this->field_data  = $this->get_field_data();
		$this->prop        = $this->get_prop();
		$this->src         = $this->_query_source();

		$this->after_init();

		return $this;
	}

	public function after_init() {
	}

	public function _query_source() {
		if ( $this->prop ) {
			return $this->query_source();
		}
	}

	protected function get_field_data() {
		if ( $this->has_field_in_map() ) {
			return $this->fields_map[ $this->field ];
		}
	}

	public function has_field_in_map() {
		return ( isset( $this->fields_map[ $this->field ] ) && ( isset( $this->fields_map[ $this->field ]['prop'] ) || isset( $this->fields_map[ $this->field ]['key'] ) ) );
	}

	public function src() {
		return $this->src;
	}

	protected function can_get_preset() {
		return ( ! empty( $this->src() ) && ! is_wp_error( $this->src() ) );
	}

	public function default_prop( string $prop ) {
		$source = $this->src;

		if ( isset( $source->$prop ) ) {
			return $source->$prop;
		} elseif ( isset( $source->data ) && isset( $source->data->$prop ) ) {
			return $source->data->$prop;
		}

		return self::EMPTY;
	}

	protected function get_prop() {
		return ( ! empty( $this->field_data['prop'] ) ? $this->field_data['prop'] : false );
	}

	public function get_result_on_prop() {
		$func_name = self::FUNC_PREFIX . $this->prop;

		if ( is_callable( array( $this, $func_name ) ) ) {
			return call_user_func( array( $this, $func_name ) );
		}

		return $this->default_prop( $this->prop );
	}

	final public function result() {
		if ( ! $this->can_get_preset() ) {
			return self::EMPTY;
		}

		return $this->parse_result_value( $this->get_result_on_prop() );
	}


	/**
	 * Try to get values from request if passed
	 *
	 * @param  [type] $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function maybe_adjust_value() {

		$value       = isset( $this->field_args['default'] ) ? $this->field_args['default'] : '';
		$request_val = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

		if ( isset( $request_val[ $this->field ] ) ) {
			$value = $request_val[ $this->field ];
		}

		return $value;

	}

	public function parse_result_value( $value ) {
		if ( ! isset( $this->field_args['type'] ) ) {
			return $value;
		}

		return Preset_Manager::instance()->prepare_result( $this->field_args['type'], $value );
	}

}