<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Date_Property;

class Product_Date_Property extends Post_Date_Property {


	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		$product->set_date_created( $value );
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}