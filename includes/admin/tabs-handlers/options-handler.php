<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Options_Handler extends Base_Handler {

	public function slug() {
		return 'options-tab';
	}

	public function on_get_request() {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$enable = 'true' === sanitize_key( $_POST['enable_dev_mode'] ?? '' );

		$result = $this->update_options(
			array(
				'enable_dev_mode' => $enable,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'enable_dev_mode' => false,
			)
		);
	}
}
