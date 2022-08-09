<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Catalog_Visibility_Property extends Base_Post_Property {

	public function get_supported_post_types(): array {
		return array( 'product' );
	}

	public function get_label(): string {
		return __( 'Product Catalog Visibility', 'jet-form-builder' );
	}

	public function get_prop_name(): string {
		return 'catalog_visibility';
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = Wc_Product_Modifier::get_product();

		try {
			$product->set_catalog_visibility( $modifier->current_value );
		} catch ( \WC_Data_Exception $exception ) {
			throw new Silence_Exception( $exception->getMessage() );
		}
	}
}