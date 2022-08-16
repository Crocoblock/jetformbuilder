<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Title_Property;

class Product_Name_Property extends Post_Title_Property {


	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		$product->set_name( $value );
	}

	public function do_if_required( Abstract_Modifier $modifier ) {
		$action = $modifier->get_supported_action();

		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		// Check is it Insert action (not Update)
		if ( ! is_a( $action, Save_Action::class ) ||
		     0 < $product->get_id() ||
		     $product->get_name()
		) {
			return;
		}

		$this->value    = '(empty)';
		$this->is_empty = true;
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}