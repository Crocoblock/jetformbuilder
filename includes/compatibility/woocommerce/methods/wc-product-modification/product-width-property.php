<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Silence_Exception;


class Product_Width_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_width';
	}

	public function get_label(): string {
		return __( 'Product Width', 'jet-form-builder' );
	}

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_width( $this->value );
	}
}