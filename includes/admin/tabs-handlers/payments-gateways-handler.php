<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payments_Gateways_Handler extends Base_Handler {

	public function slug() {
		return 'payments-gateways';
	}

	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$use_gateways     = 'true' === sanitize_key( $_POST['use_gateways'] ?? '' );
		$enable_test_mode = 'true' === sanitize_key( $_POST['enable_test_mode'] ?? '' );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options(
			array(
				'use_gateways'     => $use_gateways,
				'enable_test_mode' => $enable_test_mode,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return array_merge(
			array(
				'use_gateways'     => false,
				'enable_test_mode' => false,
			),
			$this->get_global_options()
		);
	}
}
