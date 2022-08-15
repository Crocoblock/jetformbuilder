<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Action;
use Jet_Form_Builder\Exceptions\Action_Exception;

class Trash_Action extends Base_Post_Action {

	public function get_id(): string {
		return 'trash';
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}
		/** @var Product_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		if ( ! $id->get_product()->delete() ) {
			throw new Action_Exception( 'failed' );
		}
	}

	public function do_after() {
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		/** @var Product_Id_Property $id */
		$id      = $modifier->get( 'ID' );
		$product = $id->get_product();

		return 'trash' === $product->get_status() && 0 < $product->get_id();
	}
}