<?php
namespace JFB_Modules\Promo_Banner;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Storage {

	protected $storage_key = null;
	protected $api_url     = 'https://account.jetformbuilder.com/wp-json/jfb/v1/promo';

	public function __construct( $storage_key ) {
		$this->storage_key = $storage_key;
	}

	/**
	 * Get hash for banner HTML
	 *
	 * @param  string $banner_html banner content
	 * @return string
	 */
	public function get_banner_hash( $banner_html ) {
		return md5( $banner_html );
	}

	/**
	 * Check if given banner was dismissed before by it's hash
	 *
	 * @param  string  $banner_hash Hash string.
	 * @return boolean
	 */
	public function is_banner_dismissed( $banner_hash ) {

		// banners visible only for loggen in users
		if ( ! is_user_logged_in() ) {
			return true;
		}

		$dismissed_banners = get_user_meta( get_current_user_id(), $this->get_storage_key(), false );

		if ( ! empty( $dismissed_banners ) && in_array( $banner_hash, $dismissed_banners ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Add banner to the list of dismissed banners for current user
	 *
	 * @param  [type] $banner_hash [description]
	 * @return [type]              [description]
	 */
	public function dismiss_banner( $banner_hash ) {
		add_user_meta( get_current_user_id(), $this->get_storage_key(), $banner_hash );
	}

	/**
	 * Transient cache key
	 *
	 * @return [type] [description]
	 */
	public function get_storage_key() {
		return $this->storage_key;
	}

	/**
	 * Returns promo discount value with '%' sign in the end
	 * @return [type] [description]
	 */
	public function get_promo_value() {

		$promo_data = $this->get_promo_data();
		return isset( $promo_data['promo'] ) ? $promo_data['promo'] : false;
	}

	/**
	 * Get banner HTML from transient cache or remotely.
	 *
	 * @return string|int
	 */
	public function get_banner_html() {

		$promo_data = $this->get_promo_data();
		return isset( $promo_data['banner'] ) ? $promo_data['banner'] : false;
	}

	/**
	 * Get all data for current promos
	 *
	 * @return array
	 */
	public function get_promo_data() {

		$data = get_transient( $this->get_storage_key() );

		if ( false === $data ) {
			$data = $this->get_remote_data();
		}

		set_transient( $this->get_storage_key(), $data, 6 * HOUR_IN_SECONDS );

		return ! empty( $data ) && is_array( $data ) ? $data : [];

	}

	/**
	 * Get remote content of the banner from API
	 * If there is no active promo right now - will be returned -1
	 *
	 * @return string|int
	 */
	public function get_remote_data() {

		$response = wp_remote_get( $this->api_url );
		$body     = wp_remote_retrieve_body( $response );

		if ( $body && ! is_wp_error( $body ) ) {
			$body = json_decode( $body, true );
		} else {
			$body = [];
		}

		return is_array( $body ) ? $body : [];

	}

}
