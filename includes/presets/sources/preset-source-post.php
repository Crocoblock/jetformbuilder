<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_Post extends Base_Source {

	public function on_sanitize() {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		if ( absint( $this->src->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
			return false;
		}
		return true;
	}

	protected function can_get_preset() {
		return ( absint( $this->src->post_author ) === get_current_user_id() || current_user_can( 'edit_others_posts' ) );
	}

	public function post_meta() {
		if ( ! empty( $field_data['key'] ) ) {

			$value = get_post_meta( $this->src->ID, $field_data['key'], true );

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
			            && jet_engine()->relations->is_relation_key( $field_data['key'] ) ) {

				$info = jet_engine()->relations->get_relation_info( $field_data['key'] );

				if ( ! $info ) {
					return $this->preset_type->result;
				}

				$args = array(
					'post_id'     => $this->src->ID,
					'post_type_1' => $info['post_type_1'],
					'post_type_2' => $info['post_type_2'],
				);

				if ( $this->src->post_type === $info['post_type_1'] ) {
					$args['from'] = $info['post_type_2'];
				} else {
					$args['from'] = $info['post_type_1'];
				}

				$value = jet_engine()->relations->get_related_posts( $args );

			} else {
				$value = get_post_meta( $this->src->ID, $field_data['key'], true );
			}

			return $value;

		} else {
			return $this->preset_type->result;
		}
	}

	public function post_terms() {
		if ( ! empty( $field_data['key'] ) ) {

			$value = wp_get_post_terms( $this->src->ID, $field_data['key'] );

			if ( empty( $value ) || is_wp_error( $value ) ) {
				return $this->preset_type->result;
			} else {
				if ( $this->preset_type->array_allowed ) {
					$value = array_map( function ( $term ) {
						return strval( $term->term_id );
					}, $value );
				} else {
					$value = $value[0];
					$value = $value->term_id;
				}
			}

			return $value;
		} else {
			return $this->preset_type->result;
		}
	}

	public function post_thumb() {
		return get_post_thumbnail_id( $this->src->ID );
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

		foreach ( $this->preset_type->fields_map as $field => $data ) {

			$prop = ! empty( $this->preset_type->data['prop'] ) ? $this->preset_type->data['prop'] : 'post_title';

			if ( 'post_meta' === $prop
			     && ! empty( $this->preset_type->data['key'] )
			     && $repeater_key == $this->preset_type->data['key'] )
			{
				return $field;
			}

		}

		return $repeater_key;
	}


}