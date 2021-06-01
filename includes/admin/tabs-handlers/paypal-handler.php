<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;


class Paypal_Handler extends Base_Handler {

	public function slug(): string {
		return 'paypal';
	}

	public function on_get_request() {
		$secret    = sanitize_text_field( $_POST['secret'] );
		$client_id = sanitize_text_field( $_POST['client_id'] );

		$result = $this->update_options( array(
			'secret'    => $secret,
			'client_id' => $client_id,
		) );

		$result ? wp_send_json_success( array(
			'message' => __( 'Saved successfully!', 'jet-fom-builder' )
		) ) : wp_send_json_error( array(
			'message' => __( 'Unsuccessful save.', 'jet-form-builder' )
		) );
	}

	public function on_load(): array {
		return $this->get_options( array(
			'secret' => '',
			'client_id' => ''
		) );
	}
}