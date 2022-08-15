<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

use Jet_Form_Builder\Exceptions\Action_Exception;

class Product_Sku_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_sku';
	}

	public function get_label(): string {
		return __( 'Product SKU', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		try {
			$product->set_sku( $value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}
}