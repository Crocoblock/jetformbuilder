<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_Post extends Base_Source {

	private $array_allowed;

	public function get_id() {
		return 'post';
	}

	public function after_init() {
		$this->set_array_allowed();
	}

	private function set_array_allowed() {
		if ( isset( $this->field_args['type'] ) ) {
			$this->array_allowed = 'checkbox-field' === $this->field_args['type'];
		}
	}

	public function on_sanitize() {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		if ( absint( $this->src()->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
			return false;
		}

		return true;
	}

	public function query_source() {
		$post_from = ! empty( $this->preset_data['post_from'] ) ? $this->preset_data['post_from'] : 'current_post';

		if ( 'current_post' === $post_from ) {
			$post_id = get_the_ID();
		} else {
			$var     = ! empty( $this->preset_data['query_var'] ) ? $this->preset_data['query_var'] : '';
			$post_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;
		}

		if ( $post_id ) {
			return get_post( $post_id );
		}
	}


	protected function can_get_preset() {
		return ( parent::can_get_preset() &&
		         (
			         absint( $this->src()->post_author ) === get_current_user_id()
			         || current_user_can( 'edit_others_posts' )
		         )
		);
	}

	public function _source__post_meta() {
		if ( empty( $this->field_data['key'] ) ) {
			return self::EMPTY;
		}

		$value = get_post_meta( $this->src()->ID, $this->field_data['key'], true );

		if ( $this->is_repeater_val( $value ) ) {

			$prepared_value = array();

			foreach ( $value as $index => $row ) {

				$prepared_row = array();

				foreach ( $row as $item_key => $item_value ) {

					$item_key = $this->get_key_from_map( $item_key );

					$prepared_row[ $item_key ] = $item_value;
				}

				$prepared_value[] = $prepared_row;

			}
			$value = $prepared_value;
		} else if ( function_exists( 'jet_engine' )
		            && jet_engine()->relations
		            && jet_engine()->relations->is_relation_key( $this->field_data['key'] ) ) {

			$info = jet_engine()->relations->get_relation_info( $this->field_data['key'] );

			if ( ! $info ) {
				return self::EMPTY;
			}

			$args = array(
				'post_id'     => $this->src()->ID,
				'post_type_1' => $info['post_type_1'],
				'post_type_2' => $info['post_type_2'],
			);

			if ( $this->src()->post_type === $info['post_type_1'] ) {
				$args['from'] = $info['post_type_2'];
			} else {
				$args['from'] = $info['post_type_1'];
			}

			$value = jet_engine()->relations->get_related_posts( $args );

		}

		return $value;
	}

	public function _source__post_terms() {
		if ( empty( $this->field_data['key'] ) ) {
			return self::EMPTY;
		}

		$value = wp_get_post_terms( $this->src()->ID, $this->field_data['key'] );

		if ( empty( $value ) || is_wp_error( $value ) ) {
			return '';
		} else {
			if ( $this->array_allowed ) {
				$value = array_map( function ( $term ) {
					return strval( $term->term_id );
				}, $value );
			} else {
				$value = $value[0];
				$value = $value->term_id;
			}
		}

		return $value;
	}

	public function _source__post_thumb() {
		return get_post_thumbnail_id( $this->src()->ID );
	}

	public function is_repeater_val( $value ) {
		if ( is_array( $value ) && ! empty( $value ) ) {
			$value = array_values( $value );

			return is_array( $value[0] );
		} else {
			return false;
		}
	}

	public function get_key_from_map( $repeater_key ) {

		foreach ( $this->fields_map as $field => $data ) {

			if ( 'post_meta' === $this->prop
			     && ! empty( $this->preset_data['key'] )
			     && $repeater_key == $this->preset_data['key'] ) {
				return $field;
			}

		}

		return $repeater_key;
	}


}