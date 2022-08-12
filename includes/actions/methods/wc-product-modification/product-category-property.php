<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

/**
 * Update `product_cat` taxonomy
 *
 * Class Product_Category_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Category_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'set_category_ids';
	}

	public function get_label(): string {
		return __( 'Product Category IDs', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_category_ids( $modifier->current_value );
	}
}