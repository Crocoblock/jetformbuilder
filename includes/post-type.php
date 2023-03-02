<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Classes\Arguments\Default_Form_Arguments;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Compatibility;
use Jet_Form_Builder\Classes\Get_Icon_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Post_Meta\Actions_Meta;
use Jet_Form_Builder\Post_Meta\Base_Meta_Type;
use Jet_Form_Builder\Post_Meta\Args_Meta;
use Jet_Form_Builder\Post_Meta\Preset_Meta;
use Jet_Form_Builder\Post_Meta\Gateways_Meta;
use Jet_Form_Builder\Post_Meta\Messages_Meta;
use Jet_Form_Builder\Post_Meta\Recaptcha_Meta;
use Jet_Form_Builder\Post_Meta\Validation_Meta;
use Jet_Form_Builder\Shortcodes\Manager;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Post_Type class
 */
class Post_Type {

	use Get_Icon_Trait;
	use Repository_Pattern_Trait;

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

		/**
		 * @since 3.0.1
		 */
		add_filter( 'gutenberg_can_edit_post_type', array( $this, 'can_edit_post_type' ), 150, 2 );
		add_filter( 'use_block_editor_for_post_type', array( $this, 'can_edit_post_type' ), 150, 2 );
	}

	public function rep_instances(): array {
		return array(
			new Args_Meta(),
			new Messages_Meta(),
			new Preset_Meta(),
			new Recaptcha_Meta(),
			new Actions_Meta(),
			new Gateways_Meta(),
			new Validation_Meta(),
		);
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
		$arguments = array_diff( $this->get_args( $form_id ), Form_Arguments::arguments() );

		$arguments = array_merge(
			array( 'form_id' => $form_id ),
			Default_Form_Arguments::arguments(),
			$arguments
		);

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
	 * @param $can
	 * @param $post_type
	 *
	 * @return bool
	 * @since 3.0.1
	 */
	public function can_edit_post_type( $can, $post_type ): bool {
		return $this->slug() === $post_type ? true : $can;
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

		$this->rep_install();

		/** @var Base_Meta_Type $item */
		foreach ( $this->rep_get_items() as $item ) {
			register_post_meta( $this->slug(), $item->get_id(), $item->to_array() );
		}
	}

	/**
	 * @param string $name
	 *
	 * @return false|Base_Meta_Type
	 */
	public function get_meta( string $name ) {
		try {
			return $this->rep_get_item( $name );
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	/**
	 * @param $item
	 *
	 * @throws Exceptions\Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( $item->is_supported() ) {
			return;
		}
		$this->_rep_abort_this();
	}

	private function get_post_type_icon() {
		$path = $this->get_icon_path( 'post-type.php' );

		return include_once $path;
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
	public function get_args( $form_id ): array {
		return $this->get_meta( Args_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form messages
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_messages( $form_id ) {
		return $this->get_meta( Messages_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_actions( $form_id ) {
		return $this->get_meta( Actions_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_preset( $form_id ) {
		return $this->get_meta( Preset_Meta::class )->query( $form_id );
	}

	/**
	 * Returns captcha settings
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_recaptcha( $form_id ) {
		return $this->get_meta( Recaptcha_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form gateways
	 *
	 * @param $form_id
	 *
	 * @return array
	 */
	public function get_gateways( $form_id ) {
		return $this->get_meta( Gateways_Meta::class )->query( $form_id );
	}

	public function get_validation( $form_id ) {
		return $this->get_meta( Validation_Meta::class )->query( $form_id );
	}

	/**
	 * @param $meta_key
	 * @param $form_id
	 *
	 * @return array|mixed
	 * @deprecated since 3.0.0
	 */
	public function get_form_meta( $meta_key, $form_id ) {
		return Tools::decode_json(
			get_post_meta(
				$form_id,
				$meta_key,
				true
			)
		);
	}

	public function maybe_get_jet_sm_ready_styles( $form_id ) {
		return Compatibility::has_jet_sm() ? get_post_meta( $form_id, '_jet_sm_ready_style', true ) : '';
	}


}
