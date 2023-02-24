<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Captcha_Handler extends Base_Handler {

	const OPTIONS = array(
		'secret'    => '',
		'key'       => '',
		'threshold' => 0.5,
	);

	public function slug() {
		return 'captcha-tab';
	}

	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$secret    = sanitize_text_field( wp_unslash( $_POST['secret'] ?? '' ) );
		$key       = sanitize_text_field( wp_unslash( $_POST['key'] ?? '' ) );
		$threshold = filter_var( wp_unslash( $_POST['threshold'] ?? '' ), FILTER_VALIDATE_FLOAT );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$threshold = false === $threshold ? self::OPTIONS['threshold'] : $threshold;

		$result = $this->update_options(
			array(
				'secret'    => $secret,
				'key'       => $key,
				'threshold' => $threshold
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options( self::OPTIONS );
	}
}
