<?php
/**
 * Plugin Name: JetFormBuilder
 * Plugin URI:  https://jetformbuilder.com/
 * Description: Advanced form builder plugin for WordPress block editor. Create forms from the ground up, customize the existing ones, and style them up – all in one editor.
 * Version:     2.0.0
 * Author:      Crocoblock
 * Author URI:  https://crocoblock.com/
 * Text Domain: jet-form-builder
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

function jet_form_builder_init() {

	define( 'JET_FORM_BUILDER_VERSION', '2.0.0' );

	define( 'JET_FORM_BUILDER__FILE__', __FILE__ );
	define( 'JET_FORM_BUILDER_PLUGIN_BASE', plugin_basename( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_PATH', plugin_dir_path( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_URL', plugins_url( '/', JET_FORM_BUILDER__FILE__ ) );

	require JET_FORM_BUILDER_PATH . 'includes/plugin.php';

	add_filter(
		'plugin_action_links_' . JET_FORM_BUILDER_PLUGIN_BASE,
		function ( $links ) {
			if ( jet_form_builder()->addons_manager->is_active() ) {
				return $links;
			}

			$url = 'https://jetformbuilder.com/pricing/';
			$url = add_query_arg(
				array(
					'utm_source'   => 'wp-dashboard/jet-form-builder-plugins-page',
					'utm_medium'   => 'crocoblock-license/theme-author',
					'utm_campaign' => 'go-pro-button',
				),
				$url
			);

			wp_enqueue_style(
				'jet-fb-admin',
				JET_FORM_BUILDER_URL . 'assets/css/admin/plugins.css',
				array(),
				JET_FORM_BUILDER_VERSION
			);

			$links['go_pro'] = "<a href=\"{$url}\" target=\"_blank\" class=\"jet-fb-go-pro-link\">Go Pro</a>";

			return $links;
		}
	);
}

if ( version_compare( PHP_VERSION, '7.0.0', '>=' ) ) {
	add_action( 'plugins_loaded', 'jet_form_builder_init' );

	function jet_form_builder() {
		return Jet_Form_Builder\Plugin::instance();
	}

	if ( ! function_exists( 'jet_fb_render_form' ) ) {
		function jet_fb_render_form( $settings ) {
			return Jet_Form_Builder\Plugin::instance()->blocks->get_form_class()->render_callback_field( $settings );
		}
	}
	if ( ! function_exists( 'jet_fb_handler' ) ) {
		function jet_fb_handler(): \Jet_Form_Builder\Form_Handler {
			return jet_form_builder()->form_handler;
		}
	}
	if ( ! function_exists( 'jet_fb_action_handler' ) ) {
		function jet_fb_action_handler(): \Jet_Form_Builder\Actions\Action_Handler {
			return jet_fb_handler()->action_handler;
		}
	}
	if ( ! function_exists( 'jet_fb_request_handler' ) ) {
		function jet_fb_request_handler(): \Jet_Form_Builder\Request\Request_Handler {
			return jet_fb_handler()->request_handler;
		}
	}
	if ( ! function_exists( 'jet_fb_gateway_current' ) ) {
		/**
		 * @return \Jet_Form_Builder\Gateways\Base_Gateway|\Jet_Form_Builder\Gateways\Base_Scenario_Gateway
		 * @throws \Jet_Form_Builder\Exceptions\Repository_Exception
		 */
		function jet_fb_gateway_current(): \Jet_Form_Builder\Gateways\Base_Gateway {
			return \Jet_Form_Builder\Gateways\Gateway_Manager::instance()->get_current_gateway_controller();
		}
	}
} else {
	add_action(
		'admin_notices',
		function () {
			$class   = 'notice notice-error';
			$message = __(
				'<b>Error:</b> <b>JetFormBuilder</b> plugin requires a PHP version ">= 7.0"',
				'jet-form-builder'
			);
			printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
		}
	);
}
