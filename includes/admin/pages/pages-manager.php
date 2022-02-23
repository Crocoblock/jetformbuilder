<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Admin_Page_Interface;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;

class Pages_Manager {

	use Repository_Pattern_Trait;

	/** @var Base_Page */
	private $current_page;

	public function __construct() {
		/** Register pages */
		$this->rep_install();
		$this->set_current_page();

		add_action( 'admin_menu', array( $this, 'add_pages' ) );
	}

	/**
	 * Register admin pages
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/admin/pages',
			array(
				new Settings_Page(),
				new Addons_Page(),
				new Form_Records(),
				new Payments_Page(),
			)
		);
	}

	/**
	 * @param Base_Page $item
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( ! $item->is_active() ) {
			$this->_rep_abort_this();
		}
	}

	/**
	 * @throws Not_Found_Page_Exception
	 */
	public function get_current(): Admin_Page_Interface {
		if ( is_a( $this->current_page, Admin_Page_Interface::class ) ) {
			return $this->current_page;
		}

		throw new Not_Found_Page_Exception( 'Current page is not defined' );
	}

	/**
	 * Check if is dashboard page
	 *
	 * @return boolean [description]
	 */
	public function is_dashboard_page() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$page = ! empty( $_GET['page'] ) ? sanitize_key( $_GET['page'] ) : false;

		return $this->rep_isset_item( $page );
	}

	/**
	 * Set current admin page
	 */
	public function set_current_page() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		try {
			$this->rep_throw_if_undefined( $_GET['page'] ?? '' );

			/** @var Base_Page $page */
			$page = $this->rep_get_item( sanitize_key( $_GET['page'] ?? '' ) );
		} catch ( Repository_Exception $exception ) {
			return;
		}
		$item_id = absint( $_GET['item_id'] ?? 0 );

		try {
			$this->current_page = $page->create_single( $item_id );
		} catch ( Not_Found_Page_Exception $exception ) {
			$this->current_page = $page;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'assets' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Recommended
	}

	/**
	 * Dashboard assets
	 */
	public function assets() {
		$ui_data = Plugin::instance()->framework->get_included_module_data( 'cherry-x-vue-ui.php' );
		( new \CX_Vue_UI( $ui_data ) )->enqueue_assets();

		$this->current_page->render_config();
		$this->register_scripts();

		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
		do_action( "jet-fb/admin-pages/before-assets/{$this->current_page->slug()}", $this );

		$this->current_page->assets();
	}

	public function register_scripts() {
		$suffix = '.min';

		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
			$suffix = '';
		}

		wp_register_script(
			'jet-form-builder-admin-vuex',
			Plugin::instance()->plugin_url( 'assets/lib/vuex' . $suffix . '.js' ),
			array(),
			'3.6.2',
			true
		);

		wp_register_script(
			'jet-form-builder-admin-package',
			Plugin::instance()->plugin_url( 'assets/js/admin-package.js' ),
			array(
				'wp-api',
				'wp-api-fetch',
			),
			Plugin::instance()->get_version(),
			true
		);

		wp_register_script(
			'jet-form-builder-admin-vuex-package',
			Plugin::instance()->plugin_url( 'assets/js/admin-vuex-package.js' ),
			array(
				'jet-form-builder-admin-vuex',
				'jet-form-builder-admin-package'
			),
			Plugin::instance()->get_version(),
			true
		);

		wp_register_script(
			$this->current_page->slug(),
			$this->current_page->base_script_url(),
			array(),
			Plugin::instance()->get_version(),
			true
		);

		wp_set_script_translations(
			$this->current_page->slug(),
			'jet-form-builder',
			Plugin::instance()->plugin_dir( 'languages' )
		);
	}

	/**
	 * @param $page_slug
	 *
	 * @return string
	 */
	public function get_url_of( $page_slug ): string {
		try {
			return $this->rep_get_item( $page_slug )->get_url();
		} catch ( Repository_Exception $exception ) {
			return '';
		}
	}

	/**
	 * Register appointments
	 */
	public function add_pages() {
		$parent = 'edit.php?post_type=' . jet_form_builder()->post_type->slug();

		foreach ( $this->rep_get_items() as $page ) {
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
