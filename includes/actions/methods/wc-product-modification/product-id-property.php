<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Id_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Id_Property extends Post_Id_Property {

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 *
	 * @throws Action_Exception
	 * @throws Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		parent::do_before( $modifier );

		$modifier->create_product( $modifier->get_value() );
	}

}