<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views\Payments;

class Paypal_Payments_Entries extends Base_Page {

	public function slug(): string {
		return 'jfb-paypal-payments';
	}

	public function title(): string {
		return __( 'Paypal Payments', 'jet-form-builder' );
	}

	public function page_config(): array {
		$view = new Payments();

		return $view->load_view();
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex' );
		wp_enqueue_script( 'wp-api' );
		wp_enqueue_script( 'wp-api-fetch' );

		parent::assets();
	}

}
