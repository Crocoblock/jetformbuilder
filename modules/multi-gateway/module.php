<?php


namespace JFB_Modules\Multi_Gateway;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks\Module as BlocksModule;
use Jet_Form_Builder\Form_Handler;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

class Module implements
	Base_Module_After_Install_It,
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;
	use Base_Module_Url_Trait;

	public function rep_item_id() {
		return 'multi-gateway';
	}

	public function condition(): bool {
		return jet_form_builder()->has_module( 'jet-style' );
	}

	public function on_install() {
	}

	public function on_uninstall() {
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'preview_styles' ) );

		add_action(
			'jet-form-builder/form-handler/before-send',
			array( $this, 'set_gateway_from_submitted_multi_gateway' ),
			0
		);
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet-form-builder/form-handler/before-send', array( $this, 'set_gateway_from_submitted_multi_gateway' ), 0 );
	}

	public function add_blocks_types( array $types ): array {
		$types[] = new Blocks\Multi_Gateway\Block_Type();

		return $types;
	}

	public function preview_styles() {

		$script_asset = require $this->get_dir( 'assets/build/editor.asset.php' );

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.css' ),
			array(),
			$script_asset['version']
		);
	}

	public function enqueue_admin_assets() {

		$script_asset = require $this->get_dir( 'assets/build/editor.asset.php' );

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.css' ),
			array(),
			$script_asset['version']
		);
	}

	public function register_frontend_scripts() {
		$script_asset = require $this->get_dir( 'assets/build/multi-gateway.asset.php' );

		$deps = $script_asset['dependencies'] ?? array();
		$ver  = $script_asset['version'] ?? false;

		$deps[] = BlocksModule::MAIN_SCRIPT_HANDLE;

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/multi-gateway.js' ),
			$deps,
			$ver,
			true
		);

		wp_register_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/multi-gateway.css' ),
			array(),
			$ver
		);
	}

	/**
	 * Set active gateway for current submission from Multi-Gateway field value.
	 *
	 * @param Form_Handler $handler
	 */
	public function set_gateway_from_submitted_multi_gateway( Form_Handler $handler ) {

		$handler_form_id = (int) $handler->get_form_id();
		$selected        = $this->get_allowed_gateway_for_submission(
			jet_fb_context()->get_request( 'multi_gateway' ),
			$handler_form_id
		);

		// ADDED: normalize to parent for meta read (_jf_gateways stored on parent form post)
		$real_form_id = $this->get_real_form_id( $handler_form_id );

		$gateways_module = \JFB_Modules\Gateways\Module::instance();

		$gateways  = $gateways_module->get_form_gateways_by_id( $real_form_id );
		$is_manual = 'manual' === ( $gateways['mode'] ?? 'single' );

		if ( '' === $selected && ! $is_manual ) {
			return;
		}

		$gateways['gateway'] = $selected ?: 'none';

		// IMPORTANT: set module form_id to handler form id (revision),
		// so Default_With_Gateway_Executor won't overwrite our runtime selection.
		$gateways_module->set_form_id( $handler_form_id );
		$gateways_module->save_gateways_form_data( $gateways );
	}

	public function get_allowed_gateway_for_submission( $selected, int $form_id ): string {
		if ( ! is_string( $selected ) || '' === $selected ) {
			return '';
		}

		$selected = sanitize_key( $selected );

		if ( '' === $selected ) {
			return '';
		}

		$real_form_id = $this->get_real_form_id( $form_id );
		$gateways     = \JFB_Modules\Gateways\Module::instance()->get_form_gateways_by_id( $real_form_id );

		if ( ! is_array( $gateways ) ) {
			return '';
		}

		$allowed = $this->get_allowed_gateways_for_frontend( $gateways );

		return in_array( $selected, $allowed, true ) ? $selected : '';
	}

	private function get_real_form_id( int $form_id ): int {
		$real_form_id = $form_id;

		$parent = wp_is_post_revision( $real_form_id );
		if ( $parent ) {
			$real_form_id = (int) $parent;
		}

		$parent = wp_is_post_autosave( $real_form_id );
		if ( $parent ) {
			$real_form_id = (int) $parent;
		}

		$parent = wp_get_post_parent_id( $real_form_id );
		if ( $parent ) {
			$real_form_id = (int) $parent;
		}

		return $real_form_id;
	}

	private function get_allowed_gateways_for_frontend( array $gateways ): array {
		$mode    = $gateways['mode'] ?? 'single';
		$allowed = array();

		if ( 'manual' === $mode ) {
			foreach ( $gateways as $key => $value ) {
				if ( ! is_string( $key ) || in_array( $key, array( 'mode', 'gateway' ), true ) ) {
					continue;
				}

				if ( is_array( $value ) && ! empty( $value['show_on_front'] ) ) {
					$allowed[] = sanitize_key( $key );
				}
			}

			return array_filter( $allowed );
		}

		$gateway = $gateways['gateway'] ?? 'none';

		if ( is_string( $gateway ) && '' !== $gateway && 'none' !== $gateway ) {
			$allowed[] = sanitize_key( $gateway );
		}

		return array_filter( $allowed );
	}
}
