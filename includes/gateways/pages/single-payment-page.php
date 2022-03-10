<?php


namespace Jet_Form_Builder\Gateways\Pages;


use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;

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
			),
			new Meta_Containers\Side_Meta_Container(
			),
		);
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );
		wp_enqueue_style( 'dashicons' );

		parent::assets();
	}
}