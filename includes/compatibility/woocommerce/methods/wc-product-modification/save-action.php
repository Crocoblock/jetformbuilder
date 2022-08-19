<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Action;

class Save_Action extends Base_Post_Action {

	public function get_id(): string {
		return 'insert';
	}

	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}
		/** @var Product_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		$this->inserted_id = $id->get_product()->save();
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return true;
	}
}