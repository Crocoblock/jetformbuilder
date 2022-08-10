<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;

class Product_Sold_Individually_Property extends Post_Excerpt_Property {

	public function get_prop_name(): string {
		return '_sold_individually';
	}

	public function get_label(): string {
		return __( 'Product Sold Individually', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_sold_individually( $modifier->current_value );
	}
}