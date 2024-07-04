<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Content_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Update `post_content` \WP_Post property
 *
 * Class Product_Description_Property
 *
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Description_Property extends Post_Content_Property {


	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		$product->set_description( $this->value );
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}
