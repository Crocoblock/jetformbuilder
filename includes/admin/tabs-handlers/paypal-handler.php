<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Paypal_Handler extends Base_Handler {

	public function slug() {
		return 'paypal';
	}

	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$secret    = sanitize_text_field( wp_unslash( $_POST['secret'] ?? '' ) );
		$client_id = sanitize_text_field( wp_unslash( $_POST['client_id'] ?? '' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options(
			array(
				'secret'    => $secret,
				'client_id' => $client_id,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'secret'    => '',
				'client_id' => '',
			)
		);
	}
}
