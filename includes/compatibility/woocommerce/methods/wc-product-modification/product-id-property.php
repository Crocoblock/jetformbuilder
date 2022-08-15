<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Required_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Id_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Id_Property extends Post_Id_Property {

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$this->value = new \WC_Product( $value );
	}

	public function get_product(): \WC_Product {
		if ( is_a( $this->value, \WC_Product::class ) ) {
			return $this->value;
		}
		$this->value = new \WC_Product();

		return $this->value;
	}


}