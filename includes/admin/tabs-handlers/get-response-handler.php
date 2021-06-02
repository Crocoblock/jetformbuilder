<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;


class Get_Response_Handler extends Base_Handler {

	public function slug(): string {
		return 'get-response-tab';
	}

	public function on_get_request() {
		$api_key = sanitize_text_field( $_POST['api_key'] );

		$result = $this->update_options( array(
			'api_key' => $api_key,
		) );

		$result ? wp_send_json_success( array(
			'message' => __( 'Saved successfully!', 'jet-fom-builder' )
		) ) : wp_send_json_error( array(
			'message' => __( 'Unsuccessful save.', 'jet-form-builder' )
		) );
	}

	public function on_load(): array {
		return $this->get_options( array(
			'api_key' => '',
		) );
	}
}