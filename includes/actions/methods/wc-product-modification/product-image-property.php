<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Thumbnail_Property;

class Product_Image_Property extends Post_Thumbnail_Property {
	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_image_id( $modifier->current_value );
	}
}