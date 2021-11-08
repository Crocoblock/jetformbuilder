<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Mailchimp_Handler extends Base_Handler {

	public function slug() {
		return 'mailchimp-tab';
	}

	public function on_get_request() {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$api_key = sanitize_text_field( wp_unslash( $_POST['api_key'] ?? '' ) );

		$result = $this->update_options(
			array(
				'api_key' => $api_key,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'api_key' => '',
			)
		);
	}
}
