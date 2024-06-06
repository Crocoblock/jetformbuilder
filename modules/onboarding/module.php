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
	 * @var Block_Editor_Builder
	 */
	private $block_builder;
	/**
	 * @var No_Builder_Handler
	 */
	private $no_builder;

	/**
	 * @var Preview
	 */
	private $preview;

	public function rep_item_id() {
		return 'onboarding';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->block_builder = new Block_Editor_Builder();
		$this->no_builder    = new No_Builder_Handler();
		$this->preview = new Preview();
	}

	public function on_uninstall() {
		unset(
			$this->block_builder,
			$this->no_builder,
			$this->preview
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
			'rest_api_init',
			array( $this, 'rest_api_init' )
		);

		$this->get_block_builder()->init_hooks();
		$this->get_no_builder()->init_hooks();
		$this->get_preview()->init_hooks();
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
		remove_action(
			'rest_api_init',
			array( $this, 'rest_api_init' )
		);
	}

	public function rest_api_init() {
		$route = new Use_Form_Route();
		$route->register();
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



	public function get_preview_nonce(): Wp_Nonce {
		return $this->preview_nonce;
	}

	public function get_block_builder(): Block_Editor_Builder {
		return $this->block_builder;
	}

	/**
	 * @return No_Builder_Handler
	 */
	public function get_no_builder(): No_Builder_Handler {
		return $this->no_builder;
	}

	/**
	 * @return Preview
	 */
	public function get_preview(): Preview {
		return $this->preview;
	}
}
