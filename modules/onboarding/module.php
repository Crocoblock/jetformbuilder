<?php


namespace JFB_Modules\Onboarding;

use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Wp_Nonce\Wp_Nonce;
use Jet_Form_Builder\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	private $preview_nonce;

	const PREVIEW_ID_KEY = 'jfb-preview-form';

	public function rep_item_id() {
		return 'onboarding';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->preview_nonce = new Wp_Nonce( 'jfb-preview-form' );
	}

	public function on_uninstall() {
		unset( $this->preview_nonce );
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_before' ),
			20
		);
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_package_before' ),
			0
		);
		add_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);
		add_filter(
			'the_content',
			array( $this, 'render_form_preview' )
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_before' )
		);
		remove_action(
			'jet-form-builder/editor-package/before',
			array( $this, 'editor_assets_package_before' )
		);
		remove_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);
		remove_filter(
			'the_content',
			array( $this, 'render_form_preview' )
		);
	}

	public function editor_assets_before() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_localize_script(
			$this->get_handle(),
			'JFBOnboardingConfig',
			array(
				'previewURL' => add_query_arg(
					array(
						self::PREVIEW_ID_KEY => get_the_ID(),
						'_nonce'             => $this->get_preview_nonce()->create(),
					),
					site_url()
				),
			)
		);
	}

	public function editor_assets_package_before() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.package.asset.php' );

		wp_enqueue_script(
			$this->get_handle( 'package' ),
			$this->get_url( 'assets/build/editor.package.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function add_default_fields_to_form( $arguments ) {
		$arguments['template'] = array(
			array( Block_Helper::pref( 'welcome' ) ),
		);

		return $arguments;
	}

	public function render_form_preview( $content ) {
		if (
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			empty( $_GET[ self::PREVIEW_ID_KEY ] ) ||
			! $this->get_preview_nonce()->verify()
		) {
			return $content;
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$form_id = absint( $_GET[ self::PREVIEW_ID_KEY ] );

		if ( ! current_user_can( 'edit_jet_fb_form', $form_id ) ) {
			return $content;
		}

		/** @var Blocks\Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( \Jet_Form_Builder\Blocks\Module::class );

		return $blocks->get_form_class()->render_callback_field( array( 'form_id' => $form_id ) );
	}

	public function get_preview_nonce(): Wp_Nonce {
		return $this->preview_nonce;
	}
}
