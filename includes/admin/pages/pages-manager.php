<?php


namespace Jet_Form_Builder\Admin\Pages;


use Jet_Form_Builder\Plugin;

class Pages_Manager {

	/**
	 * @var Base_Page[]
	 */
	private $pages = array();

	/**
	 * @var Base_Page
	 */
	private $current_page;

	/**
	 * [__construct description]
	 *
	 * @param array $pages [description]
	 */
	public function __construct() {
		$this->register_pages();
		add_action( 'admin_menu', array( $this, 'add_pages' ) );

		if ( $this->is_dashboard_page() ) {
			$this->set_current_page();
			add_action( 'admin_enqueue_scripts', array( $this, 'assets' ) );
		}
	}

	/**
	 * Register admin pages
	 */
	public function register_pages() {
		$pages = apply_filters( 'jet-form-builder/admin/pages', array(
			new Settings_Page(),
			new Addons_Page(),
			new Paypal_Entries()
		), $this );

		foreach ( $pages as $page ) {
			$this->pages[ $page->slug() ] = $page;
		}
	}

	/**
	 * Check if is dashboard page
	 *
	 * @return boolean [description]
	 */
	public function is_dashboard_page() {

		$page = ! empty( $_GET['page'] ) ? esc_attr( $_GET['page'] ) : false;

		if ( ! $page ) {
			return false;
		} else {
			return isset( $this->pages[ $page ] );
		}

	}

	/**
	 * Set current admin page
	 */
	public function set_current_page() {
		$this->current_page = $this->pages[ esc_attr( $_GET['page'] ) ];
	}

	/**
	 * Dashboard assets
	 */
	public function assets() {
		$ui_data = Plugin::instance()->framework->get_included_module_data( 'cherry-x-vue-ui.php' );
		( new \CX_Vue_UI( $ui_data ) )->enqueue_assets();

		( new Page_Config( $this->current_page ) )->render_config();

		wp_enqueue_script(
			'jet-form-builder-admin-package',
			Plugin::instance()->plugin_url( 'assets/js/admin-package.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);

		do_action( "jet-fb/admin-pages/before-assets/{$this->current_page->slug()}", $this );

		$this->current_page->assets();
	}

	/**
	 * @param $page_slug
	 *
	 * @return string
	 */
	public function get_url_of( $page_slug ): string {

		if ( ! isset( $this->pages[ $page_slug ] ) ) {
			return '';
		}

		return $this->pages[ $page_slug ]->get_url();
	}

	/**
	 * Check if passed page is currently displayed
	 *
	 * @param Base_Page $page
	 *
	 * @return bool
	 */
	public function is_page_now( Base_Page $page ): bool {

		if ( ! $this->is_dashboard_page() ) {
			return false;
		}

		return ( $page->slug() === $this->current_page->slug() );

	}

	/**
	 * Register appointments
	 */
	public function add_pages() {
		$parent = 'edit.php?post_type=' . jet_form_builder()->post_type->slug();

		foreach ( $this->pages as $page ) {
			add_submenu_page(
				$parent,
				$page->title(),
				$page->title(),
				'manage_options',
				$page->slug(),
				array( $page, 'render' )
			);
		}
	}

}