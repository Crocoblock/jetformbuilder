<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		try {
			$product->set_sku( $this->value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}
}
