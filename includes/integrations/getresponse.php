<?php
/**
 * GetResponse Handler
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Forms_GetResponse_Handler' ) ) {

	/**
	 * Define Jet_Engine_Forms_GetResponse_Handler class
	 */
	class Jet_Engine_Forms_GetResponse_Handler {

		private $api_base_url = 'https://api.getresponse.com/v3/';
		private $api_key = '';
		private $api_request_args = array();

		/**
		 * Constructor for the class
		 *
		 * @param $api_key
		 */
		public function __construct( $api_key ) {

			if ( empty( $api_key ) ) {
				return new WP_Error( 'invalid_api_key' );
			}

			$this->api_key = $api_key;
			$this->api_request_args = array(
				'headers' => array(
					'X-Auth-Token' => 'api-key ' . $api_key,
					'Content-Type' => 'application/json',
				),
			);

		}

		public function request( $end_point, $request_args = array() ) {
			$args     = array_merge_recursive( $this->api_request_args, $request_args );
			$response = wp_remote_request( $this->api_base_url . $end_point, $args );

			if ( ! $response || is_wp_error( $response ) ) {
				return false;
			}

			$data = wp_remote_retrieve_body( $response );

			if ( ! $data ) {
				return array();
			}

			$data = json_decode( $data, true );

			return $data;
		}

		public function get_all_data() {
			return array(
				'lists'  => $this->get_lists(),
				'fields' => $this->get_fields(),
			);
		}

		public function get_lists() {
			$result = array();
			$lists  = $this->request( 'campaigns' );

			if ( ! empty( $lists ) ) {
				foreach ( $lists as $list ) {
					if ( ! is_array( $list ) ) {
						continue;
					}

					$result[ $list['campaignId'] ] = $list['name'];
				}
			}

			return $result;
		}

		public function get_fields() {
			$result = array(
				'email' => array(
					'label'    => esc_html__( 'Email', 'jet-engine' ),
					'required' => true,
				),
				'name' => array(
					'label'    => esc_html__( 'Name', 'jet-engine' ),
					'required' => false,
				),
			);

			$custom_fields = $this->request( 'custom-fields' );

			if ( ! empty( $custom_fields ) ) {
				foreach ( $custom_fields as $field ) {
					$result[ $field['customFieldId'] ] = array(
						'label'    => $field['name'],
						'required' => false,
					);
				}
			}

			return $result;
		}
	}

}
