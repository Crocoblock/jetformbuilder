<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Title_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Product_Name_Property extends Post_Title_Property {

	/**
	 * @param Abstract_Modifier $modifier
	 */
	public function get_value( Abstract_Modifier $modifier ) {
		$action = $modifier->get_action();

		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		// Check is it Insert action (not Update)
		if ( ! is_a( $action, Save_Action::class ) ||
			0 < $product->get_id() ||
			$this->value
		) {
			if ( is_null( $this->value ) ) {
				return;
			}

			$product->set_name( $this->value );

			return;
		}

		$product->set_name( '(empty)' );
		$this->is_empty = true;
	}

}
