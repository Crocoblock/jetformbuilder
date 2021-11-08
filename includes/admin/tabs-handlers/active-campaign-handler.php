<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Active_Campaign_Handler extends Base_Handler {

	public function slug() {
		return 'active-campaign-tab';
	}

	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$key = sanitize_text_field( wp_unslash( $_POST['api_key'] ?? '' ) );
		$url = sanitize_text_field( wp_unslash( $_POST['api_url'] ?? '' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options(
			array(
				'api_key' => $key,
				'api_url' => $url,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'api_key' => '',
				'api_url' => '',
			)
		);
	}
}
