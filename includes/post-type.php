<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Classes\Compatibility;
use Jet_Form_Builder\Classes\Get_Icon_Trait;
use Jet_Form_Builder\Classes\Messages_Helper_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Shortcodes\Manager;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Post_Type class
 */
class Post_Type {

	use Messages_Helper_Trait;
	use Get_Icon_Trait;

	public $allow_gateways;

	/**
	 * Used to define the editor
	 *
	 * @var boolean
	 */
	public $is_form_editor;

	public $screen;

	/**
	 * Constructor for the class
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'current_screen', array( $this, 'set_current_screen' ) );

		add_filter( "manage_{$this->slug()}_posts_columns", array( $this, 'filter_columns' ) );
		add_action( "manage_{$this->slug()}_posts_custom_column", array( $this, 'add_admin_column_content' ), 10, 2 );
	}

	public function filter_columns( $columns ) {
		$after = array( 'date' => $columns['date'] );
		unset( $columns['date'] );

		$columns['jfb_shortcode'] = __( 'Shortcode', 'jet-form-builder' );

		return array_merge( $columns, $after );
	}

	public function add_admin_column_content( $column, $form_id ) {
		if ( 'jfb_shortcode' !== $column ) {
			return;
		}
		$arguments = json_decode( get_post_meta( $form_id, '_jf_args', true ), true );
		$arguments = array_diff( $arguments, $this->get_default_args() );
		$arguments = array_merge( array( 'form_id' => $form_id ), $this->get_default_args_on_render(), $arguments );

		printf(
			'<input readonly type="text" onclick="this.select()" value="%s" style="%s"/>',
			esc_attr( Manager::get_shortcode( 'jet_fb_form', $arguments ) ),
			'width: 100%'
		);
	}


	/**
	 * Returns current post type slug
	 *
	 * @return string [type] [description]
	 */
	public function slug() {
		return 'jet-form-builder';
	}


	public function set_current_screen() {
		$this->screen = get_current_screen();

		if ( ! $this->screen->action ) {
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$this->screen->action = ! empty( $_GET['action'] ) ? sanitize_key( $_GET['action'] ) : '';
		}

		$is_editor_page = in_array( $this->screen->action, array( 'add', 'edit' ), true );

		if ( $this->slug() === $this->screen->id && $is_editor_page ) {
			$this->is_form_editor = true;

		} elseif ( $this->slug() !== $this->screen->id && $is_editor_page ) {
			$this->is_form_editor = false;
		}
	}

	public function is_form_list_page() {
		return ( "edit-{$this->slug()}" === $this->screen->id );
	}

	/**
	 * Register templates post type
	 *
	 * @return void
	 */
	public function register_post_type() {

		$args = array(
			'labels'              => array(
				'name'               => __( 'Forms', 'jet-form-builder' ),
				'all_items'          => __( 'Forms', 'jet-form-builder' ),
				'add_new'            => __( 'Add New', 'jet-form-builder' ),
				'add_new_item'       => __( 'Add New Form', 'jet-form-builder' ),
				'edit_item'          => __( 'Edit Form', 'jet-form-builder' ),
				'new_item'           => __( 'New Form', 'jet-form-builder' ),
				'view_item'          => __( 'View Form', 'jet-form-builder' ),
				'search_items'       => __( 'Search Form', 'jet-form-builder' ),
				'not_found'          => __( 'No Forms Found', 'jet-form-builder' ),
				'not_found_in_trash' => __( 'No Forms Found In Trash', 'jet-form-builder' ),
				'singular_name'      => __( 'JetForm', 'jet-form-builder' ),
				'menu_name'          => __( 'JetFormBuilder', 'jet-form-builder' ),
			),
			'public'              => true,
			'show_ui'             => true,
			'show_in_admin_bar'   => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'has_archive'         => false,
			'query_var'           => false,
			'can_export'          => true,
			'rewrite'             => false,
			'capability_type'     => 'post',
			'menu_icon'           => $this->get_post_type_icon(),
			'menu_position'       => 120,
			'supports'            => array( 'title', 'editor', 'custom-fields' ),
		);

		$post_type = register_post_type(
			$this->slug(),
			// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
			apply_filters( 'jet-form-builder/post-type/args', $args )
		);

		$this->set_default_messages();

		$meta = array(
			'_jf_args'      => array(
				'type'    => 'string',
				'default' => wp_json_encode( $this->get_default_args() ),
			),
			'_jf_recaptcha' => array(
				'type'    => 'string',
				'default' => '{}',
			),

			'_jf_actions'   => array(
				'type'    => 'string',
				'default' => '[]',
			),
			'_jf_messages'  => array(
				'type'    => 'string',
				'default' => $this->get_default_messages_values_json(),
			),
			'_jf_preset'    => array(
				'type'    => 'string',
				'default' => '{}',
			),
		);

		if ( Plugin::instance()->allow_gateways ) {
			$meta['_jf_gateways'] = array(
				'type'    => 'string',
				'default' => '{}',
			);
		}

		foreach ( $meta as $key => $args ) {

			$args = array_merge(
				$args,
				array(
					'show_in_rest'  => true,
					'single'        => true,
					'auth_callback' => function ( $res, $key, $post_id, $user_id, $cap ) {
						return user_can( $user_id, 'edit_post', $post_id );
					},
				)
			);

			register_post_meta( $this->slug(), $key, $args );

		}

	}

	private function get_post_type_icon() {
		$path = $this->get_icon_path( 'post-type.php' );

		return include_once $path;
	}

	public function get_form_meta( $meta_key, $form_id ) {
		return Tools::decode_json(
			get_post_meta(
				$form_id,
				$meta_key,
				true
			)
		);
	}

	/**
	 * Returns form meta arguments:
	 * fields_layout, submit_type, captcha and required_mark
	 * in assoc array
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_args( $form_id ) {
		return $this->get_form_meta( '_jf_args', $form_id );
	}

	/**
	 * Returns form messages
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_messages( $form_id ) {
		$messages = $this->get_form_meta( '_jf_messages', $form_id );

		if ( empty( $messages ) ) {
			return $this->messages;
		}

		return $messages;
	}

	/**
	 * Returns form actions
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_actions( $form_id ) {
		return $this->get_form_meta( '_jf_actions', $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_preset( $form_id ) {
		return $this->get_form_meta( '_jf_preset', $form_id );
	}

	/**
	 * Returns captcha settings
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_recaptcha( $form_id ) {
		return $this->get_form_meta( '_jf_recaptcha', $form_id );
	}

	public function maybe_get_jet_sm_ready_styles( $form_id ) {
		return Compatibility::has_jet_sm() ? get_post_meta( $form_id, '_jet_sm_ready_style', true ) : '';
	}


	/**
	 * Returns form gateways
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_gateways( $form_id ) {
		return $this->get_form_meta( '_jf_gateways', $form_id );
	}


	public function get_default_args() {
		return array(
			'submit_type'      => '',
			'required_mark'    => '',
			'fields_layout'    => '',
			'enable_progress'  => null,
			'fields_label_tag' => '',
		);
	}

	public function get_default_args_on_render() {
		return array(
			'submit_type'      => 'reload',
			'required_mark'    => '*',
			'fields_layout'    => 'column',
			'enable_progress'  => false,
			'fields_label_tag' => 'div',
		);
	}

	public function set_default_messages() {
		$this->messages = apply_filters(
		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
			'jet-form-builder/message-types',
			array(
				'success'           => array(
					'label' => __( 'Form successfully submitted.', 'jet-form-builder' ),
					'value' => 'Form successfully submitted.',
				),
				'failed'            => array(
					'label' => __( 'Submit failed.', 'jet-form-builder' ),
					'value' => 'There was an error trying to submit form. Please try again later.',
				),
				'validation_failed' => array(
					'label' => __( 'Validation error', 'jet-form-builder' ),
					'value' => 'One or more fields have an error. Please check and try again.',
				),
				'captcha_failed'    => array(
					'label' => __( 'Captcha validation failed', 'jet-form-builder' ),
					'value' => __( 'Captcha validation failed', 'jet-form-builder' ),
				),
				'invalid_email'     => array(
					'label' => __( 'Entered an invalid email', 'jet-form-builder' ),
					'value' => 'The e-mail address entered is invalid.',
				),
				'empty_field'       => array(
					'label' => __( 'Required field is empty', 'jet-form-builder' ),
					'value' => 'The field is required.',
				),
				'internal_error'    => array(
					'label' => __( 'Internal server error', 'jet-form-builder' ),
					'value' => 'Internal server error. Please try again later.',
				),
				'upload_max_files'  => array(
					'label' => __( 'Media Specific: Max files limit', 'jet-form-builder' ),
					'value' => 'Maximum upload files limit is reached.',
				),
				'upload_max_size'   => array(
					'label' => __( 'Media Specific: Max size reached', 'jet-form-builder' ),
					'value' => 'Upload max size exceeded.',
				),
				'upload_mime_types' => array(
					'label' => __( 'Media Specific: File type error', 'jet-form-builder' ),
					'value' => 'File type is not allowed.',
				),
			)
		);
	}

}
