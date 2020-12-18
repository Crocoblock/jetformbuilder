<?php


namespace Jet_Form_Builder\Presets\Types;


use Jet_Form_Builder\Classes\Factory;

abstract class Base_Preset {

	const SOURCES_NAMESPACE = 'Jet_Form_Builder\\Presets\\Sources\\';

	public $result = array(
		'rewrite' => false,
		'value'   => null,
	);
	public $source;
	public $defaults = array(
		'enabled'    => false,
		'from'       => 'default',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);
	public $from;
	public $fields_map;
	public $field_data = array();
	public $array_allowed;

	public $data;
	public $field;
	public $args;

	abstract public function get_fields_map();

	abstract public function get_preset_value();

	public function is_active_preset( $args ) {
		return false;
	}

	public function set_init_data( $data = array() ) {
		if ( ! empty( $data ) && empty( $this->data ) ) {
			$this->data = $data;
		}

		return $this;
	}

	public function set_additional_data( $args = array() ) {
		if ( ! empty( $args['name'] ) ) {
			$this->field = $args['name'];
		}
		if ( ! empty( $args ) ) {
			$this->args = $args;
		}
		$this->set_source();
		$this->fields_map = $this->get_fields_map();
		$this->set_field_data();
		$this->set_array_allowed();

		return $this;
	}

	private function set_array_allowed() {
		$this->array_allowed = in_array( $this->args['type'], array( 'checkboxes' ) ) || ! empty( $args['array_allowed'] );
	}

	private function set_field_data() {
		if ( $this->has_field_in_map() ) {
			$this->field_data = $this->fields_map[ $this->field ];
		}
	}

	public function has_field_in_map() {
		return ( empty( $map[ $this->field ] ) || ( empty( $map[ $this->field ]['prop'] ) && empty( $map[ $this->field ]['key'] ) ) );
	}


	public function set_source() {
		$this->from = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];
		$from_manager = ( new Factory( self::SOURCES_NAMESPACE ) )->prefix( 'preset-source-' );

		$this->source = $from_manager->create_one( $this->from, $this )->get_source();
	}

	public function _get_values() {

		if ( ! $this->field_data ) {
			return $this->result;
		}

		return $this->source->result();
	}

}