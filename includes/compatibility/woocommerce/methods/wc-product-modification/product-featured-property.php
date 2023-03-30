<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Update `product_visibility` taxonomy
 *
 * Class Product_Featured_Property
 *
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Featured_Property extends Base_Product_Property {

	public function get_label(): string {
		return __( 'Product is Featured', 'jet-form-builder' );
	}

	public function get_id(): string {
		return 'is_featured';
	}

	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		$product->set_featured( $this->value );
	}

	public function get_help(): string {
		return __( 'Whether the product is featured or not', 'jet-form-builder' );
	}
}
