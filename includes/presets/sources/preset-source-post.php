<?php


namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Exceptions\Preset_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preset_Source_Post extends Base_Source {

	public function get_id() {
		return 'post';
	}

	public function on_sanitize(): bool {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		if ( absint( $this->src()->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
			return false;
		}

		return true;
	}

	/**
	 * @return array|\WP_Post|null
	 * @throws Preset_Exception
	 */
	public function query_source() {
		$post_from = ! empty( $this->preset_data['post_from'] ) ? $this->preset_data['post_from'] : 'current_post';

		if ( 'current_post' === $post_from ) {
			$post_id = get_the_ID();
		} else {
			$var     = ! empty( $this->preset_data['query_var'] ) ? $this->preset_data['query_var'] : '';
			$post_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? absint( $_REQUEST[ $var ] ) : false;
		}

		if ( ! $post_id ) {
			throw new Preset_Exception( 'Empty Post ID' );
		}

		return get_post( $post_id );
	}


	protected function can_get_preset() {
		return ( parent::can_get_preset() &&
				 (
					 absint( $this->src()->post_author ) === get_current_user_id()
					 || current_user_can( 'edit_others_posts' )
				 )
		);
	}

	public function source__post_meta() {
		if ( empty( $this->field_data['key'] ) ) {
			return '';
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
		} elseif ( function_exists( 'jet_engine' )
		           && jet_engine()->relations
		           && jet_engine()->relations->is_relation_key( $this->field_data['key'] ) ) {

			$info = jet_engine()->relations->get_relation_info( $this->field_data['key'] );

			if ( ! $info ) {
				return '';
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

	/**
	 * @return array|string|string[]
	 * @throws Preset_Exception
	 */
	public function source__post_terms() {
		if ( empty( $this->field_data['key'] ) ) {
			throw new Preset_Exception( 'Undefined `key` in `field_data`', $this->field_data );
		}

		$value = wp_get_post_terms( $this->src()->ID, $this->field_data['key'] );

		if ( empty( $value ) || is_wp_error( $value ) ) {
			return '';
		}

		/*
		 * Get expected format for Form Field
		 */
		$format = $this->get_expected_format();

		return $this->get_post_terms_by_format( $value, $format );
	}

	protected function get_post_terms_by_format( $value, $format ) {
		switch ( $format ) {
			case 'array':
				return array_map(
					function ( $term ) {
						return strval( $term->term_id );
					},
					$value
				);
			case 'custom':
				return $value;
		}

		return $value[0]->term_id ?? '';
	}

	public function source__post_thumb() {
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
