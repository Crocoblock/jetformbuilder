<?php

namespace JFB_Modules\Actions_V2\Insert_Post\Traits;

use Jet_Engine\Glossaries\Meta_Fields;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Trait Process_Meta_Boxes_Trait
 *
 * @package JFB_Modules\Actions_V2\Insert_Post\Traits
 */
trait Process_Meta_Boxes_Trait {
	/**
	 * Process meta boxes for the post.
	 *
	 * @param int   $post_id  Post ID.
	 * @param mixed $modifier Modifier object.
	 *
	 * @return void
	 */
	protected function process_meta_boxes( int $post_id, $modifier ) {
		if ( ! class_exists( 'Cherry_X_Post_Meta' ) || ! function_exists( 'jet_engine' ) ) {
			return;
		}

		if ( ! $modifier || empty( $modifier->fields_map ) ) {
			return;
		}

		if ( ! $post_id ) {
			return;
		}

		$post            = get_post( $post_id );
		$post_type       = get_post_type( $post_id );
		$meta_box_fields = $this->get_meta_box_fields( $post_id, $modifier );

		if ( ! empty( $meta_box_fields ) ) {
			$args = array(
				'page'   => array( $post_type ),
				'fields' => $meta_box_fields,
			);

			$meta = new \Cherry_X_Post_Meta( $args );

			$meta->save_meta_option( $post_id );

			if ( class_exists( 'Jet_Smart_Filters_Indexer_Manager' ) ) {
				$indexer = new \Jet_Smart_Filters_Indexer_Manager();
				$indexer->post_updated( $post_id, $post );
			}
		}
	}

	public function get_meta_box_fields( int $post_id, $modifier ): array {
		if ( ! $post_id ) {
			return array();
		}

		if ( ! class_exists( 'Cherry_X_Post_Meta' ) || ! function_exists( 'jet_engine' ) ) {
			return array();
		}

		$post_type        = get_post_type( $post_id );
		$fields_map       = $modifier->fields_map;
		$all_meta_fields  = jet_engine()->meta_boxes->get_registered_fields();
		$found_fields     = $all_meta_fields[ $post_type ] ?? array();
		$result           = array();
		$post_meta        = new \Jet_Engine_CPT_Meta( $post_type, $found_fields );
		$post_meta_fields = $post_meta->prepare_meta_fields( $found_fields );

		if ( ! empty( $found_fields ) ) {
			$result = $this->convert_meta_fields_structure( $post_meta_fields, $fields_map );
		}

		return $result;
	}

	public function convert_meta_fields_structure( array $meta_fields, array $fields_map ): array {
		$result = array();

		foreach ( $meta_fields as $key => $meta_field ) {
			if ( isset( $meta_field['name'] ) && in_array( $meta_field['name'], $fields_map ) ) {
				$result[ $meta_field['name'] ] = $meta_field;

				if ( isset( $meta_field['type'] ) && 'text' === $meta_field['type'] && ( isset( $meta_field['input_type'] ) && ( 'datetime-local' === $meta_field['input_type'] || 'date' === $meta_field['input_type']  || 'time' === $meta_field['input_type'] ) ) ) {
					$result[ $meta_field['name'] ]['is_timestamp'] = 2;
				}

				if ( isset( $meta_field['fields'] ) && is_array( $meta_field['fields'] ) ) {
					$result[ $meta_field['name'] ]['fields'] = $this->convert_meta_fields_structure( $meta_field['fields'], $fields_map );
				}
			}
		}

		return $result;
	}

	public function normalize_checkboxes( array $meta_box_fields, array $values ): array {
		foreach ( $meta_box_fields as $field_key => $field_data ) {
			if ( isset( $values[ $field_key ] ) && is_array( $values[ $field_key ] ) && ( 'repeater' === $field_data['type'] ?? '' ) ) {
				$repeater_values = $values[ $field_key ];
				$repeater_fields = $field_data['fields'] ?? array();

				foreach ( $repeater_fields as $sub_field_key => $sub_field_data ) {
					if ( ( 'checkbox' === $sub_field_data['type'] ?? '' ) ) {
						foreach ( $repeater_values as $item_key => $item_values ) {
							if ( isset( $item_values[ $sub_field_key ] ) && is_array( $item_values[ $sub_field_key ] ) ) {
								$options    = $sub_field_data['options'] ?? array();
								$normalized = array();

								foreach ( $item_values[ $sub_field_key ] as $checkbox_key => $checkbox_value ) {
									if ( ! empty( $checkbox_value ) ) {
										$normalized[ $checkbox_value ] = 'true';
									}
								}

								foreach ( $options as $option_key => $option_value ) {
									if ( ! isset( $normalized[ $option_key ] ) ) {
										$normalized[ $option_key ] = 'false';
									}
								}

								$values[ $field_key ][ $item_key ][ $sub_field_key ] = $normalized;
							}
						}
					}
				}
			}

			if ( isset( $values[ $field_key ] ) && is_array( $values[ $field_key ] ) && ( 'checkbox' === $field_data['type'] ?? '' ) ) {
				$options    = $field_data['options'] ?? array();
				$normalized = array();

				foreach ( $values[ $field_key ] as $checkbox_key => $checkbox_value ) {
					if ( ! empty( $checkbox_value ) ) {
						$normalized[ $checkbox_value ] = 'true';
					}
				}

				foreach ( $options as $option_key => $option_value ) {
					if ( ! isset( $normalized[ $option_key ] ) ) {
						$normalized[ $option_key ] = 'false';
					}
				}

				$values[ $field_key ] = $normalized;
			}
		}

		return $values;
	}
}
