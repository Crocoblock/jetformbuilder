<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;


abstract class Base_Product_Property extends Base_Object_Property {

	protected function get_product( Abstract_Modifier $modifier ): \WC_Product {
		/** @var Product_Id_Property $id */
		$id = $modifier->get( 'ID' );

		return $id->get_product();
	}

	public function get_related(): array {
		return array( 'ID' );
	}

}