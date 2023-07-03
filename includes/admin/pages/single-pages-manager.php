<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Admin\Print_Page\Footer;
use JFB_Components\Admin\Print_Page\Header;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Framework\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Single_Pages_Manager {

	use Repository_Pattern_Trait;

	/**
	 * Register admin pages
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/admin/single-pages',
			array()
		);
	}

	public function render_standalone() {
		try {
			$page = Pages_Manager::instance()->get_current();

			$page->make();
		} catch ( Not_Found_Page_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( 'Invalid request: ' . $exception->getMessage() );
		}


		try {
			Pages_Manager::instance()->assets();

			/** @var Module $framework */
			$framework = jet_form_builder()->module( 'framework' );

		} catch ( Repository_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( 'Something wen\'t wrong: ' . $exception->getMessage() );
		}

		$header = new Header();
		$footer = new Footer();

		$header->add_styles(
			array(
				'dashicons',
				'common',
				'edit',
			)
		);
		$footer->add_scripts(
			array(
				'cx-vue-ui',
				Pages_Manager::SCRIPT_VUEX_PACKAGE,
				$page->slug(),
			)
		);

		do_action( 'jet-form-builder/before-print-page/header', $header, $page );

		$header->output();
		$page->render_page();
		$framework->get_cx_vue_ui()->print_templates();

		do_action( 'jet-form-builder/before-print-page/footer', $footer, $page );

		$footer->output();
	}
}
