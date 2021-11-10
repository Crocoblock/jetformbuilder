<?php

namespace Jet_Form_Builder\Integrations;

/**
 * MailChimp Handler
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define MailChimp_Handler class
 */
class MailChimp_Handler extends Integration_Base {

	public $success_statuses = array( 'subscribed', 'pending' );

	/**
	 * Constructor for the class
	 *
	 * @param $api_key
	 */
	public function __construct( $api_key ) {
		parent::__construct( $api_key );

		$api_key_data = explode( '-', $api_key );

		if ( empty( $api_key_data[1] ) || 0 !== strpos( $api_key_data[1], 'us' ) ) {
			return new \WP_Error( 'invalid_api_key' );
		}

		$this->api_base_url     = sprintf( 'https://%s.api.mailchimp.com/3.0/', $api_key_data[1] );
		$this->api_request_args = array(
			'headers' => array(
				'Authorization' => 'Basic ' . base64_encode( 'user:' . $this->api_key ),
			),
		);

	}

	public function get_all_data() {
		$lists  = $this->get_lists();
		$groups = array();
		$fields = array();

		if ( ! $lists ) {
			return array();
		}

		foreach ( $lists as $list_id => $list_name ) {
			$groups[ $list_id ] = $this->get_groups( $list_id );
			$fields[ $list_id ] = $this->get_fields( $list_id );
		}

		return array(
			'lists'  => $lists,
			'groups' => $groups,
			'fields' => $fields,
		);
	}

	public function get_lists() {
		$result = array();
		$lists  = $this->request( 'lists?count=999' );

		if ( ! empty( $lists['lists'] ) ) {
			foreach ( $lists['lists'] as $list ) {
				$result[ $list['id'] ] = $list['name'];
			}
		}

		return $result;
	}

	public function get_groups( $list_id ) {
		$groups     = array();
		$categories = $this->request( 'lists/' . $list_id . '/interest-categories?count=999' );

		if ( ! empty( $categories['categories'] ) ) {
			foreach ( $categories['categories'] as $category ) {
				$interests = $this->request( 'lists/' . $list_id . '/interest-categories/' . $category['id'] . '/interests?count=999' );

				foreach ( $interests['interests'] as $interest ) {
					$groups[] = array(
						'value' => $interest['id'],
						'label' => $category['title'] . ' - ' . $interest['name'],
					);
				}
			}
		}

		return $groups;
	}

	public function get_fields( $list_id ) {
		$result = array(
			'email' => array(
				'label'    => esc_html__( 'Email', 'jet-form-builder' ),
				'required' => true,
			),
		);

		$merge_fields = $this->request( 'lists/' . $list_id . '/merge-fields?count=999' );

		if ( ! empty( $merge_fields['merge_fields'] ) ) {
			foreach ( $merge_fields['merge_fields'] as $field ) {
				$result[ $field['tag'] ] = array(
					'label'    => $field['name'],
					'required' => $field['required'],
				);
			}
		}

		return $result;
	}
}


