<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Thumbnail_Property;

class Product_Image_Property extends Post_Thumbnail_Property {

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		$product->set_image_id( $value );
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}