<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Excerpt_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Product_Stock_Status_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_stock_status';
	}

	public function get_label(): string {
		return __( 'Product Stock Status', 'jet-form-builder' );
	}


	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_stock_status( $this->value );
	}
}
