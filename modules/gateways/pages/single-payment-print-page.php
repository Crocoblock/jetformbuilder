<?php


namespace JFB_Modules\Gateways\Pages;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;
use JFB_Modules\Gateways\Meta_Boxes\Payer_Box;
use JFB_Modules\Gateways\Meta_Boxes\Payer_Shipping_Box;
use Jet_Form_Builder\Gateways\Meta_Boxes\Payment_Details_Box;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Single_Payment_Print_Page extends Base_Single_Page {

	use Gateways_Pages_Trait;

	/**
	 * Page title
	 */
	public function title(): string {
		return __( 'JetFormBuilder Payment', 'jet-form-builder' );
	}

	public function slug(): string {
		return 'payment-print';
	}

	public function parent_slug(): string {
		return Payments_Page::SLUG;
	}

	public function meta_containers(): array {
		return array(
			new Meta_Containers\Normal_Meta_Container(
				new Payer_Box(),
				new Payer_Shipping_Box()
			),
			new Meta_Containers\Side_Meta_Container(
				new Payment_Details_Box()
			),
		);
	}

	public function assets() {
		wp_enqueue_style( Pages_Manager::STYLE_ADMIN );
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );

		parent::assets();
	}

}
