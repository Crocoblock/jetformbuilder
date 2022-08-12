<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;


class Product_Backorders_Property extends Base_Object_Property {

	public function get_id(): string {
		return '_backorders';
	}

	public function get_label(): string {
		return __( 'Product Backorders', 'jet-form-builder' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_backorders( $value );
	}
}