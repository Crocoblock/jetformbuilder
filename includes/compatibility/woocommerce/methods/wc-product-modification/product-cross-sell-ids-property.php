<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Silence_Exception;


class Product_Cross_Sell_Ids_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_crosssell_ids';
	}

	public function get_label(): string {
		return __( 'Product Cross Sell IDs', 'jet-form-builder' );
	}

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_cross_sell_ids( $this->value );
	}

	public function get_help(): string {
		return __( 'IDs from the cross-sell products', 'jet-form-builder' );
	}
}