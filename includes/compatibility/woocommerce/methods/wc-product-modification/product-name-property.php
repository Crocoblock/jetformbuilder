<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Title_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Name_Property extends Post_Title_Property {

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @return null
	 * @throws Silence_Exception
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
				throw new Silence_Exception();
			}

			return $this->value;
		}

		$this->value    = '(empty)';
		$this->is_empty = true;

		return $this->value;
	}

}