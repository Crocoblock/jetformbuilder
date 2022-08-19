<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Silence_Exception;


class Product_Date_On_Sale_To_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_sale_price_dates_to';
	}

	public function get_label(): string {
		return __( 'Product Date on Sale to', 'jet-form-builder' );
	}

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_date_on_sale_to( $this->value );
	}
}