<?php


namespace JFB_Modules\Gateways\Export;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Multiple_Controller extends Base_Export_Controller {

	/**
	 * @throws \Exception
	 */
	protected function do_export() {
		if ( ! $this->get_wp_nonce()->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}
	}
}
