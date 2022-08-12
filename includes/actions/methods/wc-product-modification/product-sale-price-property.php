<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

class Product_Sale_Price_Property extends Base_Object_Property {

	public function get_id(): string {
		return '_sale_price';
	}

	public function get_label(): string {
		return __( 'Product Sale Price', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 *
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_sale_price( $modifier->get_value() );
	}
}