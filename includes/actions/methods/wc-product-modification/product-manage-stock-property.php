<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;

class Product_Manage_Stock_Property extends Post_Excerpt_Property {

	public function get_id(): string {
		return '_manage_stock';
	}

	public function get_label(): string {
		return __( 'Product Manage Stock', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_manage_stock( $modifier->current_value );
	}
}