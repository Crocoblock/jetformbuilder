<?php


namespace JFB_Modules\Post_Type;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Arguments\Default_Form_Arguments;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Compatibility;
use JFB_Modules\Post_Type\Actions_Repository;
use Jet_Form_Builder\Shortcodes\Manager;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

/**
 * @since 3.2.0
 *
 * Class Module
 * @package JFB_Modules\Post_Type
 */
class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	/**
	 * Used to define the editor
	 *
	 * @var boolean
	 */
	public $is_form_editor = false;

	/** @var Meta_Repository */
	private $meta;

	/** @var Actions_Repository */
	private $actions;

	const CAPABILITIES = array(
		'edit_jet_fb_form',
		'read_jet_fb_form',
		'delete_jet_fb_form',
		'edit_jet_fb_forms',
		'edit_others_jet_fb_forms',
		'delete_jet_fb_forms',
		'publish_jet_fb_forms',
		'read_private_jet_fb_forms',
	);

	const SLUG = 'jet-form-builder';

	public function rep_item_id() {
		return 'post-type';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->meta    = new Meta_Repository();
		$this->actions = new Actions_Repository();

		$this->get_meta()->rep_install();

		if ( is_admin() ) {
			$this->actions->rep_install();
		}
	}

	public function on_uninstall() {
		$this->get_meta()->rep_clear();
		$this->get_actions()->rep_clear();
	}

	public function init_hooks() {
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'current_screen', array( $this, 'set_current_screen' ) );

		$slug = self::SLUG;
		add_filter( "manage_{$slug}_posts_columns", array( $this, 'filter_columns' ) );
		add_action( "manage_{$slug}_posts_custom_column", array( $this, 'add_admin_column_content' ), 10, 2 );

		/**
		 * @since 3.0.1
		 */
		add_filter( 'gutenberg_can_edit_post_type', array( $this, 'can_edit_post_type' ), 150, 2 );
		add_filter( 'use_block_editor_for_post_type', array( $this, 'can_edit_post_type' ), 150, 2 );

		/** @since 3.1.1 */
		// watch on this methods performance because it executed multiple times on each page load
		add_filter( 'user_has_cap', array( $this, 'add_admin_capabilities' ) );

		add_filter( 'post_row_actions', array( $this->get_actions(), 'base_add_action_links' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'import_form_js' ) );
	}

	public function remove_hooks() {
		remove_action( 'init', array( $this, 'register_post_type' ) );
		remove_action( 'current_screen', array( $this, 'set_current_screen' ) );

		$slug = self::SLUG;
		remove_filter( "manage_{$slug}_posts_columns", array( $this, 'filter_columns' ) );
		remove_action( "manage_{$slug}_posts_custom_column", array( $this, 'add_admin_column_content' ) );

		/**
		 * @since 3.0.1
		 */
		remove_filter( 'gutenberg_can_edit_post_type', array( $this, 'can_edit_post_type' ), 150 );
		remove_filter( 'use_block_editor_for_post_type', array( $this, 'can_edit_post_type' ), 150 );

		/** @since 3.1.1 */
		// watch on this methods performance because it executed multiple times on each page load
		remove_filter( 'user_has_cap', array( $this, 'add_admin_capabilities' ) );

		remove_filter( 'post_row_actions', array( $this->get_actions(), 'base_add_action_links' ) );
		remove_action( 'admin_enqueue_scripts', array( $this, 'import_form_js' ) );
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
		$arguments = array_diff( $this->meta->get_args( $form_id ), Form_Arguments::arguments() );

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

	public function set_current_screen() {
		$screen = get_current_screen();

		if ( ! $screen || ! $screen->is_block_editor ) {
			return;
		}

		if ( self::SLUG === $screen->id ) {
			$this->is_form_editor = true;

		} elseif ( self::SLUG !== $screen->id ) {
			$this->is_form_editor = false;
		}
	}

	public static function is_form_list_page(): bool {
		if ( ! did_action( 'current_screen' ) ) {
			return false;
		}

		$screen = get_current_screen();

		return ( 'edit-' . self::SLUG ) === $screen->id;
	}

	/**
	 * @param $can
	 * @param $post_type
	 *
	 * @return bool
	 * @since 3.0.1
	 */
	public function can_edit_post_type( $can, $post_type ): bool {
		return self::SLUG === $post_type ? true : $can;
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
			'capability_type'     => 'jet_fb_form',
			'menu_icon'           => $this->get_post_type_icon(),
			'menu_position'       => 120,
			'supports'            => array( 'title', 'editor', 'custom-fields' ),
		);

		register_post_type(
			self::SLUG,
			// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
			apply_filters( 'jet-form-builder/post-type/args', $args )
		);

		$this->get_meta()->after_register_post_type();
	}

	public function add_admin_capabilities( $allcaps ) {
		$capability = apply_filters( 'jet-form-builder/capability/form', 'manage_options' );

		if ( empty( $allcaps[ $capability ] ) ) {
			return $allcaps;
		}

		foreach ( self::CAPABILITIES as $capability ) {
			$allcaps[ $capability ] = true;
		}

		return $allcaps;
	}

	public function import_form_js() {
		if ( ! self::is_form_list_page() ) {
			return;
		}

		$action = $this->get_actions()->get( 'jet_fb_import' );

		$import_button = __( 'Start Import', 'jet-form-builder' );

		ob_start();
		include $this->get_dir( 'templates/import-form.php' );
		$import_template = ob_get_clean();

		$handle = $this->get_handle();

		wp_enqueue_script(
			$handle,
			$this->get_url( 'assets/build/js/import-form.js' ),
			array( 'jquery' ),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script(
			$handle,
			'JetFormBuilderImportForm',
			array(
				'id'       => $action->get_id(),
				'template' => $import_template,
			)
		);
	}

	private function get_post_type_icon() {
		$path = $this->get_dir( 'icon.php' );

		return include_once $path;
	}


	public function maybe_get_jet_sm_ready_styles( $form_id ) {
		return Compatibility::has_jet_sm() ? get_post_meta( $form_id, '_jet_sm_ready_style', true ) : '';
	}

	/**
	 * Returns form meta arguments:
	 * fields_layout, submit_type, captcha and required_mark
	 * in assoc array
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_args( $form_id = false ): array {
		return $this->get_meta()->get_args( $form_id );
	}

	/**
	 * Returns form messages
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_messages( $form_id = false ) {
		return $this->get_meta()->get_messages( $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_preset( $form_id = false ) {
		return $this->get_meta()->get_preset( $form_id );
	}

	/**
	 * Returns captcha settings
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_captcha( $form_id = false ) {
		return $this->get_meta()->get_captcha( $form_id );
	}

	/**
	 * Returns form gateways
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_gateways( $form_id = false ): array {
		return $this->get_meta()->get_gateways( $form_id );
	}

	public function get_validation( $form_id = false ) {
		return $this->get_meta()->get_validation( $form_id );
	}

	public function get_meta(): Meta_Repository {
		return $this->meta;
	}

	/**
	 * @return Actions_Repository
	 */
	public function get_actions(): Actions_Repository {
		return $this->actions;
	}

	/**
	 * @deprecated 3.2.0
	 *
	 * @return string
	 */
	public function slug(): string {
		return self::SLUG;
	}

}
