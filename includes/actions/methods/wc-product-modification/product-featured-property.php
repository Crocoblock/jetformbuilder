<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;

class Product_Featured_Property extends Base_Post_Property {

	public function get_supported_post_types(): array {
		return array( 'product' );
	}

	public function get_label(): string {
		return __( 'Product Name', 'jet-form-builder' );
	}

	public function get_prop_name(): string {
		return 'is_featured';
	}

	public function do_before( Abstract_Modifier $modifier ) {
		$product = Wc_Product_Modifier::get_product();

		$product->set_featured( $modifier->current_value );
	}
}