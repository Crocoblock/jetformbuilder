<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Update `product_visibility` taxonomy
 *
 * Class Product_Catalog_Visibility_Property
 *
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
	 * @param Abstract_Modifier $modifier
	 *
	 * @return void|null
	 * @throws Action_Exception
	 * @throws Silence_Exception
	 */
	public function get_value( Abstract_Modifier $modifier ) {
		parent::get_value( $modifier );
		$product = $this->get_product( $modifier );

		try {
			$product->set_catalog_visibility( $this->value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage() );
		}
	}

	public function get_help(): string {
		return __( "Accepts: 'hidden', 'visible', 'search' and 'catalog'", 'jet-form-builder' );
	}
}
