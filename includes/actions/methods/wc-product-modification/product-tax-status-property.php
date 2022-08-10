<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Tax_Status_Property extends Post_Excerpt_Property {

	public function get_prop_name(): string {
		return '_tax_status';
	}

	public function get_label(): string {
		return __( 'Product Tax Status', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		try {
			$product->set_tax_status( $modifier->current_value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}
}