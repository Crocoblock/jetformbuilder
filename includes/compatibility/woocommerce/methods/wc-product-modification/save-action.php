<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Action;
use Jet_Form_Builder\Actions\Types\Insert_Post;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

	public function add_context_once() {
		if ( ! jet_fb_action_handler()->in_loop() ) {
			return;
		}
		/** @var Product_Id_Property $id */
		$id      = $this->modifier->get( 'ID' );
		$product = $id->get_product();

		/**
		 * For Redirect to Page action
		 */
		jet_fb_action_handler()->add_context_once(
			'insert_post',
			array(
				Insert_Post::get_context_post_key( $this->inserted_id ) => array(
					'__action'    => $this->get_id(),
					'ID'          => $this->inserted_id,
					'post_status' => $product->get_status(),
				),
			)
		);
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return true;
	}
}
