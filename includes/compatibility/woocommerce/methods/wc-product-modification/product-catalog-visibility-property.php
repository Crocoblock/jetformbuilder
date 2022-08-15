<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

use Jet_Form_Builder\Exceptions\Action_Exception;

/**
 * Update `product_visibility` taxonomy
 *
 * Class Product_Catalog_Visibility_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Catalog_Visibility_Property extends Base_Product_Property {

	public function get_id(): string {
		return 'catalog_visibility';
	}

	public function get_label(): string {
		return __( 'Product Catalog Visibility', 'jet-form-builder' );
	}

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		try {
			$product->set_catalog_visibility( $value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}
}