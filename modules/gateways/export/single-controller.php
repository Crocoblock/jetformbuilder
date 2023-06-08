<?php


namespace JFB_Modules\Gateways\Export;

use JFB_Components\Export\Export_Tools;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Single_Controller extends Base_Export_Controller {

	protected $payment_id;
	protected $payment;
	protected $payer;

	/**
	 * @throws \Exception
	 */
	protected function do_export() {
		if ( ! $this->get_wp_nonce()->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}

		$exporter = Export_Tools::get_exporter_by_format();
	}

	/**
	 * @return int
	 * @throws \Exception
	 */
	protected function get_payment_id(): int {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$payment_id = absint( $_GET['id'] ?? '' );

		if ( ! $payment_id ) {
			throw new \Exception(
				__( 'Payment ID is empty', 'jet-form-builder' )
			);
		}

		return $payment_id;
	}
}
