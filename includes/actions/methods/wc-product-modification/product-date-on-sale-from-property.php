<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Date_On_Sale_From_Property extends Base_Object_Property {

	public function get_id(): string {
		return '_sale_price_dates_from';
	}

	public function get_label(): string {
		return __( 'Product Date on Sale from', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_date_on_sale_from( $modifier->get_value() );
	}
}