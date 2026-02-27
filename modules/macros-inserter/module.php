<?php

namespace JFB_Modules\Macros_Inserter;

use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'macros-inserter';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_assets' )
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_assets' )
		);
	}

	public function register_editor_assets() {
		// CodeMirror for wp.codeEditor.initialize(...)
		wp_enqueue_code_editor(
			array(
				'type' => 'text/html',
			)
		);

		// Styles for CodeMirror in WP
		wp_enqueue_style( 'wp-codemirror' );

		$asset_path = $this->get_dir( 'assets/build/editor.asset.php' );

		$asset = file_exists( $asset_path )
			? require $asset_path
			: array(
				'dependencies' => array(),
				'version'      => jet_form_builder()->get_version(),
			);

		$deps = array_unique(
			array_merge(
				$asset['dependencies'] ?? array(),
				array( 'code-editor' )
			)
		);

		wp_enqueue_script(
			$this->get_handle( 'editor' ),
			$this->get_url( 'assets/build/editor.js' ),
			$deps,
			$asset['version'] ?? jet_form_builder()->get_version(),
			true
		);
	}
}