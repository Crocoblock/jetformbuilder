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
	 * @param false $plugin_slug
	 *
	 * @return false|string
	 */
	public function package_url( $plugin_slug = false ) {

		$license_key = $this->get_license_key();

		if ( ! $license_key ) {
			return false;
		}

		$plugin_slug = explode('/', $plugin_slug )[0];

		return add_query_arg(
			array(
				'ct_api_action' => 'get_plugin',
				'license'       => $license_key,
				'slug'          => $plugin_slug,
				'url'           => urlencode( $this->get_site_url() ),
			),
			$this->api_url
		);
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
	 * Plugin Action Handler
	 */
	public function plugin_action() {

		$data = ( ! empty( $_POST['data'] ) ) ? $_POST['data'] : false;

		if ( ! $data ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$action  = $data['action'];
		$plugin  = $data['plugin'];

		switch ( $action ) {

			case 'activate':
				$this->activate_plugin( $plugin );
				break;

			case 'deactivate':
				$this->deactivate_plugin( $plugin );
				break;

			case 'install':
				$this->install_plugin( $plugin );
				break;

			case 'update':
				//$this->update_plugin( $plugin );
				break;
		}

		wp_send_json( [
			'success' => true,
			'message' => __( 'Success', 'jet-form-builder' ),
			'data'    => [],
		] );
	}

	/**
	 * @param $plugin_file
	 *
	 * @return array
	 */
	public function get_plugin_data( $plugin_file ) {

		if ( ! $this->user_installed_plugins ) {

			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			$this->user_installed_plugins = get_plugins();
		}

		$plugin_data = $this->user_installed_plugins[ $plugin_file ];

		$current_version = $plugin_data['Version'];

		$latest_version = $this->get_latest_version( $plugin_file );

		return [
			'version'         => $latest_version,
			'currentVersion'  => $current_version,
			'updateAvaliable' => version_compare( $latest_version, $current_version, '>' ),
			'isActivated'     => is_plugin_active( $plugin_file ),
			'isInstalled'     => true,
		];
	}

	/**
	 * @param $plugin_file
	 */
	public function activate_plugin( $plugin_file ) {

		$status = [];

		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Sorry, you are not allowed to install plugins on this site.', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$activate = null;

		if ( ! is_plugin_active( $plugin_file ) ) {
			$activate = activate_plugin( $plugin_file );
		}

		if ( is_wp_error( $activate ) ) {
			wp_send_json( [
				'success'  => false,
				'message' => $activate->get_error_message(),
				'data'    => [],
			] );
		}

		wp_send_json( [
			'success'  => true,
			'message' => __( 'The addon has been activated', 'jet-form-builder' ),
			'data'    => $this->get_plugin_data( $plugin_file ),
		] );
	}

	/**
	 * @param $plugin_file
	 */
	public function deactivate_plugin( $plugin_file ) {

		$status = [];

		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json( [
				'success' => false,
				'message' => __( 'Sorry, you are not allowed to install plugins on this site.', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$deactivate_handler = null;

		if ( is_plugin_active( $plugin_file ) ) {
			$deactivate_handler = deactivate_plugins( $plugin_file );
		}

		if ( is_wp_error( $deactivate_handler ) ) {
			wp_send_json( [
				'success' => false,
				'message' => $deactivate_handler->get_error_message(),
				'data'    => [],
			] );
		}

		wp_send_json( [
			'success'  => true,
			'message' => __( 'The addon has been deactivated', 'jet-form-builder' ),
			'data'    => $this->get_plugin_data( $plugin_file ),
		] );
	}

	/**
	 * @param $plugin_file
	 * @param false $plugin_url
	 */
	public function install_plugin( $plugin_file, $plugin_url = false ) {

		$status = [];

		if ( ! current_user_can( 'install_plugins' ) ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Sorry, you are not allowed to install plugins on this site.', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		if ( ! $plugin_url ) {
			$package = $this->package_url( $plugin_file );
		} else {
			$package = $plugin_url;
		}

		include_once( ABSPATH . 'wp-admin/includes/class-wp-upgrader.php' );

		$skin     = new \WP_Ajax_Upgrader_Skin();
		$upgrader = new \Plugin_Upgrader( $skin );
		$result   = $upgrader->install( $package );

		if ( is_wp_error( $result ) ) {
			$status['errorCode']    = $result->get_error_code();
			$status['errorMessage'] = $result->get_error_message();

			wp_send_json( [
				'success' => false,
				'message' => $result->get_error_message(),
				'data'    => [],
			] );
		} elseif ( is_wp_error( $skin->result ) ) {
			$status['errorCode']    = $skin->result->get_error_code();
			$status['errorMessage'] = $skin->result->get_error_message();

			wp_send_json( [
				'success' => false,
				'message' => $skin->result->get_error_message(),
				'data'    => [],
			] );
		} elseif ( $skin->get_errors()->get_error_code() ) {
			$status['errorMessage'] = $skin->get_error_messages();

			wp_send_json( [
				'success' => false,
				'message' => $skin->get_error_messages(),
				'data'    => [],
			] );
		} elseif ( is_null( $result ) ) {
			global $wp_filesystem;

			$status['errorMessage'] = 'Unable to connect to the filesystem. Please confirm your credentials.';

			// Pass through the error from WP_Filesystem if one was raised.
			if ( $wp_filesystem instanceof \WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->get_error_code() ) {
				$status['errorMessage'] = esc_html( $wp_filesystem->errors->get_error_message() );
			}

			wp_send_json( [
				'success' => false,
				'message' => $status['errorMessage'],
				'data'    => [],
			] );
		}

		wp_send_json( [
			'success' => true,
			'message' => __( 'The addon has been Installed', 'jet-form-builder' ),
			'data'    => $this->get_plugin_data( $plugin_file ),
		] );
	}

	/**
	 * @param $plugin_file
	 */
	public function update_plugin( $plugin_file ) {

		$plugin = plugin_basename( sanitize_text_field( wp_unslash( $plugin_file ) ) );
		$slug   = dirname( $plugin );

		$status = [
			'update'     => 'plugin',
			'slug'       => $slug,
			'oldVersion' => '',
			'newVersion' => '',
		];

		if ( ! current_user_can( 'update_plugins' ) || 0 !== validate_file( $plugin ) ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Sorry, you are not allowed to update plugins on this site.', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$plugin_data = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin );

		include_once( ABSPATH . 'wp-admin/includes/class-wp-upgrader.php' );

		wp_update_plugins();

		$skin     = new \WP_Ajax_Upgrader_Skin();
		$upgrader = new \Plugin_Upgrader( $skin );
		$result   = $upgrader->bulk_upgrade( [ $plugin ] );

		$upgrade_messages = [];

		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			$upgrade_messages = $skin->get_upgrade_messages();
		}

		if ( is_wp_error( $skin->result ) ) {
			wp_send_json( [
				'success'  => false,
				'message' => $skin->result->get_error_message(),
				'data'    => [],
				'debug'   => $upgrade_messages,
			] );
		} elseif ( $skin->get_errors()->get_error_code() ) {
			wp_send_json( [
				'success'  => false,
				'message' => $skin->get_error_message(),
				'data'    => [],
				'debug'   => $upgrade_messages,
			] );

		} elseif ( is_array( $result ) && ! empty( $result[ $plugin ] ) ) {
			$plugin_update_data = current( $result );

			/*
			 * If the `update_plugins` site transient is empty (e.g. when you update
			 * two plugins in quick succession before the transient repopulates),
			 * this may be the return.
			 *
			 * Preferably something can be done to ensure `update_plugins` isn't empty.
			 * For now, surface some sort of error here.
			 */
			if ( true === $plugin_update_data ) {
				wp_send_json( [
					'success' => false,
					'message' => __( 'Addon update failed.', 'jet-form-builder' ),
					'data'    => [],
					'debug'   => $upgrade_messages,
				] );
			}

			$plugin_data = get_plugins( '/' . $result[ $plugin ]['destination_name'] );
			$plugin_data = reset( $plugin_data );

			wp_send_json( [
				'success' => true,
				'message' => __( 'The addon has been updated', 'jet-form-builder' ),
				'data'    => $this->get_plugin_data( $plugin_file ),
			] );

		} elseif ( false === $result ) {
			global $wp_filesystem;

			$errorMessage = 'Unable to connect to the filesystem. Please confirm your credentials.';

			// Pass through the error from WP_Filesystem if one was raised.
			if ( $wp_filesystem instanceof \WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->get_error_code() ) {
				$errorMessage = esc_html( $wp_filesystem->errors->get_error_message() );
			}

			wp_send_json( [
				'success' => false,
				'message' => $errorMessage,
				'data'    => [],
			] );
		}

		wp_send_json( [
			'success' => false,
			'message' => __( 'Plugin update failed.', 'jet-form-builder' ),
			'data'    => [],
		] );
	}

	/**
	 * License service action
	 */
	public function license_service_action() {

		$data = ( ! empty( $_POST['data'] ) ) ? $_POST['data'] : false;

		if ( ! $data || ! isset( $data['action'] ) ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$action = $data['action'];

		switch ( $action ) {

			case 'check-plugin-update':
				set_site_transient( 'update_plugins', null );

				wp_send_json( [
					'success'  => true,
					'message' => __( 'Addons Update Checked', 'jet-form-builder' ),
					'data'    => [],
				] );

				break;

			default:
				wp_send_json( [
					'success'  => false,
					'message' => __( 'Service action Not Found', 'jet-form-builder' ),
					'data'    => [],
				] );
				break;
		}

		exit;
	}

	/**
	 * Manager constructor.
	 */
	public function __construct() {
		add_action( 'wp_ajax_jfb_license_action', array( $this, 'license_action' ) );
		add_action( 'wp_ajax_jfb_license_service_action', array( $this, 'license_service_action' ) );
		add_action( 'wp_ajax_jfb_addon_action', array( $this, 'plugin_action' ) );
	}
}
