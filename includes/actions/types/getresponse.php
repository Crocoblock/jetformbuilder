<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Integrations\Getresponse_Handler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Getresponse extends Integration_Base_Action {

	protected $action = 'jet_form_builder_get_getresponse_data';

	public function get_name() {
		return __( 'Getresponse', 'jet-form-builder' );
	}

	public function get_id() {
		return 'getresponse';
	}

	public function api_handler( $api_key ) {
		return new Getresponse_Handler( $api_key );
	}

	/**
	 * Run a hook notification
	 *
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		if ( empty( $this->settings['api_key'] ) || empty( $this->settings['list_id'] ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$handler = $this->api_handler( $this->settings['api_key'] );

		if ( is_wp_error( $handler ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$body_args = array(
			'campaign' => array( 'campaignId' => $this->settings['list_id'] ),
		);

		if ( isset( $this->settings['day_of_cycle'] ) ) {
			$body_args['dayOfCycle'] = (int) $this->settings['day_of_cycle'];
		}

		$fields_map           = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();
		$custom_fields_values = array();

		foreach ( $fields_map as $param => $field ) {

			if ( empty( $field ) || empty( $request[ $field ] ) ) {
				continue;
			}

			if ( in_array( $param, array( 'email', 'name' ) ) ) {
				$body_args[ $param ] = $request[ $field ];
			} else {
				$custom_fields_values[] = array(
					'customFieldId' => $param,
					'value'         => array( $request[ $field ] ),
				);
			}
		}

		if ( ! empty( $custom_fields_values ) ) {
			$body_args['customFieldValues'] = $custom_fields_values;
		}

		if ( empty( $body_args['email'] ) ) {
			throw new Action_Exception( 'empty_field' );
		}

		$request_args = array(
			'method' => 'POST',
			'body'   => json_encode( $body_args ),
		);

		$response = $handler->request( 'contacts', $request_args );

		if ( false === $response ) {
			throw new Action_Exception( 'internal_error' );
		}

		// Error response
		if ( isset( $response['httpStatus'] ) && isset( $response['code'] ) ) {
			throw new Action_Exception( "dynamic|{$response['message']}" );
		}

	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetFormGetResponseData', array(
			'action' => $this->action,
			'labels' => array(
				'api_key'          => __( 'API Key:', 'jet-form-builder' ),
				'validate_api_key' => __( 'Validate API Key', 'jet-form-builder' ),
				'list_id'          => __( 'List Id:', 'jet-form-builder' ),
				'update_list_ids'  => __( 'Update List', 'jet-form-builder' ),
				'day_of_cycle'     => __( 'Day Of Cycle:', 'jet-form-builder' ),
				'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
			),
			'help'   => array(
				'api_key_link_prefix' => __( 'How to obtain your GetResponse API Key? More info', 'jet-form-builder' ),
				'api_key_link_suffix' => __( 'here', 'jet-form-builder' ),
				'api_key_link'        => 'https://app.getresponse.com/api',
			),
		) );
	}


}


