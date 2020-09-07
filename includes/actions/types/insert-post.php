<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Insert_Post {

	public function get_name() {
		return __( 'Insert Post', 'jet-form-builder' );
	}

	public function get_id() {
		return 'insert_post';
	}

	public function do_action() {

	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormInsertPostData', array(
			'postTypes'        => $this->get_post_types_for_options(),
			'taxonomies'       => $this->get_taxonomies_for_options(),
			'postStatuses'     => $this->get_post_statuses_for_options(),
			'postFields'       => $this->get_post_fields_for_options(),
			'fieldsMapOptions' => $this->get_fields_map_options(),
			'labels'           => array(
				'post_type'         => __( 'Post Type:', 'jet-form-builder' ),
				'post_type_help'    => false,
				'post_status'       => __( 'Post Status:', 'jet-form-builder' ),
				'post_status_help'  => false,
				'fields_map'        => __( 'Fields Map:', 'jet-form-builder' ),
				'fields_map_help'   => __( 'Set meta fields names or post properties to save appropriate form fields into', 'jet-form-builder' ),
				'default_meta'      => __( 'Default Fields:', 'jet-form-builder' ),
				'default_meta_help' => __( 'Set default meta values which should be set on post insert/update', 'jet-form-builder' ),
			),
		) );
	}

	/**
	 * Returns post types list for the options
	 *
	 * @return array
	 */
	public function get_post_types_for_options() {

		$post_types = get_post_types( array(), 'objects', 'and' );
		$result     = array();

		foreach ( $post_types as $post_type ) {
			$result[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return $result;

	}

	/**
	 * Returns taxonomies list for the options
	 *
	 * @return array
	 */
	public function get_taxonomies_for_options() {

		$taxonomies = get_taxonomies( array(), 'objects', 'and' );
		$result     = array();

		foreach ( $taxonomies as $tax ) {
			$result[] = array(
				'value' => $tax->name,
				'label' => $tax->label,
			);
		}

		return $result;

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

		return apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-statuses', $result );

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

		return apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-fields', array(
			array(
				'value' => 'ID',
				'label' => 'Post ID',
			),
			array(
				'value' => 'post_title',
				'label' => 'Post Title',
			),
			array(
				'value' => 'post_content',
				'label' => 'Post Content',
			),
			array(
				'value' => 'post_excerpt',
				'label' => 'Post Excerpt',
			),
			array(
				'value' => 'post_status',
				'label' => 'Post Status',
			),
		) );

	}

}
