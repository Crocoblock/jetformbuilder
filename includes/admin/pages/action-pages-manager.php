<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Admin\Page\Interfaces\Action_Page_It;
use JFB_Components\Repository\Repository_Pattern_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Action_Pages_Manager {

	use Repository_Pattern_Trait;

	public function __construct() {
		add_action(
			'admin_action_jfb',
			array( $this, 'do_action' )
		);
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/admin/action-pages',
			array()
		);
	}

	/**
	 * @param $item
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( $item instanceof Action_Page_It ) {
			return;
		}
		$this->_rep_abort_this();
	}

	public function do_action() {
		$slug = Tools::sanitize_get_param( 'slug' );

		try {
			/** @var Action_Page_It $page */
			$page = $this->rep_get_item( $slug );
		} catch ( Repository_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( $exception->getMessage() );
		}

		if ( ! $page->check_permission() ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( __( 'You do not have access to view this page', 'jet-form-builder' ) );
		}

		Pages_Manager::instance()->set_current_page_raw( $page );

		try {
			$page->render_page();
		} catch ( Not_Found_Page_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( $exception->getMessage() );
		}
	}

}
