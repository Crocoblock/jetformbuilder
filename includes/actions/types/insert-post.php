<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Insert_Post extends Base {

	public function get_name() {
		return __( 'Insert/Update Post', 'jet-form-builder' );
	}

	public function get_id() {
		return 'insert_post';
	}

	/**
	 * Return object fields
	 *
	 * @return string[] [type] [description]
	 */
	public function get_object_fields() {
		return array(
			'ID',
			'post_title',
			'post_content',
			'post_excerpt',
			'post_date',
			'post_date_gmt',
			'post_author',
		);
	}

	public function action_attributes() {
		return array(
			'post_type'    => array(
				'default' => '',
			),
			'post_status'  => array(
				'default' => '',
			),
			'fields_map'   => array(
				'default' => array(),
			),
			'default_meta' => array(
				'default' => array(),
			),
		);
	}

	public function do_action( array $request, Action_Handler $handler ) {
		$post_type = ! empty( $this->settings['post_type'] ) ? $this->settings['post_type'] : false;

		if ( ! $post_type || ! post_type_exists( $post_type ) ) {
			throw new Action_Exception(
				'failed',
				array(
					'post_type' => $post_type,
				)
			);
		}

		$fields_map    = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();
		$meta_input    = array();
		$terms_input   = array();
		$rels_input    = array();
		$object_fields = $this->get_object_fields();
		$has_title     = false;

		$postarr = array(
			'post_type' => $post_type,
		);

		if ( ! empty( $this->settings['default_meta'] ) ) {
			foreach ( $this->settings['default_meta'] as $meta_row ) {
				if ( ! empty( $meta_row['key'] ) ) {
					$meta_input[ $meta_row['key'] ] = $meta_row['value'];
				}
			}
		}

		foreach ( $request as $key => $value ) {
			$key_found_in_map = false;

			if ( ! empty( $fields_map[ $key ] ) ) {
				$key              = Tools::sanitize_text_field( $fields_map[ $key ] );
				$key_found_in_map = true;
			}

			if ( 'Submit' === $key ) {
				continue;
			}

			if ( ! in_array( $key, $object_fields, true ) ) {

				if ( false !== strpos( $key, 'jet_tax__' ) ) {

					$tax = str_replace( 'jet_tax__', '', $key );

					if ( ! isset( $terms_input[ $tax ] ) ) {
						$terms_input[ $tax ] = array();
					}

					if ( ! is_array( $value ) ) {
						$terms_input[ $tax ][] = absint( $value );
					} else {
						$terms_input[ $tax ] = array_merge( $terms_input[ $tax ], array_map( 'absint', $value ) );
					}
				} else {
					if ( function_exists( 'jet_engine' )
						 && jet_engine()->relations
						 && jet_engine()->relations->is_relation_key( $key ) ) {
						$rels_input[ $key ] = $value;
					} else {
						if ( $this->is_repeater_val( $value ) ) {

							$prepared_value = array();

							foreach ( $value as $index => $row ) {

								$prepared_row = array();

								foreach ( $row as $item_key => $item_value ) {

									$item_key = ! empty( $fields_map[ $item_key ] ) ? Tools::sanitize_text_field( $fields_map[ $item_key ] ) : $item_key;

									$prepared_row[ $item_key ] = $item_value;
								}

								$prepared_value[ 'item-' . $index ] = $prepared_row;
							}

							if ( $key_found_in_map ) {
								$meta_input[ $key ] = $prepared_value;
							}
						} elseif ( $key_found_in_map ) {
							$meta_input[ $key ] = $value;
						}
					}
				}
			} else {
				$postarr[ $key ] = $value;

				if ( 'post_title' === $key ) {
					$has_title = true;
				}
			}
		}

		$post_status = ! empty( $this->settings['post_status'] ) ? $this->settings['post_status'] : '';

		if ( $post_status && 'keep-current' !== $post_status ) {
			$postarr['post_status'] = $post_status;
		}
		$postarr['meta_input'] = $meta_input;
		$post_type_obj         = get_post_type_object( $post_type );

		$pre_post_check = apply_filters( 'jet-form-builder/action/insert-post/pre-check', true, $postarr, $this );

		if ( ! $pre_post_check ) {
			return;
		}

		if ( ! empty( $postarr['ID'] ) ) {

			$post = get_post( (int) $postarr['ID'] );

			if ( ! $post || ( absint( $post->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) ) {
				throw new Action_Exception(
					'failed',
					array(
						'post' => $post,
					)
				);
			}

			$post_id     = wp_update_post( $postarr );
			$post_action = 'update';
		} else {

			if ( ! $has_title ) {
				$postarr['post_title'] = $post_type_obj->labels->singular_name . ' #';
			}

			$post_id     = wp_insert_post( $postarr );
			$post_action = 'insert';
		}

		if ( ! $post_id ) {
			throw new Action_Exception(
				'failed',
				array(
					'post_id' => $post_id,
				)
			);
		}

		$this->add_inserted_post_id( $handler, $post_id );

		$this->add_context_once(
			array(
				$this->get_context_post_key( $post_id ) => array_merge(
					array(
						'__action' => $post_action,
						'ID'       => $post_id,
					),
					$postarr
				),
			)
		);

		/**
		 * Perform any actions after post inserted/updated
		 */
		do_action( 'jet-form-builder/action/after-post-' . $post_action, $this, $handler );

		if ( ! empty( $terms_input ) ) {

			foreach ( $terms_input as $tax => $terms ) {
				$res = wp_set_post_terms( $post_id, $terms, $tax );
			}
		}

		if ( ! $has_title && empty( $postarr['ID'] ) ) {

			$title = $post_type_obj->labels->singular_name . ' #' . $post_id;

			wp_update_post(
				array(
					'ID'         => $post_id,
					'post_title' => $title,
				)
			);

		}

		if ( ! empty( $rels_input ) ) {
			foreach ( $rels_input as $rel_key => $rel_posts ) {
				jet_engine()->relations->process_meta( false, $post_id, $rel_key, $rel_posts );
			}
		}
	}

	private function add_inserted_post_id( Action_Handler $handler, $post_id ) {
		if ( empty( $handler->response_data['inserted_post_id'] ) ) {
			$handler->response_data['inserted_post_id'] = $post_id;
			$handler->request_data['inserted_post_id']  = $post_id;
		} else {
			$handler->response_data['inserted_posts'][] = array(
				'post_id'   => $post_id,
				'action_id' => $this->_id,
			);
		}
	}

	public function get_inserted_post_context( $post_id = false ) {
		$handler = $this->get_action_handler();
		$post_id = $post_id ?: $handler->get_inserted_post_id();

		return $handler->get_context( 'insert_post', $this->get_context_post_key( $post_id ) );
	}

	public function get_context_post_key( $post_id ) {
		return "post-id-{$post_id}";
	}

	public function self_script_name() {
		return 'jetFormInsertPostData';
	}

	public function editor_labels() {
		return array(
			'post_type'    => __( 'Post Type:', 'jet-form-builder' ),
			'post_status'  => __( 'Post Status:', 'jet-form-builder' ),
			'fields_map'   => __( 'Fields Map:', 'jet-form-builder' ),
			'default_meta' => __( 'Default Fields:', 'jet-form-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'fields_map'   => __( 'Set meta fields names or post properties to save appropriate form fields into', 'jet-form-builder' ),
			'default_meta' => __( 'Set default meta values which should be set on post insert/update', 'jet-form-builder' ),
		);
	}

	public function visible_attributes_for_gateway_editor() {
		return array( 'post_type', 'post_status' );
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return array(
			'postTypes'        => Tools::get_post_types_for_js(),
			'taxonomies'       => Tools::get_taxonomies_for_js(),
			'postStatuses'     => $this->get_post_statuses_for_options(),
			'postFields'       => $this->get_post_fields_for_options(),
			'fieldsMapOptions' => $this->get_fields_map_options(),
			'requestFields'    => array(
				'inserted_post_id' => array(
					'name' => 'inserted_post_id',
					'help' => __( "A computed field from the <b>{$this->get_name()}</b> action.", 'jet-form-builder' ),
				),
			),
		);
	}


	/**
	 * Returns post statuses list for the options
	 *
	 * @return array
	 */
	public function get_post_statuses_for_options() {

		$statuses = get_post_statuses();
		$result   = array();

		foreach ( $statuses as $name => $label ) {
			$result[] = array(
				'value' => $name,
				'label' => $label,
			);
		}

		return Tools::with_placeholder( apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-statuses', $result ) );

	}

	/**
	 * Returns allowed chilces for the fields map control
	 *
	 * @return [type] [description]
	 */
	public function get_fields_map_options() {

		$post_fields = $this->get_post_fields_for_options();

		foreach ( $post_fields as $index => $data ) {
			if ( 'ID' === $data['value'] ) {
				$post_fields[ $index ]['label'] = 'Post ID (will update the post)';
			}
		}

		$post_fields[] = array(
			'value' => '_thumbnail_id',
			'label' => 'Post Thumbnail',
		);

		$post_fields[] = array(
			'value' => 'post_meta',
			'label' => 'Post Meta',
		);

		$post_fields[] = array(
			'value' => 'post_terms',
			'label' => 'Post Terms',
		);

		return $post_fields;

	}

	/**
	 * Returns post object fields list for the options
	 *
	 * @return array
	 */
	public function get_post_fields_for_options() {

		return Tools::with_placeholder(
			apply_filters(
				'jet-form-builder/actions/insert-post/allowed-post-fields',
				array(
					array(
						'value' => 'ID',
						'label' => __( 'Post ID', 'jet-form-builder' ),
					),
					array(
						'value' => 'post_title',
						'label' => __( 'Post Title', 'jet-form-builder' ),
					),
					array(
						'value' => 'post_content',
						'label' => __( 'Post Content', 'jet-form-builder' ),
					),
					array(
						'value' => 'post_excerpt',
						'label' => __( 'Post Excerpt', 'jet-form-builder' ),
					),
					array(
						'value' => 'post_status',
						'label' => __( 'Post Status', 'jet-form-builder' ),

					),
					array(
						'value' => 'post_date',
						'label' => __( 'Post Date', 'jet-form-builder' ),
					),
					array(
						'value' => 'post_date_gmt',
						'label' => __( 'Post Date GMT', 'jet-form-builder' ),
					),
					array(
						'value' => 'post_author',
						'label' => __( 'Post Author', 'jet-form-builder' ),
					),
				)
			)
		);

	}

}
