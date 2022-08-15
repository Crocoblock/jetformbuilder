<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Status_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Status_Property extends Post_Status_Property {

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		$product->set_status( $value );
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}