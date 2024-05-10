<?php


namespace JFB_Modules\Wysiwyg;

use Jet_Form_Builder\Blocks\Module as BlocksModule;
use Jet_Form_Builder\Plugin;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'wysiwyg';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function add_blocks_types( array $block_types ): array {
		$block_types[] = new Blocks\Wysiwyg\Block_Type();

		return $block_types;
	}

	public function enqueue_admin_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_enqueue_style(
			$this->get_handle( 'lightgray-skin' ),
			includes_url( 'js/tinymce/skins/lightgray/skin.min.css' ),
			array(),
			$script_asset['version']
		);

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/wysiwyg.css' ),
			array(
				'editor-buttons',
			),
			$script_asset['version']
		);
	}

	public function register_frontend_scripts() {
		$script_asset = require_once $this->get_dir( 'assets/build/wysiwyg.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			BlocksModule::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/wysiwyg.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
		wp_register_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/wysiwyg.css' ),
			array(),
			$script_asset['version']
		);
	}
}
