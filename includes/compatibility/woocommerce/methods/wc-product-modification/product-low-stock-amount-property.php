<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;

class Product_Low_Stock_Amount_Property extends Post_Excerpt_Property {

	public function get_id(): string {
		return '_low_stock_amount';
	}

	public function get_label(): string {
		return __( 'Product Low Stock Amount', 'jet-form-builder' );
	}


	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_low_stock_amount( $value );
	}
}