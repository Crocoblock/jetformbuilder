<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;


class Product_Gallery_Property extends Base_Product_Property {

	public function get_id(): string {
		return '_product_image_gallery';
	}

	public function get_label(): string {
		return __( 'Product Gallery', 'jet-form-builder' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$product = $this->get_product( $modifier );

		$product->set_gallery_image_ids( $value );
	}

	public function get_help(): string {
		return __( 'List of image ids', 'jet-form-builder' );
	}
}