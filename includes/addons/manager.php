<?php

namespace Jet_Form_Builder\Addons;

use Jet_Form_Builder\Classes\Tools;
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
	 * [$jet_changelog_url description]
	 * @var string
	 */
	public $jet_changelog_url = 'https://account.jetformbuilder.com/wp-content/uploads/jet-changelog/%s.json';

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

	/**
	 * @param false $addon_filename
	 *
	 * @return string
	 */
	public function get_addon_slug_by_filename( $addon_filename = false ) {
		return explode('/', $addon_filename )[0];
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
	 * @param false $plugin_file
	 *
	 * @return false|mixed
	 */
	public function get_jfb_remote_plugin_data( $plugin_file = false ) {

		if ( ! $plugin_file ) {
			return false;
		}

		$remote_plugin_list = $this->get_jfb_remote_plugin_list();

		if ( $remote_plugin_list ) {
			foreach ( $remote_plugin_list as $key => $plugin_data ) {
				if ( $plugin_file === $plugin_data['slug'] ) {
					return $plugin_data;
				}
			}
		}

		return false;
	}

	/**
	 * @return array[]|bool
	 */
	public function get_user_installed_plugins() {

		if ( ! $this->user_installed_plugins ) {

			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			$this->user_installed_plugins = get_plugins();
		}

		return $this->user_installed_plugins;
	}

	/**
	 * [get_addon_data description]
	 * @return [type] [description]
	 */
	public function get_user_plugins() {

		$user_installed_plugins = $this->get_user_installed_plugins();

		$plugin_list = [];

		if ( $user_installed_plugins ) {

			foreach ( $user_installed_plugins as $plugin_file => $plugin_data ) {

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

		$available_addons_data = $this->get_jfb_remote_plugin_list();

		if ( ! empty( $available_addons_data ) && array_key_exists( $plugin_file, $this->user_installed_plugins ) ) {

			foreach ( $available_addons_data as $key => $addon_info ) {

				if ( $plugin_file === $addon_info['slug'] && version_compare( $this->user_installed_plugins[ $plugin_file ]['Version'], $addon_info['version'], '<' ) ) {
					return $addon_info['version'];
				}
			}
		}

		$no_update = isset( $this->update_plugins->no_update ) ? $this->update_plugins->no_update : false;
		$to_update = isset( $this->update_plugins->response ) ? $this->update_plugins->response : false;

		if ( $to_update && ! empty( $to_update ) && array_key_exists( $plugin_file, $to_update ) ) {
			return $to_update[ $plugin_file ]->new_version;
		} elseif ( ! empty( $no_update ) && array_key_exists( $plugin_file, $no_update ) ) {
			return $no_update[ $plugin_file ]->new_version;
		} elseif ( array_key_exists( $plugin_file, $this->user_installed_plugins ) ) {
			$current_version = $this->user_installed_plugins[ $plugin_file ]['Version'];

			return $current_version;
		} else {
			return '1.0.0';
		}

		return false;
	}

	/**
	 * @param $plugin_file
	 *
	 * @return array
	 */
	public function get_addon_data( $plugin_file ) {

		$user_installed_plugins = $this->get_user_installed_plugins();

		if ( empty( $user_installed_plugins[ $plugin_file ] )) {
			return false;
		}

		$plugin_data = $user_installed_plugins[ $plugin_file ];
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
	 * Plugin Action Handler
	 */
	public function addon_activate_action() {

		$data = ( ! empty( $_POST['data'] ) ) ? Tools::maybe_recursive_sanitize( $_POST['data'] ) : false;

		if ( ! $data ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$plugin = $data['plugin'];

		$this->activate_plugin( $plugin );

		wp_send_json( [
			'success' => true,
			'message' => __( 'Success', 'jet-form-builder' ),
			'data'    => [],
		] );
	}

	/**
	 * Plugin Action Handler
	 */
	public function addon_deactivate_action() {

		$data = ( ! empty( $_POST['data'] ) ) ? Tools::maybe_recursive_sanitize( $_POST['data'] ) : false;

		if ( ! $data ) {
			wp_send_json( [
				'success'  => false,
				'message' => __( 'Server error. Please, try again later', 'jet-form-builder' ),
				'data'    => [],
			] );
		}

		$plugin = $data['plugin'];

		$this->deactivate_plugin( $plugin );

		wp_send_json( [
			'success' => true,
			'message' => __( 'Success', 'jet-form-builder' ),
			'data'    => [],
		] );
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
			'data'    => $this->get_addon_data( $plugin_file ),
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
			'data'    => $this->get_addon_data( $plugin_file ),
		] );
	}

	/**
	 * License service action
	 */
	public function service_action() {

		$data = ( ! empty( $_POST['data'] ) ) ? Tools::maybe_recursive_sanitize( $_POST['data'] ) : false;

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
				wp_clean_update_cache();

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
	 * @param $plugin_meta
	 * @param $plugin_file
	 * @param $plugin_data
	 *
	 * @return mixed
	 */
	public function plugin_row_meta( $plugin_meta, $plugin_file, $plugin_data ) {

		$available_addons_data = $this->get_jfb_remote_plugin_list();

		$is_jfb_addon = false;
		$plugin_data = false;

		foreach ( $available_addons_data as $key => $addon_data ) {

			if ( $plugin_file === $addon_data['slug'] ) {
				$is_jfb_addon = true;
				$plugin_data = $addon_data;
			}
		}

		if ( $is_jfb_addon && empty( $plugin_data['update'] ) ) {

			$plugin_slug = $this->get_addon_slug_by_filename( $plugin_data['slug'] );

			$plugin_meta['view-details'] = sprintf( '<a href="%s" class="thickbox open-plugin-details-modal" aria-label="%s" data-title="%s">%s</a>',
				esc_url( network_admin_url( 'plugin-install.php?tab=plugin-information&plugin=' . $plugin_slug . '&TB_iframe=true&width=600&height=550' ) ),
				esc_attr( sprintf( __( 'More information about %s', 'jet-form-builder' ), $plugin_data['name'] ) ),
				esc_attr( $plugin_data['name'] ),
				__( 'View details', 'jet-form-builder' )
			);
		}

		return $plugin_meta;
	}

	/**
	 * @param $_data
	 * @param string $_action
	 * @param null $_args
	 *
	 * @return mixed
	 */
	public function plugins_api_filter( $_data, $_action = '', $_args = null ) {

		if ( 'plugin_information' !== $_action ) {
			return $_data;
		}

		if ( ! isset( $_args->slug ) ) {
			return $_data;
		}

		$available_addons_data = $this->get_jfb_remote_plugin_list();
		$user_installed_plugins = $this->get_user_installed_plugins();

		$registered_plugin_data = false;

		foreach ( $available_addons_data as $key => $addon_data ) {

			$addon_slug = $this->get_addon_slug_by_filename( $addon_data['slug'] );

			if ( $addon_slug === $_args->slug ) {
				$registered_plugin_data = $addon_data;
				$registered_plugin_data['plugin_slug'] = $addon_slug;
				$registered_plugin_data['transient_key'] = $addon_slug . '_addon_info_data';
				$registered_plugin_data['banners'] = [
					'high' => sprintf( 'https://account.jetformbuilder.com/free-download/images/addon-banners/%s.png', $addon_slug ),
					'low'  => sprintf( 'https://account.jetformbuilder.com/free-download/images/addon-banners/%s.png', $addon_slug ),
				];

				if ( ! empty( $user_installed_plugins[ $addon_data['slug'] ] ) ) {
					$installed_plugin_data = $user_installed_plugins[ $addon_data['slug'] ];

					$registered_plugin_data['author'] = $installed_plugin_data['Author'];
					$registered_plugin_data['plugin_url'] = $installed_plugin_data['PluginURI'];
				}

				break;
			}
		}

		if ( ! $registered_plugin_data ) {
			return $_data;
		}

		$addon_api_data = get_site_transient( $registered_plugin_data['transient_key'] );

		if ( empty( $addon_api_data ) ) {
			$changelog_remote_response = $this->changelog_remote_query( $registered_plugin_data['plugin_slug'] );

			if ( ! $changelog_remote_response ) {
				return $_data;
			}

			$plugin_api_data = new \stdClass();

			$plugin_api_data->name     = $registered_plugin_data['name'];
			$plugin_api_data->slug     = $registered_plugin_data['slug'];
			$plugin_api_data->author   = $registered_plugin_data['author'];
			$plugin_api_data->homepage = $registered_plugin_data['plugin_url'];
			$plugin_api_data->requires = $registered_plugin_data['requires'];
			$plugin_api_data->tested   = $registered_plugin_data['tested'];
			$plugin_api_data->banners  = $registered_plugin_data['banners'];
			$plugin_api_data->version  = $changelog_remote_response->current_version;
			$plugin_api_data->sections = [
				'changelog' => $changelog_remote_response->changelog,
			];

			// Expires in 1 day
			set_site_transient( $registered_plugin_data['transient_key'], $plugin_api_data, DAY_IN_SECONDS );
		}

		$_data = $addon_api_data;

		return $_data;
	}

	/**
	 * @param $slug
	 *
	 * @return false|mixed
	 */
	public function changelog_remote_query( $slug ) {

		$response = wp_remote_get( sprintf( $this->jet_changelog_url, $slug ) );

		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) != '200' ) {
			return false;
		}

		$response = json_decode( $response['body'] );

		return $response;
	}

	/**
	 * [get_theme_info description]
	 * @return [type] [description]
	 */
	public function get_theme_info() {
		$style_parent_theme = wp_get_theme( get_template() );

		return apply_filters( 'jfb-addons-page/theme-info', array(
			'name'       => $style_parent_theme->get('Name'),
			'theme'      => strtolower( preg_replace('/\s+/', '', $style_parent_theme->get('Name') ) ),
			'version'    => $style_parent_theme->get('Version'),
			'author'     => $style_parent_theme->get('Author'),
			'authorSlug' => strtolower( preg_replace('/\s+/', '', $style_parent_theme->get('Author') ) ),
		) );
	}

	/**
	 * [allow_unsafe_urls description]
	 * @param  [type] $args [description]
	 * @return [type]       [description]
	 */
	public function allow_unsafe_urls( $args ) {

		if ( isset( $_REQUEST['action'] ) && 'jfb_addon_action' === $_REQUEST['action'] ) {
			$args['reject_unsafe_urls'] = false;
		}

		return $args;
	}

	/**
	 * Manager constructor.
	 */
	public function __construct() {

		add_action( 'wp_ajax_jfb_license_service_action', array( $this, 'service_action' ) );

		add_action( 'wp_ajax_jfb_addon_action', array( $this, 'plugin_action' ) );

		add_action( 'wp_ajax_jfb_addon_activate_action', array( $this, 'addon_activate_action' ) );

		add_action( 'wp_ajax_jfb_addon_deactivate_action', array( $this, 'addon_deactivate_action' ) );

		add_filter( 'plugin_row_meta', array( $this, 'plugin_row_meta' ), 10, 3 );

		add_filter( 'plugins_api', array( $this, 'plugins_api_filter' ), 10, 3 );

		add_filter( 'http_request_args', array( $this, 'allow_unsafe_urls' ) );

	}
}
