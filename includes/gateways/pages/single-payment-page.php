<?php


namespace Jet_Form_Builder\Gateways\Pages;


use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;
use Jet_Form_Builder\Gateways\Meta_Boxes\Payer_Box;
use Jet_Form_Builder\Gateways\Meta_Boxes\Payer_Shipping_Box;
use Jet_Form_Builder\Gateways\Meta_Boxes\Payment_Details_Box;

class Single_Payment_Page extends Base_Single_Page {

	/**
	 * Page title
	 */
	public function title(): string {
		return __( 'JetFormBuilder Payment', 'jet-form-builder' );
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