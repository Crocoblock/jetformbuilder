<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Object_Properties_List;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Author_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Comments_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Date_Gmt_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Date_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Id_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Je_Relation_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Meta_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Parent_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Status_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Terms_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Thumbnail_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Title_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;
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

	/** @var Post_Modifier */
	public $modifier;

	public function __construct() {
		parent::__construct();

		/**
		 * @since 2.1.4
		 */
		$this->modifier = new Post_Modifier();
	}

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

		$this->modifier
			->suppress_filters( false )
			->set_post_type( $post_type )
			->set_meta( $meta )
			->set_fields_map( $fields_map )
			->set_request( $request )
			->replace_field_by_prop( 'post_status', $post_status )
			->run();
	}

	public function get_inserted_post_context( $post_id = false ) {
		$post_id = $post_id ?: jet_fb_action_handler()->get_inserted_post_id();

		return jet_fb_action_handler()->get_context(
			'insert_post',
			self::get_context_post_key( $post_id )
		);
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
			'fieldsMapOptions' => Array_Tools::to_array( $this->list->all() ),
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

		$result = array_merge(
			$result,
			array(
				array(
					'value' => 'trash',
					'label' => __( 'Move to Trash', 'jet-form-builder' ),
				),
				array(
					'value' => 'from-field',
					'label' => __( 'Get from the form field', 'jet-form-builder' ),
				),
				array(
					'value' => 'keep-current',
					'label' => __( 'Keep current status (when updating post)', 'jet-form-builder' ),
				),
			)
		);

		return Tools::with_placeholder( apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-statuses', $result ) );

	}

}
