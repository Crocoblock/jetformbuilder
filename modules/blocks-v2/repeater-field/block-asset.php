<?php

namespace JFB_Modules\Blocks_V2\Repeater_Field;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Blocks_V2\Interfaces\Block_Asset_Interface;
use JFB_Modules\Blocks_V2\Module;
use Jet_Form_Builder\Blocks\Module as LegacyBlocksModule;

class Block_Asset implements Block_Asset_Interface {

	const HANDLE = 'jet-fb-repeater-field';

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'enqueue_editor_assets' )
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_frontend_assets' )
		);
		add_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_frontend_assets' )
		);
	}

	/**
	 * @throws Repository_Exception
	 */
	public function register_frontend_assets() {
		$asset = require_once $this->get_dir( '/assets/build/frontend.asset.php' );

		if ( true === $asset ) {
			return;
		}

		$asset['dependencies'][] = LegacyBlocksModule::MAIN_SCRIPT_HANDLE;

		wp_register_script(
			self::HANDLE,
			$this->get_url( '/assets/build/frontend.js' ),
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_register_style(
			self::HANDLE,
			$this->get_url( '/assets/build/frontend.css' ),
			array(),
			$asset['version']
		);
	}

	/**
	 * @return void
	 * @throws Repository_Exception
	 */
	public function enqueue_editor_assets() {
		$asset = require_once $this->get_dir( '/assets/build/editor.asset.php' );

		if ( true === $asset ) {
			return;
		}

		wp_enqueue_script(
			$this->get_handle( 'repeater-field-editor' ),
			$this->get_url( '/assets/build/editor.js' ),
			$asset['dependencies'],
			$asset['version'],
			true
		);
	}

	/** @noinspection PhpUnhandledExceptionInspection */
	private function get_dir( string $path = '' ): string {
		/** @var Module $compat */
		$compat = jet_form_builder()->module( 'blocks-v2' );

		return $compat->get_dir( 'repeater-field' . $path );
	}

	/** @noinspection PhpUnhandledExceptionInspection */
	private function get_url( string $path ): string {
		/** @var Module $compat */
		$compat = jet_form_builder()->module( 'blocks-v2' );

		return $compat->get_url( 'repeater-field' . $path );
	}

	/** @noinspection PhpUnhandledExceptionInspection */
	private function get_handle( string $prefix ): string {
		/** @var Module $compat */
		$compat = jet_form_builder()->module( 'blocks-v2' );

		return $compat->get_handle( $prefix );
	}
}
