<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Post_Modifier;
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

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$post_type   = $this->settings['post_type'] ?? false;
		$fields_map  = $this->settings['fields_map'] ?? array();
		$post_status = $this->settings['post_status'] ?? '';
		$meta        = $this->settings['default_meta'] ?? array();

		( new Post_Modifier )
			->suppress_filters( false )
			->set_post_type( $post_type )
			->set_meta( $meta )
			->set_fields_map( $fields_map )
			->set_request( $request )
			->set_general_post_status( $post_status )
			->run();
	}

	public function get_inserted_post_context( $post_id = false ) {
		$handler = $this->get_action_handler();
		$post_id = $post_id ?: $handler->get_inserted_post_id();

		return $handler->get_context( 'insert_post', self::get_context_post_key( $post_id ) );
	}

	public static function get_context_post_key( $post_id ) {
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

		$result = array_merge( $result, array(
			array(
				'value' => 'trash',
				'label' => __( 'Move to Trash', 'jet-form-builder' )
			),
			array(
				'value' => 'from-field',
				'label' => __( 'Get from the form field', 'jet-form-builder' )
			),
			array(
				'value' => 'keep-current',
				'label' => __( 'Keep current status (when updating post)', 'jet-form-builder' )
			),
		) );

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
