<?php


namespace Jet_Form_Builder\Presets\Types;


use Jet_Form_Builder\Classes\Factory;
use Jet_Form_Builder\Classes\Tools;

abstract class Base_Preset {

	const SOURCES_NAMESPACE = 'Jet_Form_Builder\\Presets\\Sources\\';

	public $result = array(
		'rewrite' => false,
		'value'   => null,
	);
	public $source;
	public $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);
	public $from;
	public $fields_map;
	public $field_data = array();

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

		return $this;
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


	public function is_repeater_val( $value ) {
		if ( is_array( $value ) && ! empty( $value ) ) {
			$value = array_values( $value );

			return is_array( $value[0] );
		} else {
			return false;
		}
	}

	public function get_key_from_map( $map, $repeater_key ) {

		foreach ( $map as $field => $data ) {

			$prop = ! empty( $data['prop'] ) ? $data['prop'] : 'post_title';

			if ( 'post_meta' === $prop && ! empty( $data['key'] ) && $repeater_key == $data['key'] ) {
				return $field;
			}

		}

		return $repeater_key;
	}


	public function __get_values() {

		if ( ! $this->field_data ) {
			return $this->result;
		}

		$args       = $this->args;
		$from       = $this->from;
		$source     = $this->source;
		$field_data = $this->field_data;
		$map        = $this->fields_map;
		$result     = $this->result;
		$array_allowed = in_array( $this->args['type'], array( 'checkboxes' ) ) || ! empty( $args['array_allowed'] );

		$from_manager = ( new Factory( self::SOURCES_NAMESPACE ) )->prefix( 'preset-source-' );

		return $from_manager->create_one( $from, $this )->result();

		if ( 'post' === $from ) {

			if ( absint( $source->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
				return $result;
			}

			$prop = ! empty( $field_data['prop'] ) ? $field_data['prop'] : 'post_title';

			if ( 'post_meta' === $prop ) {

				//post - post_meta

			} elseif ( 'post_terms' === $prop ) {
				if ( ! empty( $field_data['key'] ) ) {

					$value = wp_get_post_terms( $source->ID, $field_data['key'] );

					if ( empty( $value ) || is_wp_error( $value ) ) {
						return $result;
					} else {
						if ( $array_allowed ) {
							$value = array_map( function ( $term ) {
								return strval( $term->term_id );
							}, $value );
						} else {
							$value = $value[0];
							$value = $value->term_id;
						}
					}

				} else {
					return $result;
				}
			} elseif ( 'post_thumb' === $prop ) {
				$value = get_post_thumbnail_id( $source->ID );
			} else {
				$value = isset( $source->$prop ) ? $source->$prop : null;
			}

		} elseif ( 'user' === $from ) {

			if ( ! $source || is_wp_error( $source ) ) {
				return $result;
			}

			if ( ! is_user_logged_in() ) {
				return $result;
			}

			if ( get_current_user_id() !== $source->ID && ! current_user_can( 'edit_users' ) ) {
				return $result;
			}

			$prop = ! empty( $field_data['prop'] ) ? $field_data['prop'] : 'post_title';

			if ( 'user_meta' === $prop ) {
				if ( ! empty( $field_data['key'] ) ) {
					$value = get_user_meta( $source->ID, $field_data['key'], true );
				} else {
					return $result;
				}
			} else {

				// adjust props
				switch ( $prop ) {
					case 'email':
						$prop = 'user_email';
						break;

					case 'login':
						$prop = 'user_login';
						break;
				}

				if ( isset( $source->data->$prop ) ) {
					$value = $source->data->$prop;
				} elseif ( isset( $source->$prop ) ) {
					$value = $source->$prop;
				} else {
					$value = null;
				}

			}

		} elseif ( 'option_page' === $from ) {

			$key = ! empty( $field_data['key'] ) ? $field_data['key'] : false;

			if ( $key ) {
				$value = jet_engine()->listings->data->get_option( $key );
			}

		} else {

			$key = ! empty( $field_data['key'] ) ? $field_data['key'] : false;

			if ( $key && is_array( $source ) ) {
				$value = isset( $source[ $key ] ) ? $source[ $key ] : null;
			}

			$value = apply_filters( 'jet-form-builder/preset-value/' . $from, $value, $field_data, $data );

		}






		return $result;
	}

}