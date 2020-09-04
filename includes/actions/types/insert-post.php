<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Send_Email {

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
			'postTypes' => $this->get_post_types_for_options(),
			'taxonomies' => $this->get_taxonomies_for_options(),
			'postStatuses' => $this->get_post_statuses_for_options(),
			'postFields' => $this->get_post_fields_for_options(),
			'labels' => array(
				'mail_to'               => __( 'Mail To:', 'jet-form-builder' ),
				'mail_to_help'          => false,
				'custom_email'          => __( 'Email Address:', 'jet-form-builder' ),
				'custom_email_help'     => false,
				'from_field'            => __( 'From Field:', 'jet-form-builder' ),
				'from_field_help'       => false,
				'reply_to'              => __( 'Reply To:', 'jet-form-builder' ),
				'reply_to_help'         => false,
				'reply_to_email'        => __( 'Reply to Email Address:', 'jet-form-builder' ),
				'reply_to_email_help'   => false,
				'reply_from_field'      => __( 'Reply To Email From Field:', 'jet-form-builder' ),
				'reply_from_field_help' => false,
				'subject'               => __( 'Subject:', 'jet-form-builder' ),
				'subject_help'          => false,
				'from_name'             => __( 'From Name:', 'jet-form-builder' ),
				'from_name_help'        => false,
				'from_address'          => __( 'From Email Address:', 'jet-form-builder' ),
				'from_address_help'     => false,
				'content'               => __( 'Content:', 'jet-form-builder' ),
				'content_help'          => false,
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
	 * Returns post object fields list for the options
	 *
	 * @return array
	 */
	public function get_post_fields_for_options() {

		return apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-fields' array(
			array(
				'value' => 'ID',
				'label' => 'ID',
			),
			array(
				'value' => 'post_title',
				'label' => 'post_title',
			),
			array(
				'value' => 'post_content',
				'label' => 'post_content',
			),
			array(
				'value' => 'post_excerpt',
				'label' => 'post_excerpt',
			),
			array(
				'value' => 'post_status',
				'label' => 'post_status',
			),
		) );

	}

}
