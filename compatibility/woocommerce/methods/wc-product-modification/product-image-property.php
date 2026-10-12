<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Thumbnail_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Product_Image_Property extends Post_Thumbnail_Property {

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		// WooCommerce stores -1 as an image ID; use an empty string to clear the thumbnail.
		$product->set_image_id( -1 === $this->value ? '' : $this->value );
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}
