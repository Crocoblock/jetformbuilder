<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Captcha_Handler extends Base_Handler {

	public function slug() {
		return 'captcha-tab';
	}

	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$secret = sanitize_text_field( wp_unslash( $_POST['secret'] ?? '' ) );
		$key    = sanitize_text_field( wp_unslash( $_POST['key'] ?? '' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options(
			array(
				'secret' => $secret,
				'key'    => $key,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'key'    => '',
				'secret' => '',
			)
		);
	}
}
