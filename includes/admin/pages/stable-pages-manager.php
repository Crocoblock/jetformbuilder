<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages\Form_Records;
use Jet_Form_Builder\Admin\Pages\Settings\Settings_Page;
use Jet_Form_Builder\Classes\Http\Utm_Url;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Pages\Payments_Page;

class Stable_Pages_Manager {

	use Repository_Pattern_Trait;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_pages' ) );
		add_action( 'admin_menu', array( $this, 'add_static_pages' ) );
		add_action( 'admin_head', array( $this, 'modify_item_styles') );
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

	protected function get_parent_slug(): string {
		return 'edit.php?post_type=' . jet_form_builder()->post_type->slug();
	}

	/**
	 * Register appointments
	 */
	public function add_pages() {
		$parent = $this->get_parent_slug();

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

	public function add_static_pages() {
		$parent = $this->get_parent_slug();
		$pages  = array();

		if ( ! jet_form_builder()->addons_manager->is_active() ) {
			$utm = new Utm_Url( 'wp-dashboard/jetformbuilder-menu' );
			$utm->set_campaign( 'go-pro-button' );

			$pages[] = array(
				'title'      => __( 'Go PRO', 'jet-form-builder' ),
				'capability' => 'read',
				'slug'       => $utm->add_query( JET_FORM_BUILDER_SITE . '/pricing/' ),
			);
		}

		foreach ( $pages as $page ) {
			add_submenu_page(
				$parent,
				$page['title'],
				$page['title'],
				$page['capability'],
				$page['slug']
			);
		}
	}

	public function modify_item_styles() {
		echo '<style type="text/css">
			#adminmenu #menu-posts-jet-form-builder a[href*="https://jetformbuilder.com"] { color: #F5C546; }
		</style>';
	}
}
