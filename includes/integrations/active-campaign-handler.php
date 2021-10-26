<?php


namespace Jet_Form_Builder\Integrations;

use Jet_Form_Builder\Exceptions\Action_Exception;

class Active_Campaign_Handler extends Integration_Base {
	/**
	 * Constructor for the class
	 *
	 * @param $settings
	 */
	public function __construct( $settings ) {

		if ( empty( $settings['api_key'] ) ) {
			return new \WP_Error( 'invalid_api_key' );
		}

		$this->api_key      = $settings['api_key'];
		$this->api_base_url = add_query_arg(
			array(
				'api_action' => 'contact_sync',
				'api_key'    => $this->api_key,
				'api_output' => 'json',
			),
			esc_url( rtrim( $settings['api_url'], '/' ) . '/admin/api.php' )
		);
	}

	public function request( $request_url, $request_args = array() ) {
		$response = wp_remote_post(
			$this->api_base_url,
			array(
				'body'    => $request_args,
				'timeout' => 30,
			)
		);

		if ( ! $response || is_wp_error( $response ) ) {
			throw new Action_Exception( 'internal_error', $response );
		}

		$data = wp_remote_retrieve_body( $response );

		if ( ! $data ) {
			throw new Action_Exception( 'internal_error', $data );
		}

		$data = json_decode( $data, true );

		// Error response
		if ( empty( $data['result_code'] ) ) {
			throw new Action_Exception( 'failed', $data );
		}

	}

	/**
	 * @return mixed
	 */
	public function get_all_data() {
		// TODO: Implement get_all_data() method.
	}
}
