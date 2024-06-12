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
use JFB_Modules\Onboarding\Builders\Block_Editor_Builder;
use JFB_Modules\Onboarding\Builders\No_Builder_Handler;
use JFB_Modules\Onboarding\Rest_Api\Use_Form_Route\Use_Form_Route;
use JFB_Modules\Onboarding\Use_Form\Use_Form;

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

	/**
	 * @var Preview
	 */
	private $preview;

	/**
	 * @var Use_Form
	 */
	private $use_form;

	public function rep_item_id() {
		return 'onboarding';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->preview  = new Preview();
		$this->use_form = new Use_Form();
	}

	public function on_uninstall() {
		unset(
			$this->preview,
			$this->use_form
		);
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
		add_action(
			'jet-form-builder/render-preview',
			array( $this, 'enqueue_frontend_assets' )
		);
		$this->get_preview()->init_hooks();
		$this->get_use_form()->init_hooks();
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
	}

	public function editor_assets_package_before() {
		do_action( 'jet-form-builder/use-form/register-assets' );

		$script_asset = require_once $this->get_dir( 'assets/build/editor.package.asset.php' );

		array_push(
			$script_asset['dependencies'],
			$this->get_handle( 'use-form' )
		);

		wp_enqueue_script(
			$this->get_handle( 'package' ),
			$this->get_url( 'assets/build/editor.package.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function enqueue_frontend_assets() {
		do_action( 'jet-form-builder/use-form/register-assets' );

		$script_asset = require_once $this->get_dir( 'assets/build/preview.frontend.asset.php' );

		array_push(
			$script_asset['dependencies'],
			$this->get_handle( 'use-form' ),
			'jet-plugins'
		);

		wp_enqueue_style( 'wp-components' );
		wp_enqueue_style( 'jet-fb-components' );

		wp_enqueue_script(
			$this->get_handle( 'preview-frontend' ),
			$this->get_url( 'assets/build/preview.frontend.js' ),
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

	/**
	 * @return Preview
	 */
	public function get_preview(): Preview {
		return $this->preview;
	}

	/**
	 * @return Use_Form
	 */
	public function get_use_form(): Use_Form {
		return $this->use_form;
	}
}
