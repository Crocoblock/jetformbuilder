<?php // phpcs:ignore Internal.Exception

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
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

	/**
	 * @var MailChimp_Handler
	 */
	private $api_handler;
	private $body_args = array();
	private $tags      = false;

	public $option_name = 'mailchimp-tab';

	public function get_name() {
		return __( 'MailChimp', 'jet-form-builder' );
	}

	public function get_id() {
		return 'mailchimp';
	}

	public function api_handler( $api_key ) {
		return new MailChimp_Handler( $api_key );
	}

	/**
	 * @throws Action_Exception
	 */
	private function get_api_handler(): MailChimp_Handler {
		if ( $this->api_handler ) {
			return $this->api_handler;
		}

		$api = $this->global_settings(
			array(
				'api_key' => '',
			)
		);

		if ( empty( $api['api_key'] ) || empty( $this->settings['list_id'] ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$this->api_handler = $this->api_handler( $api['api_key'] );

		if ( is_wp_error( $this->api_handler ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		return $this->api_handler;
	}

	public function action_attributes() {
		return array(
			'api_key'       => array(
				'default' => '',
				'path'    => 'mailchimp/api_key',
			),
			'data'          => array(
				'default' => '',
				'path'    => 'mailchimp/data',
			),
			'double_opt_in' => array(
				'default' => '',
				'path'    => 'mailchimp/double_opt_in',
			),
			'fields_map'    => array(
				'default' => '',
				'path'    => 'mailchimp/fields_map',
			),
			'groups_ids'    => array(
				'default' => '',
				'path'    => 'mailchimp/groups_ids',
			),
			'isValidAPI'    => array(
				'default' => '',
				'path'    => 'mailchimp/isValidAPI',
			),
			'list_id'       => array(
				'default' => '',
				'path'    => 'mailchimp/list_id',
			),
			'tags'          => array(
				'default' => '',
				'path'    => 'mailchimp/tags',
			),
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	// phpcs:ignore Squiz.Commenting.FunctionCommentThrowTag.WrongNumber
	public function do_action( array $request, Action_Handler $handler ) {
		$this->request = $request;

		$this->set_body_args();

		$subscriber = $this->get_api_handler()->request(
			$this->get_endpoint( 'lists/%s/members/%s' ),
			$this->get_request_args( 'PUT' )
		);

		$this->throw_if_has_error( $subscriber );

		if ( empty( $this->get_tags() ) ) {
			return;
		}

		$endpoint        = $this->get_endpoint( 'lists/%s/members/%s/tags' );
		$this->body_args = array( 'tags' => $this->prepare_tags( $subscriber ) );

		try {
			$this->get_api_handler()->request_with_code(
				$endpoint,
				$this->get_request_args( 'POST' )
			);
		} catch ( Silence_Exception $exception ) {
			if ( ! $exception->getMessage() ) {
				throw new Action_Exception( 'internal_error' );
			}
			throw ( new Action_Exception( $exception->getMessage() ) )->dynamic_error();
		}
	}

	/**
	 * @param $response
	 *
	 * @throws Action_Exception
	 */
	private function throw_if_has_error( $response ) {
		if ( false === $response ) {
			throw new Action_Exception( 'internal_error' );
		}

		$status = $response['status'] ?? '';

		if ( ! in_array( $status, $this->get_api_handler()->success_statuses, true ) ) {

			if ( isset( $response['detail'] ) ) {
				throw new Action_Exception( "derror|{$response['detail']}", $response );
			}

			throw new Action_Exception( 'internal_error', $response );
		}

		// Error response
		if ( empty( $response['id'] ) ) {
			throw new Action_Exception( 'failed', $response );
		}
	}

	private function set_body_args() {
		$fields_map      = $this->settings['fields_map'] ?? array();
		$this->body_args = $this->get_body_args( $fields_map );

		if ( ! empty( $this->settings['groups_ids'] ) && is_array( $this->settings['groups_ids'] ) ) {
			$this->body_args['interests'] = $this->settings['groups_ids'];
		}
	}

	/**
	 * @return mixed
	 * @throws Action_Exception
	 */
	private function get_email_address() {
		if ( ! empty( $this->body_args['email_address'] ) ) {
			return $this->body_args['email_address'];
		}

		throw new Action_Exception( 'empty_field', $this->body_args );
	}

	/**
	 * @return string
	 * @throws Action_Exception
	 */
	private function get_endpoint( $format ) {
		$email = $this->get_email_address();

		return sprintf( $format, $this->settings['list_id'], md5( strtolower( $email ) ) );
	}


	private function get_request_args( $method ): array {
		return array(
			'method'  => $method,
			'body'    => wp_json_encode( $this->body_args ),
			'headers' => array(
				'Content-Type' => 'application/json; charset=utf-8',
			),
		);
	}

	private function get_tags() {
		if ( false !== $this->tags ) {
			return $this->tags;
		}

		if ( empty( $this->settings['tags'] ) ) {
			$this->tags = array();

			return $this->tags;
		}

		$this->tags = array_map( 'trim', explode( ',', $this->settings['tags'] ) );

		return $this->tags;
	}

	private function get_tags_difference( $subscriber ): array {
		$subscriber_tags = wp_list_pluck( $subscriber['tags'] ?? array(), 'name' );

		$tags_inactive = array_diff( $subscriber_tags, $this->get_tags() );
		$tags_active   = array_diff( $this->get_tags(), $subscriber_tags );

		return array( $tags_inactive, $tags_active );
	}

	private function prepare_tags( $subscriber ) {
		list ( $tags_inactive, $tags_active ) = $this->get_tags_difference( $subscriber );

		return array_merge(
			$this->get_tags_with_status( $tags_inactive, 'active' ),
			$this->get_tags_with_status( $tags_active, 'active' )
		);
	}

	private function get_tags_with_status( $tags, $status ): array {
		$status = in_array( $status, array( 'active', 'inactive' ), true ) ? $status : false;

		if ( false === $status ) {
			return array();
		}

		return array_map(
			function ( $tag ) use ( $status ) {
				return array(
					'status' => $status,
					'name'   => $tag,
				);
			},
			$tags
		);
	}

	private function get_body_args( $fields_map ) {
		$status_if_new = isset( $this->settings['double_opt_in'] ) && filter_var(
			$this->settings['double_opt_in'],
			defined( 'FILTER_VALIDATE_BOOL' ) ? FILTER_VALIDATE_BOOL : FILTER_VALIDATE_BOOLEAN
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
					$date_value = $this->request[ $field ];

					if ( ! Tools::is_valid_timestamp( $date_value ) ) {
						$date_value = strtotime( $date_value );
					}

					// phpcs:ignore WordPress.DateTime.RestrictedFunctions
					$body_args['merge_fields'][ $param ] = date( 'm/d', $date_value );
					break;
				default:
					$body_args['merge_fields'][ $param ] = $this->request[ $field ];
					break;
			}
		}

		return $body_args;
	}

	public function self_script_name() {
		return 'jetFormMailchimpData';
	}

	public function editor_labels() {
		return array(
			'api_key'          => __( 'API Key:', 'jet-form-builder' ),
			'validate_api_key' => __( 'Validate API Key', 'jet-form-builder' ),
			'retry_request'    => __( 'Retry request', 'jet-form-builder' ),
			'list_id'          => __( 'Audience:', 'jet-form-builder' ),
			'update_list_ids'  => __( 'Update Audience List', 'jet-form-builder' ),
			'groups_ids'       => __( 'Groups:', 'jet-form-builder' ),
			'tags'             => __( 'Tags:', 'jet-form-builder' ),
			'double_opt_in'    => __( 'Double Opt-In:', 'jet-form-builder' ),
			'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
			'use_global'       => __( 'Use Global Settings', 'jet-form-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'api_key_link_prefix' => __( 'How to obtain your MailChimp API Key? More info', 'jet-form-builder' ),
			'api_key_link_suffix' => __( 'here', 'jet-form-builder' ),
			'api_key_link'        => 'https://mailchimp.com/help/about-api-keys/',
			'tags'                => __( 'Add as many tags as you want, comma separated.', 'jet-form-builder' ),
		);
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return array(
			'action' => $this->action,
		);
	}


}
