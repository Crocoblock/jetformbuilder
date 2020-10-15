<?php
namespace Jet_Form_Builder;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Post_Type class
 */
class Post_Type {

	/**
	 * Constructor for the class
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_assets' ) );
	}

	/**
	 * Register admin assets
	 *
	 * @return [type] [description]
	 */
	public function admin_assets( $hook ) {

		$screen = get_current_screen();

		if ( ! $screen->action ) {
			$screen->action = ! empty( $_GET['action'] ) ? $_GET['action'] : '';
		}

		if ( $this->slug() === $screen->id && in_array( $screen->action, array( 'add', 'edit' ) ) ) {
			Plugin::instance()->editor->enqueue_assets();
		}

	}

	/**
	 * Returns current post type slug
	 *
	 * @return [type] [description]
	 */
	public function slug() {
		return 'jet-form-builder';
	}

	/**
	 * Register templates post type
	 *
	 * @return void
	 */
	public function register_post_type() {

		$args = array(
			'labels' => array(
				'name'               => esc_html__( 'Forms', 'jet-engine' ),
				'singular_name'      => esc_html__( 'Form', 'jet-engine' ),
				'add_new'            => esc_html__( 'Add New', 'jet-engine' ),
				'add_new_item'       => esc_html__( 'Add New Form', 'jet-engine' ),
				'edit_item'          => esc_html__( 'Edit Form', 'jet-engine' ),
				'new_item'           => esc_html__( 'Add New Item', 'jet-engine' ),
				'view_item'          => esc_html__( 'View Form', 'jet-engine' ),
				'search_items'       => esc_html__( 'Search Form', 'jet-engine' ),
				'not_found'          => esc_html__( 'No Forms Found', 'jet-engine' ),
				'not_found_in_trash' => esc_html__( 'No Forms Found In Trash', 'jet-engine' ),
				'menu_name'          => esc_html__( 'Forms', 'jet-engine' ),
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
			'supports'            => array( 'title', 'editor', 'custom-fields' ),
		);

		$post_type = register_post_type(
			$this->slug(),
			apply_filters( 'jet-form-builder/post-type/args', $args )
		);

		$meta = array(
			'_jf_args'     => array(
				'type'    => 'string',
				'default' => '{}',
			),
			'_jf_actions'  => array(
				'type'    => 'string',
				'default' => '[]',
			),
			'_jf_messages' => array(
				'type'    => 'string',
				'default' => '{}',
			),
			'_jf_preset' => array(
				'type'    => 'string',
				'default' => '{}',
			),
		);

		foreach ( $meta as $key => $args ) {

			$args = array_merge( $args, array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => function( $res, $key, $post_id, $user_id, $cap ) {
					return user_can( $user_id, 'edit_post', $post_id );
				}
			) );

			register_post_meta( $this->slug(), $key, $args );

		}

	}

}
