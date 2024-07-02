<?php


namespace JFB_Modules\Data;

use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'data';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action(
			'enqueue_block_editor_assets',
			array( $this, 'register_assets' ),
			-10
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_assets' ),
			-10
		);
	}

	public function remove_hooks() {
		remove_action(
			'enqueue_block_editor_assets',
			array( $this, 'register_assets' ),
			-10
		);
		remove_action(
			'wp_enqueue_scripts',
			array( $this, 'register_assets' ),
			-10
		);
	}

	public function register_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/index.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		wp_register_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/index.css' ),
			array(),
			$script_asset['version']
		);

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/index.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}
}
