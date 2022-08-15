<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;

class Product_Manage_Stock_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_manage_stock';
	}

	public function get_label(): string {
		return __( 'Product Manage Stock', 'jet-form-builder' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_manage_stock( $value );
	}

	public function get_help(): string {
		return __( 'Whether or not manage stock is enabled', 'jet-form-builder' );
	}
}