<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Status_Property;

class Product_Status_Property extends Post_Status_Property {

	public function get_supported_post_types(): array {
		return array( 'product' );
	}

	public function do_before( Abstract_Modifier $modifier ) {
		parent::do_before( $modifier );

		$product = Wc_Product_Modifier::get_product();

		$product->set_status( $modifier->get_value() );
	}
}