<?php

namespace Jet_Form_Builder\License;

use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	/**
	 * [$api_url description]
	 * @var string
	 */
	public $api_url = 'https://account.jetformbuilder.com';

	/**
	 * [$license_data_key description]
	 * @var string
	 */
	public $license_data_key = 'jfb-license-data';

	/**
	 * [$settings description]
	 * @var null
	 */
	public $license_data = null;

	/**
	 * [$user_plugins description]
	 * @var boolean
	 */
	public $user_installed_plugins = false;

	/**
	 * [$update_plugins description]
	 * @var boolean
	 */
	public $update_plugins = false;

	/**
	 * Proccesing subscribe form ajax
	 *
	 * @return void
	 */
	public function license_action() {

		$data = ( ! empty( $_POST['data'] ) ) ? $_POST['data'] : false;

		if ( ! $data ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$license_action = $data['action'];
		$license_key    = $data['license'];

		if ( empty( $license_key ) ) {
			$license_key = $this->get_license_key();
		}

		$responce_data = $this->license_action_query( $license_action, $license_key );

		if ( ! $responce_data['success'] ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		set_site_transient( 'update_plugins', null );

		switch ( $license_action ) {
			case 'activate_license':
				$this->add_license_data( $license_key, $responce_data );

				$responce_data['license_key'] = $license_key;

				wp_send_json( [
					'success' => true,
					'message' => __( 'The license has been successfully activated', 'jet-form-builder' ),
					'data'    => $responce_data,
				] );

				break;

			case 'deactivate_license':
				$license_list = $this->get_license_data();

				$license_list = array_filter( $license_list, function ( $license_data ) use ( $license_key ) {
					return $license_data['license_key'] !== $license_key;
				} );

				update_option( $this->license_data_key, $license_list );

				wp_send_json( [
					'success' => true,
					'message' => __( 'The license has been successfully deactivated', 'jet-form-builder' ),
					'data'    => $responce_data,
				] );

				break;
		}

		wp_send_json( [
			'success'  => false,
			'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
			'data'    => [],
		] );
	}

	/**
	 * Remote request to updater API.
	 *
	 * @since  1.0.0
	 * @return array|bool
	 */
	public function license_action_query( $action = '', $license = '' ) {

		$query_url = add_query_arg(
			array(
				'edd_action' => $action,
				'item_id'    => 9,
				'license'    => $license,
				'url'        => urlencode( $this->get_site_url() ),
			),
			$this->api_url
		);

		$response = wp_remote_get( $query_url, array(
			'timeout' => 60,
		) );

		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) != '200' ) {
			return false;
		}

		return json_decode( $response['body'], true );
	}

	/**
	 * [get description]
	 * @param  [type]  $setting [description]
	 * @param  boolean $default [description]
	 * @return [type]           [description]
	 */
	public function get_license_data() {

		if ( null === $this->license_data ) {
			$this->license_data = get_option( $this->license_data_key, [] );
		}

		return $this->license_data;
	}

	/**
	 * [set_license_data description]
	 * @param [type]  $setting [description]
	 * @param boolean $value   [description]
	 */
	public function add_license_data( $license_key = false, $license_data = [] ) {

		if ( ! $license_key ) {
			return false;
		}

		$current_license_data = get_option( $this->license_data_key, [] );

		$license_data['license_key'] = $license_key;

		$current_license_data[] = $license_data;

		update_option( $this->license_data_key, $current_license_data );
	}

	/**
	 * [get_site_url description]
	 * @return [type] [description]
	 */
	public function get_site_url() {
		$urlParts = parse_url( site_url( '/' ) );
		$site_url = $urlParts['host'] . $urlParts['path'];
		$site_url = preg_replace( '#^https?://#', '', rtrim( $site_url ) );
		$site_url = str_replace( 'www.', '', $site_url );

		return $site_url;
	}

	/**
	 * [get_plugin_license_key description]
	 * @param  boolean $setting [description]
	 * @param  boolean $value   [description]
	 * @return [type]           [description]
	 */
	public function get_license_key() {

		$license_list = $this->get_license_data();

		if ( ! empty( $license_list ) ) {

			foreach ( $license_list as $key => $license_data ) {

				if ( 'expired' === $license_data['license'] ) {
					continue;
				}

				$is_expired = $this->license_expired_check( $license_data['expires'] );

				if ( $is_expired ) {
					$license_list[ $key ]['license'] = 'expired';

					continue;
				}

				if (  'valid' === $license_data['license'] ) {
					return $license_data['license_key'];
				}
			}
		}

		return false;
	}

	/**
	 * [if_license_expire_check description]
	 * @param  boolean $expire_date [description]
	 * @return [type]               [description]
	 */
	public function license_expired_check( $expire_date = false, $day_to_expire = 0 ) {

		if ( '0000-00-00 00:00:00' === $expire_date
		     || '1000-01-01 00:00:00' === $expire_date
		     || 'lifetime' === $expire_date
		) {
			return false;
		}

		$current_time = time();

		$current_time = strtotime( sprintf( '+%s day', $day_to_expire ), $current_time );

		$expire_time = strtotime( $expire_date );

		if ( $current_time > $expire_time ) {
			return true;
		}

		return false;
	}

	/**
	 * @return array
	 */
	public function get_plugin_data_list() {

		$jet_plugin_list    = $this->get_jfb_remote_plugin_list();
		$user_plugin_list   = $this->get_user_plugins();

		$plugins_list = [];

		if ( ! empty( $jet_plugin_list ) ) {
			foreach ( $jet_plugin_list as $key => $plugin_data ) {

				$plugin_slug = $plugin_data['slug'];

				if ( array_key_exists( $plugin_slug, $user_plugin_list ) ) {
					$plugin_data = wp_parse_args( $plugin_data, $user_plugin_list[ $plugin_slug ] );
				} else {
					$plugin_data = wp_parse_args( $plugin_data, array(
						'version'         => $plugin_data['version'],
						'currentVersion'  => $plugin_data['version'],
						'updateAvaliable' => false,
						'isActivated'     => false,
						'isInstalled'     => false,
					) );
				}

				$plugins_list[ $plugin_data['slug'] ] = $plugin_data;
			}
		}

		return $plugins_list;
	}

	/**
	 * Remote request to updater API.
	 *
	 * @since  1.0.0
	 * @return array|bool
	 */
	public function get_jfb_remote_plugin_list() {

		$remote_jfb_addons_info = get_site_transient( 'jfb_remote_addons_list' );

		if ( $remote_jfb_addons_info ) {
			return $remote_jfb_addons_info;
		}

		$response = wp_remote_get( $this->api_url . '/wp-json/croco/v1/plugins/', array(
			'timeout' => 30,
		) );

		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) != '200' ) {
			return false;
		}

		$response = json_decode( $response['body'], true );

		if ( ! $response['success'] ) {
			return false;
		}

		if ( ! isset( $response['plugins'] ) ) {
			return false;
		}

		$jfb_remote_addons_list = $response['plugins'];

		set_site_transient( 'jfb_remote_addons_list', $jfb_remote_addons_list, HOUR_IN_SECONDS * 24 );

		return $jfb_remote_addons_list;
	}

	/**
	 * [get_plugin_data description]
	 * @return [type] [description]
	 */
	public function get_user_plugins() {

		if ( ! $this->user_installed_plugins ) {

			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			$this->user_installed_plugins = get_plugins();
		}

		$plugin_list = array();

		if ( $this->user_installed_plugins ) {

			foreach ( $this->user_installed_plugins as $plugin_file => $plugin_data ) {

				$current_version = $plugin_data['Version'];
				$latest_version = $this->get_latest_version( $plugin_file );

				$plugin_list[ $plugin_file ] = array(
					'version'         => $latest_version,
					'currentVersion'  => $current_version,
					'updateAvaliable' => version_compare( $latest_version, $current_version, '>' ),
					'isActivated'     => is_plugin_active( $plugin_file ),
					'isInstalled'     => true,
				);

			}
		}

		return $plugin_list;
	}

	/**
	 * Get latest version for passed plugin
	 *
	 * @param  [type] $remote_plugin_data [description]
	 * @return [type]                     [description]
	 */
	public function get_latest_version( $plugin_file ) {

		if ( ! $this->update_plugins ) {
			$this->update_plugins = get_site_transient( 'update_plugins' );
		}

		$no_update = isset( $this->update_plugins->no_update ) ? $this->update_plugins->no_update : false;
		$to_update = isset( $this->update_plugins->response ) ? $this->update_plugins->response : false;

		if ( $to_update && ! empty( $to_update ) && array_key_exists( $plugin_file, $to_update ) ) {
			$version = $to_update[ $plugin_file ]->new_version;
		} elseif ( ! empty( $no_update ) && array_key_exists( $plugin_file, $no_update ) ) {
			$version = $no_update[ $plugin_file ]->new_version;
		} elseif ( array_key_exists( $plugin_file, $this->user_installed_plugins ) ) {
			$version = $this->user_installed_plugins[ $plugin_file ]['Version'];
		} else {
			$version = '1.0.0';
		}

		return $version;
	}

	/**
	 * Manager constructor.
	 */
	public function __construct() {
		add_action( 'wp_ajax_jfb_license_action', array( $this, 'license_action' ) );
	}
}
