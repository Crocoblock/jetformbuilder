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
	 * Process meta boxes for the post
	 *
	 * @param int $post_id Post ID
	 * @return void
	 */
	protected function process_meta_boxes( $post_id, $modifier ) {
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

	public function get_meta_box_fields( $post_id, $modifier ) {
		if ( ! $post_id ) {
			return array();
		}

		if ( ! class_exists( 'Cherry_X_Post_Meta' ) || ! function_exists( 'jet_engine' ) ) {
			return array();
		}

		$post_type       = get_post_type( $post_id );
		$fields_map      = $modifier->fields_map;
		$all_meta_fields = jet_engine()->meta_boxes->get_registered_fields();
		$found_fields    = $all_meta_fields[ $post_type ] ?? array();
		$result          = array();

		if ( ! empty( $found_fields ) ) {
			$result = $this->convert_meta_fields_structure( $found_fields, $fields_map );
		}

		return $result;
	}

	public function convert_meta_fields_structure( $meta_fields, $fields_map ) {
		$result = array();

		foreach ( $meta_fields as $key => $meta_field ) {
			if ( in_array( $meta_field['name'], $fields_map ) ) {
				$result[ $meta_field['name'] ] = $meta_field;

				if ( 'repeater' === $meta_field['type'] ) {
					if ( ! isset( $meta_field['repeater_save_separate'] ) || ! filter_var( $meta_field['repeater_save_separate'], FILTER_VALIDATE_BOOLEAN ) ) {
						continue;
					}

					if ( isset( $result[ $meta_field['name'] ]['repeater-fields'] ) ) {
						$result[ $meta_field['name'] ]['fields'] = $result[ $meta_field['name'] ]['repeater-fields'];
						unset( $result[ $meta_field['name'] ]['repeater-fields'] );
					}

					if ( isset( $result[ $meta_field['name'] ]['repeater_save_separate'] ) ) {
						$result[ $meta_field['name'] ]['save_separate'] = $result[ $meta_field['name'] ]['repeater_save_separate'];
						unset( $result[ $meta_field['name'] ]['repeater_save_separate'] );
					}

					if ( ! empty( $result[ $meta_field['name'] ]['fields'] ) ) {
						$new_fields = array();

						foreach ( $result[ $meta_field['name'] ]['fields'] as $nested_field ) {
							if ( isset( $nested_field['name'] ) ) {
								$glossary_id = $nested_field['glossary_id'] ?? null;

								if ( class_exists( 'Jet_Engine\Glossaries\Meta_Fields' ) && $glossary_id ) {
									$meta_fields = new Meta_Fields();

									if ( $glossary_id ) {
										$glossary = $meta_fields->get_glossary_for_field( $glossary_id );
										unset( $nested_field['options'] );
										if ( $glossary ) {
											foreach ( $glossary as $item ) {
												$nested_field['options'][ $item['value'] ] = $item['label'];
											}
										}
									}
								}
							}

							$new_fields[ $nested_field['name'] ] = $nested_field;
						}

						$result[ $meta_field['name'] ]['fields'] = $new_fields;
					}
				}

				if ( 'checkbox' === $meta_field['type'] ) {
					$new_fields = array();

					$glossary_id = $meta_field['glossary_id'] ?? null;

					if ( class_exists( 'Jet_Engine\Glossaries\Meta_Fields' ) && $glossary_id ) {
						$meta_fields = new Meta_Fields();

						if ( $glossary_id ) {
							$glossary = $meta_fields->get_glossary_for_field( $glossary_id );
							unset( $meta_field['options'] );
							if ( $glossary ) {
								foreach ( $glossary as $item ) {
									$meta_field['options'][ $item['value'] ] = $item['label'];
								}
							}
						}
					}
					$result[ $meta_field['name'] ] = $meta_field;
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
