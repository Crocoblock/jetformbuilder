<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;

class Product_Sold_Individually_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_sold_individually';
	}

	public function get_label(): string {
		return __( 'Product Sold Individually', 'jet-form-builder' );
	}


	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_sold_individually( $value );
	}

	public function get_help(): string {
		return __( 'Whether or not product is sold individually', 'jet-form-builder' );
	}
}