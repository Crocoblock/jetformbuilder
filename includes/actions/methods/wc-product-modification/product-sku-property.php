<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;

class Product_Sku_Property extends Base_Object_Property {

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
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		try {
			$product->set_sku( $modifier->get_value() );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}
}