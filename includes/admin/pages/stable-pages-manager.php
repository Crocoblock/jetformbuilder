<?php


namespace Jet_Form_Builder\Admin\Pages;


use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages\Form_Records;
use Jet_Form_Builder\Gateways\Pages\Payments_Page;

class Stable_Pages_Manager {

	use Repository_Pattern_Trait;

	public function __construct() {
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