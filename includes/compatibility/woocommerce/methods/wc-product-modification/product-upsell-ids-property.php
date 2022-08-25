<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;


class Product_Upsell_Ids_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_upsell_ids';
	}

	public function get_label(): string {
		return __( 'Product Upsell IDs', 'jet-form-builder' );
	}


	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_upsell_ids( $this->value );
	}

	public function get_help(): string {
		return __( 'IDs from the up-sell products', 'jet-form-builder' );
	}
}