<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;

/**
 * Update `product_tag` taxonomy
 *
 * Class Product_Category_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Tag_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'set_tag_ids';
	}

	public function get_label(): string {
		return __( 'Product Tag IDs', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_tag_ids( $modifier->current_value );
	}
}