<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Silence_Exception;


class Product_Backorders_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_backorders';
	}

	public function get_label(): string {
		return __( 'Product Backorders', 'jet-form-builder' );
	}

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );

		$product = $this->get_product( $modifier );

		$product->set_backorders( $this->value );
	}

	public function get_help(): string {
		return __( "Accepts: 'yes', 'no' or 'notify'", 'jet-form-builder' );
	}
}