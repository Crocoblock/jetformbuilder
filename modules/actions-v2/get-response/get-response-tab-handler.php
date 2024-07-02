<?php


namespace JFB_Modules\Actions_V2\Get_Response;

use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;

class Get_Response_Tab_Handler extends Base_Handler {

	public function slug() {
		return 'get-response-tab';
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
