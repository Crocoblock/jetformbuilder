<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Status_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Status_Property extends Post_Status_Property {

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 *
	 * @throws Modifier_Exclude_Property
	 * @throws Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		parent::do_before( $modifier );

		$product = $modifier->get_product();

		$product->set_status( $modifier->get_value() );
	}
}