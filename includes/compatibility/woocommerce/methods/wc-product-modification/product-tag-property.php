<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;


/**
 * Update `product_tag` taxonomy
 *
 * Class Product_Category_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Tag_Property extends Base_Product_Property {

	public function get_id(): string {
		return 'set_tag_ids';
	}

	public function get_label(): string {
		return __( 'Product Tag IDs', 'jet-form-builder' );
	}


	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_tag_ids( $value );
	}
}