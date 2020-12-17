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

	public function set_init_data( $data = array() ) {
		if ( ! empty( $data ) && empty( $this->data ) ) {
			$this->data = $data;
		}

		return $this;
	}

	public function set_additional_data( $field = null, $args = array() ) {
		if ( ! empty( $field ) ) {
			$this->field = $field;
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
		$source     = array();

		switch ( $this->from ) {
			case 'query_vars':
				$source = $_GET;
				break;

			case 'user':
				$user_from = ! empty( $this->data['user_from'] ) ? $this->data['user_from'] : $this->defaults['user_from'];

				if ( 'current_user' === $user_from ) {
					if ( is_user_logged_in() ) {
						$source = wp_get_current_user();
					}
				} else {

					$var     = ! empty( $this->data['query_var'] ) ? $this->data['query_var'] : $this->defaults['query_var'];
					$user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;

					$source = get_user_by( 'ID', $user_id );

				}

				break;

			default:

				$post_from = ! empty( $this->data['post_from'] ) ? $this->data['post_from'] : $this->defaults['post_from'];

				if ( 'current_post' === $post_from ) {
					$post_id = get_the_ID();
				} else {
					$var     = ! empty( $this->data['query_var'] ) ? $this->data['query_var'] : $this->defaults['query_var'];
					$post_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;
				}

				if ( $post_id ) {
					$source = get_post( $post_id );
				}

				break;
		}

		$this->source = $source;
	}

	abstract public function get_preset_value();

	public function __get_values() {

		if ( ! $this->field_data ) {
			return $this->result;
		}

		$from_manager = ( new Factory( self::SOURCES_NAMESPACE ) )->prefix( 'preset-source-' );

		return $from_manager->create_one( $this->from, $this )->result();
	}

}