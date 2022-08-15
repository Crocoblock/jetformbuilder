<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;


/**
 * Update `product_cat` taxonomy
 *
 * Class Product_Category_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Category_Property extends Base_Product_Property {

	public function get_id(): string {
		return 'set_category_ids';
	}

	public function get_label(): string {
		return __( 'Product Category IDs', 'jet-form-builder' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_category_ids( $value );
	}
}