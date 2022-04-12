<?php


namespace Jet_Form_Builder\Gateways\Pages;

use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Gateways\Table_Views\Payments;

class Payments_Page extends Base_Page {

	const SLUG = 'jfb-payments';

	public function slug(): string {
		return self::SLUG;
	}

	public function title(): string {
		return __( 'Payments', 'jet-form-builder' );
	}

	public function page_config(): array {
		$view = new Payments();

		return $view->load_view();
	}

	public function assets() {
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );

		parent::assets();
	}

}
