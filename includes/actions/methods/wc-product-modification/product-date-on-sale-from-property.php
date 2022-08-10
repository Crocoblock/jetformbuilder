<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Date_On_Sale_From_Property extends Base_Post_Property {

	public function get_prop_name(): string {
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