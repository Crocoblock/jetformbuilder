<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Actions_V2\Mailchimp\Api\interfaces\Subscriber_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Api\traits\Subscriber_Trait;

class Put_Member_In_List_Action extends Base_Api_Action implements Subscriber_Interface {

	use Subscriber_Trait;

	protected $method = 'PUT';

	private $status_if_new = '';
	private $merge_fields  = array();
	private $interests     = array();

	public function action_endpoint() {
		return 'lists/{list_id}/members/{email_md5}';
	}


	public function action_headers() {
		return array(
			'Content-Type' => 'application/json; charset=utf-8',
		);
	}

	public function action_body() {
		$data = array(
			'status'        => 'subscribed',
			'email_address' => $this->get_email_address(),
			'status_if_new' => $this->get_status_if_new(),
			'merge_fields'  => $this->get_merge_fields(),
		);

		$interests = $this->get_interests();
		if ( ! empty( $interests ) ) {
			$data['interests'] = $interests;
		}

		return $data;
	}


	/**
	 * @param int|string $birthday
	 *
	 * @return void
	 */
	public function set_birthday( $birthday ) {
		if ( ! $birthday ) {
			return;
		}

		if ( ! Tools::is_valid_timestamp( $birthday ) ) {
			$birthday = strtotime( $birthday );
		}

		// phpcs:ignore WordPress.DateTime.RestrictedFunctions
		$this->set_merge_fields( 'BIRTHDAY', date( 'm/d', $birthday ) );
	}

	public function set_merge_fields( string $name, $value ) {
		$this->merge_fields[ $name ] = $value;
	}

	/**
	 * @return array
	 */
	public function get_merge_fields(): array {
		return $this->merge_fields;
	}

	public function set_opt_in( $opt_in ) {
		$is_opt_in = filter_var(
			$opt_in,
			defined( 'FILTER_VALIDATE_BOOL' ) ? FILTER_VALIDATE_BOOL : FILTER_VALIDATE_BOOLEAN
		);

		$this->set_status_if_new( $is_opt_in ? 'pending' : 'subscribed' );
	}

	public function set_status_if_new( string $status_if_new ) {
		$this->status_if_new = $status_if_new;
	}

	/**
	 * @return string
	 */
	public function get_status_if_new(): string {
		return $this->status_if_new;
	}

	/**
	 * @return array
	 */
	public function get_interests(): array {
		return $this->interests;
	}

	/**
	 * @param array $interests
	 */
	public function set_interests( array $interests ) {
		if ( ! wp_is_numeric_array( $interests ) ) {
			$this->interests = $interests;

			return;
		}

		foreach ( $interests as $interest ) {
			$this->interests[ $interest ] = true;
		}
	}


}
