<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Excerpt_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Product_Low_Stock_Amount_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_low_stock_amount';
	}

	public function get_label(): string {
		return __( 'Product Low Stock Amount', 'jet-form-builder' );
	}

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_low_stock_amount( $this->value );
	}
}
