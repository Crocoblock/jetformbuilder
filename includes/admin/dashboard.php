<?php
namespace Jet_Form_Builder\Admin;

use Jet_Form_Builder\Plugin;

/**
 * Dashboard interface manager
 */
class Dashboard {

	private $pages        = array();
	private $current_page = false;

	/**
	 * [__construct description]
	 * @param array $pages [description]
	 */
	public function __construct( $pages = array() ) {

		foreach ( $pages as $page ) {
			$this->pages[ $page->slug() ] = $page;
		}

		add_action( 'admin_menu', array( $this, 'register_pages' ) );

		if ( $this->is_dashboard_page() ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'assets' ) );
			$page = ! empty( $_GET['page'] ) ? esc_attr( $_GET['page'] ) : false;
			$this->current_page = $this->pages[ $page ];
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
	 * Check if passed page is currently dispalyed
	 *
	 * @return boolean [description]
	 */
	public function is_page_now( $page ) {

		if ( ! $this->is_dashboard_page() ) {
			return false;
		}

		return ( $page->slug() === $this->current_page->slug() );

	}

	/**
	 * Dashboard assets
	 *
	 * @param  [type] $hook [description]
	 * @return [type]       [description]
	 */
	public function assets( $hook ) {
		$this->current_page->assets();
	}

	/**
	 * Register appointments
	 * @return [type] [description]
	 */
	public function register_pages() {

		$parent = false;

		foreach ( $this->pages as $page ) {

			if ( $page->is_hidden() ) {
				continue;
			}

			if ( ! $parent ) {

				$parent = $page->slug();
				add_menu_page(
					$page->title(),
					$page->menu_title(),
					'manage_options',
					$page->slug(),
					array( $page, 'render' ),
					'dashicons-email-alt'
				);

			} else {

				add_submenu_page(
					$parent,
					$page->title(),
					$page->menu_title(),
					'manage_options',
					$page->slug(),
					array( $page, 'render' )
				);

			}
		}

	}

}