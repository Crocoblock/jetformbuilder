<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;


/**
 * Update `product_visibility` taxonomy
 *
 * Class Product_Featured_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Featured_Property extends Base_Product_Property {

	public function get_label(): string {
		return __( 'Product is Featured', 'jet-form-builder' );
	}

	public function get_id(): string {
		return 'is_featured';
	}


	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_featured( $value );
	}
}