<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;


class Product_Cross_Sell_Ids_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_crosssell_ids';
	}

	public function get_label(): string {
		return __( 'Product Cross Sell IDs', 'jet-form-builder' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_cross_sell_ids( $value );
	}
}