<?php


namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Fake_Wc_Add_To_Cart extends Base {

	public function get_id() {
		return 'redirect_to_woo_checkout';
	}

	public function get_name() {
		return __( 'Add to Cart & Redirect to Checkout', 'jet-form-builder-woo-action' );
	}

	public function is_disabled(): bool {
		return true;
	}

	public function dependence() {
		return ! jet_form_builder()->addons_manager->is_active();
	}

	/**
	 * @param $request array - Form data
	 * @param $handler Action_Handler
	 *
	 * @return mixed
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		throw new Action_Exception( 'failed' );
	}

}
