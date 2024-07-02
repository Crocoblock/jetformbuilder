<?php

namespace JFB_Modules\Blocks_V2\Actions_Integration;

use JFB_Modules\Blocks_V2\Module;

class Actions_Integration {

	public function init_hooks() {
		add_action(
			'enqueue_block_editor_assets',
			array( $this, 'register_assets' ),
			-8
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_assets' ),
			-8
		);
	}


	public function register_assets() {
		/** @var Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( 'blocks-v2' );

		$script_asset = require_once $blocks->get_dir( 'actions-integration/assets/build/editor.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			'jet-fb-actions-v2'
		);

		// var_dump( $blocks->get_handle( 'to-actions-v2' ) ); die;

		wp_register_script(
			$blocks->get_handle( 'to-actions-v2' ),
			$blocks->get_url( 'actions-integration/assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

}
