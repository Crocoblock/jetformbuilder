<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Admin_Page_Interface;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;

/**
 * @method static Pages_Manager instance()
 *
 * Class Pages_Manager
 * @package Jet_Form_Builder\Admin\Pages
 */
class Pages_Manager {

	use Instance_Trait;

	/** @var Base_Page */
	private $current_page;

	/** @var Stable_Pages_Manager */
	private $stable_manager;
	private $single_manager;

	protected function __construct() {
		/** Register pages */
		$this->stable()->rep_install();
		$this->single()->rep_install();
	}

	public function set_up() {
		add_action( 'init', array( $this, 'set_current_page' ), 100 );
	}

	public function stable(): Stable_Pages_Manager {
		if ( ! $this->stable_manager ) {
			$this->stable_manager = new Stable_Pages_Manager();
		}

		return $this->stable_manager;
	}

	public function single(): Single_Pages_Manager {
		if ( ! $this->single_manager ) {
			$this->single_manager = new Single_Pages_Manager();
		}

		return $this->single_manager;
	}

	/**
	 * @param string $slug
	 *
	 * @return Base_Page
	 * @throws Repository_Exception
	 */
	public function get_stable( string $slug ): Base_Page {
		return $this->stable()->rep_get_item( $slug );
	}

	/**
	 * @param string $slug
	 *
	 * @return Base_Single_Page
	 * @throws Repository_Exception
	 */
	public function get_single( string $slug ): Base_Single_Page {
		return $this->single()->rep_get_item( $slug );
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
	 * Set current admin page
	 */
	public function set_current_page() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		try {
			$slug = sanitize_key( $_GET['page'] ?? '' );
			$page = $this->get_stable( $slug );
		} catch ( Repository_Exception $exception ) {
			return;
		}
		$item_id = absint( $_GET['item_id'] ?? 0 );

		try {
			$this->current_page = $this->get_single( $slug );
			$this->current_page->make( $item_id );

		} catch ( Not_Found_Page_Exception $exception ) {
			$this->current_page = $page;
		} catch ( Repository_Exception $exception ) {
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
				'jet-form-builder-admin-package',
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

}
