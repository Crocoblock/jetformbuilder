<?php


namespace Jet_Form_Builder\Admin\Pages;


class Paypal_Entries extends Base_Page {

	public function slug(): string {
		return 'paypal-entries';
	}

	public function title(): string {
		return __( 'Paypal Entries', 'jet-form-builder' );
	}

	public function page_config(): array {
		return array();
	}
}