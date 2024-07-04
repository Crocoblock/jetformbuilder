<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Comments_Property;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Content_Property;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Excerpt_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Product_Reviews_Allowed_Property extends Post_Comments_Property {

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		$product->set_reviews_allowed( $this->value );
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}
