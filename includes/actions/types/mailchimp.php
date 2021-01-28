<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Integrations\Integration_Base;
use Jet_Form_Builder\Integrations\MailChimp_Handler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Mailchimp extends Integration_Base_Action {

	protected $action = 'jet_form_builder_get_mailchimp_data';
	private $request;

	public function get_name() {
		return __( 'MailChimp', 'jet-form-builder' );
	}

	public function get_id() {
		return 'mailchimp';
	}

	public function api_handler( $api_key ) {
		return new MailChimp_Handler( $api_key );
	}

	public function action_attributes() {
		return array(
			'api_key' => array(
				'default' => '',
				'path'    => 'mailchimp/api_key'
			),
			'data' => array(
				'default' => '',
				'path'    => 'mailchimp/data'
			),
			'double_opt_in' => array(
				'default' => '',
				'path'    => 'mailchimp/double_opt_in'
			),
			'fields_map' => array(
				'default' => '',
				'path'    => 'mailchimp/fields_map'
			),
			'groups_ids' => array(
				'default' => '',
				'path'    => 'mailchimp/groups_ids'
			),
			'isValidAPI' => array(
				'default' => '',
				'path'    => 'mailchimp/isValidAPI'
			),
			'list_id' => array(
				'default' => '',
				'path'    => 'mailchimp/list_id'
			),
			'tags' => array(
				'default' => '',
				'path'    => 'mailchimp/tags'
			),
		);
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
		$this->request = $request;

		if ( empty( $this->settings['api_key'] ) || empty( $this->settings['list_id'] ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$handler = $this->api_handler( $this->settings['api_key'] );

		if ( is_wp_error( $handler ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$fields_map = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();

		$body_args = $this->get_body_args( $fields_map );

		if ( empty( $body_args['email_address'] ) ) {
			throw new Action_Exception( 'empty_field', array(
				'email_address' => $body_args['email_address']
			) );
		}

		if ( ! empty( $this->settings['groups_ids'] ) && is_array( $this->settings['groups_ids'] ) ) {
			foreach ( $this->settings['groups_ids'] as $groups_id ) {
				$body_args['interests'][ $groups_id ] = true;
			}
		}

		if ( ! empty( $this->settings['tags'] ) ) {
			$body_args['tags'] = explode( ',', trim( $this->settings['tags'] ) );
		}

		$end_point = sprintf( 'lists/%1$s/members/%2$s', $this->settings['list_id'], md5( strtolower( $body_args['email_address'] ) ) );

		$request_args = array(
			'method'  => 'PUT',
			'body'    => json_encode( $body_args ),
			'headers' => array(
				'Content-Type' => 'application/json; charset=utf-8',
			),
		);

		$response = $handler->request( $end_point, $request_args );

		if ( false === $response ) {
			throw new Action_Exception( 'internal_error' );
		}

		if ( isset( $response['status'] ) && ! in_array( $response['status'], $handler->success_statuses ) ) {

			if ( isset( $response['title'] ) ) {
				throw new Action_Exception( "derror|{$response['title']}" );
			}

			throw new Action_Exception( 'internal_error' );
		}

		// Error response
		if ( empty( $response['id'] ) ) {
			throw new Action_Exception( 'failed', $response );
		}
	}

	private function get_body_args( $fields_map ) {

		$status_if_new = isset( $this->settings['double_opt_in'] ) && filter_var(
			$this->settings['double_opt_in'],
			FILTER_VALIDATE_BOOLEAN
		) ? 'pending' : 'subscribed';

		$body_args = array(
			'status'        => 'subscribed',
			'status_if_new' => $status_if_new,
		);

		foreach ( $fields_map as $param => $field ) {

			if ( empty( $field ) || empty( $this->request[ $field ] ) ) {
				continue;
			}
			switch ( $param ) {
				case 'email':
					$body_args['email_address'] = $this->request[ $field ];
					break;
				case 'BIRTHDAY':
					$body_args['merge_fields'][ $param ] = mysql2date( 'm/d', $this->request[ $field ] );
					break;
				default:
					$body_args['merge_fields'][ $param ] = $this->request[ $field ];
			}
		}

		return $body_args;
	}

	/**
	 * Get MailChimp data
	 */
	public function get_mailchimp_data() {

		if ( empty( $_REQUEST['api_key'] ) ) {
			wp_send_json_error();
		}

		$handler = new MailChimp_Handler( $_REQUEST['api_key'] );

		if ( is_wp_error( $handler ) ) {
			wp_send_json_error();
		}

		$data = $handler->get_all_data();

		if ( empty( $data['lists'] ) ) {
			wp_send_json_error();
		}

		wp_send_json_success( $data );
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return array(
			'name'   => 'jetFormMailchimpData',
			'object' => array(
				'action' => $this->action,
				'labels' => array(
					'api_key'          => __( 'API Key:', 'jet-form-builder' ),
					'validate_api_key' => __( 'Validate API Key', 'jet-form-builder' ),
					'list_id'          => __( 'Audience:', 'jet-form-builder' ),
					'update_list_ids'  => __( 'Update Audience List', 'jet-form-builder' ),
					'groups_ids'       => __( 'Groups:', 'jet-form-builder' ),
					'tags'             => __( 'Tags:', 'jet-form-builder' ),
					'double_opt_in'    => __( 'Double Opt-In:', 'jet-form-builder' ),
					'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
				),
				'help'   => array(
					'api_key_link_prefix' => __( 'How to obtain your MailChimp API Key? More info', 'jet-form-builder' ),
					'api_key_link_suffix' => __( 'here', 'jet-form-builder' ),
					'api_key_link'        => 'https://mailchimp.com/help/about-api-keys/',
				),
			)
		);
	}


}


