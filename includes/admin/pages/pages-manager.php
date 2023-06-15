<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Exceptions\Handler_Exception;
use JFB_Components\Admin\Page\Interfaces\Action_Page_It;
use JFB_Components\Admin\Page\Interfaces\Admin_Page_It;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;
use JFB_Modules\Framework\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Pages_Manager instance()
 *
 * Class Pages_Manager
 * @package Jet_Form_Builder\Admin\Pages
 */
class Pages_Manager {

	use Instance_Trait;

	/** @var Base_Page|Base_Single_Page|Action_Page_It */
	private $current_page;

	private $stable_manager;
	private $single_manager;
	private $action_manager;

	const STYLE_ADMIN         = 'jet-form-builder-admin-style';
	const STYLE_DASHICONS     = 'dashicons';
	const SCRIPT_VUEX         = 'jet-form-builder-admin-vuex';
	const SCRIPT_PACKAGE      = 'jet-form-builder-admin-package';
	const SCRIPT_VUEX_PACKAGE = 'jet-form-builder-admin-vuex-package';

	protected function __construct() {
		/** Register pages */
		$this->stable()->rep_install();
		$this->single()->rep_install();
		$this->actions()->rep_install();
	}

	public function set_up() {
		add_action( 'init', array( $this, 'set_current_page' ), 100 );
		add_action( 'admin_footer_text', array( $this, 'admin_footer_text' ) );
	}

	public function get_stable_url( string $slug, array $query_args = array() ): string {
		try {
			$page = $this->get_stable( $slug );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return $page->get_url( $query_args );
	}

	public function get_action_url( string $slug, array $query_args = array() ): string {
		try {
			$page = $this->get_action( $slug );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return $page->get_url( $query_args );
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
	 * @param string $slug
	 *
	 * @return Action_Page_It
	 * @throws Repository_Exception
	 */
	public function get_action( string $slug ): Action_Page_It {
		return $this->actions()->rep_get_item( $slug );
	}

	/**
	 * @throws Not_Found_Page_Exception
	 * @since 3.1.0
	 */
	public function is_current_single() {
		if ( is_a( $this->get_current(), Base_Single_Page::class ) ) {
			return;
		}
		throw new Not_Found_Page_Exception( 'not_single' );
	}

	/**
	 * @throws Not_Found_Page_Exception
	 * @since 3.1.0
	 */
	public function is_current_stable() {
		if ( is_a( $this->get_current(), Base_Page::class ) ) {
			return;
		}
		throw new Not_Found_Page_Exception( 'not_stable' );
	}

	/**
	 * @throws Not_Found_Page_Exception
	 * @since 3.1.0
	 */
	public function is_current_action() {
		if ( is_a( $this->get_current(), Action_Page_It::class ) ) {
			return;
		}
		throw new Not_Found_Page_Exception( 'not_action' );
	}

	/**
	 * @return Base_Page|Base_Single_Page
	 * @throws Not_Found_Page_Exception
	 */
	public function get_current(): Admin_Page_It {
		if ( is_a( $this->current_page, Admin_Page_It::class ) ) {
			return $this->current_page;
		}

		throw new Not_Found_Page_Exception( 'Current page is not defined' );
	}

	public function admin_footer_text( string $footer_text ): string {
		try {
			$this->get_current();
		} catch ( Not_Found_Page_Exception $exception ) {
			return $footer_text;
		}

		return sprintf(
		/* translators: %s - link to the JetFormBuilder reviews page */
			__(
				'Enjoyed <strong>JetFormBuilder</strong>? 
Please leave us a <a href="%s" target="_blank">★★★★★</a> rating. 
We really appreciate your support!',
				'jet-form-builder'
			),
			'https://wordpress.org/support/plugin/jetformbuilder/reviews/?filter=5'
		);
	}


	/**
	 * Set current admin page
	 */
	public function set_current_page() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		$post_type = sanitize_key( $_GET['post_type'] ?? '' );

		if ( jet_form_builder()->post_type->slug() !== $post_type ) {
			return;
		}

		try {
			$slug = sanitize_key( $_GET['page'] ?? '' );
			$page = $this->get_stable( $slug );
		} catch ( Repository_Exception $exception ) {
			return;
		}

		try {
			$this->set_current_page_raw( $this->get_single( $slug ) );
			$this->current_page->make();

		} catch ( Not_Found_Page_Exception $exception ) {
			$this->set_current_page_raw( $page );
		} catch ( Repository_Exception $exception ) {
			$this->set_current_page_raw( $page );
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'assets' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Recommended
	}

	/**
	 * Dashboard assets
	 *
	 * @throws Repository_Exception
	 */
	public function assets() {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'framework' );
		$module->get_cx_vue_ui()->enqueue_assets();

		$this->current_page->render_config();
		$this->register_scripts();

		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
		do_action( "jet-fb/admin-pages/before-assets/{$this->current_page->slug()}", $this );

		$this->current_page->assets();
	}

	public function register_scripts() {
		wp_register_script(
			self::SCRIPT_VUEX,
			Plugin::instance()->plugin_url( 'assets/lib/vuex{min}.js' ),
			array(),
			'3.6.2',
			true
		);

		$name = ( $this->current_page instanceof Base_Single_Page ) ? 'single' : 'static';

		wp_register_style(
			self::STYLE_ADMIN,
			Plugin::instance()->plugin_url( "assets/css/admin/$name.css" ),
			array(
				self::STYLE_DASHICONS,
			),
			Plugin::instance()->get_version()
		);

		wp_register_script(
			self::SCRIPT_PACKAGE,
			Plugin::instance()->plugin_url( 'assets/js/admin/package{min}.js' ),
			array(
				'wp-api',
				'wp-api-fetch',
			),
			Plugin::instance()->get_version(),
			true
		);

		wp_localize_script(
			self::SCRIPT_PACKAGE,
			'JetFBPageConfigPackage',
			array(
				'nonce' => wp_create_nonce( $this->current_page->slug() ),
			)
		);

		wp_register_script(
			self::SCRIPT_VUEX_PACKAGE,
			Plugin::instance()->plugin_url( 'assets/js/admin/vuex.package{min}.js' ),
			array(
				self::SCRIPT_VUEX,
				self::SCRIPT_PACKAGE,
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

	public function set_current_page_raw( Admin_Page_It $page ) {
		$this->current_page = $page;
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

	public function actions(): Action_Pages_Manager {
		if ( ! $this->action_manager ) {
			$this->action_manager = new Action_Pages_Manager();
		}

		return $this->action_manager;
	}

}
