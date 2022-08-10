<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;

class Product_Cross_Sell_Ids_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return '_crosssell_ids';
	}

	public function get_label(): string {
		return __( 'Product Cross Sell IDs', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_cross_sell_ids( $modifier->get_value() );
	}
}