<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;

class Product_Stock_Quantity_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_stock';
	}

	public function get_label(): string {
		return __( 'Product Stock Quantity', 'jet-form-builder' );
	}


	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_stock_quantity( $this->value );
	}
}