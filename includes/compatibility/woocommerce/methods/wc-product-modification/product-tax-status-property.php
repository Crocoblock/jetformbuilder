<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Tax_Status_Property extends Base_Product_Property {

	public function get_id(): string {
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
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		try {
			$product->set_tax_status( $value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}

	public function get_help(): string {
		return __( "Accepts: 'taxable', 'shipping' or 'none'", 'jet-form-builder' );
	}
}