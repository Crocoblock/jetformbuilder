<?php


namespace JFB_Modules\Switcher;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		return 'switcher';
	}

	public function condition(): bool {
		return true;
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
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function add_blocks_types( array $types ): array {
		$types[] = new Blocks\Switcher\Block_Type();

		return $types;
	}

	public function enqueue_admin_assets() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			array(),
			true
		);

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/switcher.css' ),
			array(),
			jet_form_builder()->get_version()
		);
	}
}