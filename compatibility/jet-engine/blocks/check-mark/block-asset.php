<?php

namespace JFB_Compatibility\Jet_Engine\Blocks\Check_Mark;

use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Compatibility\Jet_Engine\Jet_Engine;
use JFB_Modules\Blocks_V2\Interfaces\Block_Asset_Interface;

class Block_Asset implements Block_Asset_Interface {

	public function init_hooks() {
		add_action(
			'enqueue_block_editor_assets',
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
	 * @return void
	 * @throws Repository_Exception
	 */
	public function register_frontend_assets() {
		$script_asset = require_once $this->get_dir( '/assets/build/frontend/radio.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			'jet-fb-radio-field'
		);

		wp_register_style(
			$this->get_handle( 'check-mark' ),
			$this->get_url( '/assets/build/frontend/main.css' ),
			array(),
			$script_asset['version']
		);

		wp_register_script(
			$this->get_handle( 'check-mark-radio' ),
			$this->get_url( '/assets/build/frontend/radio.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		$script_asset = require_once $this->get_dir( '/assets/build/frontend/checkbox.asset.php' );

		array_push(
			$script_asset['dependencies'],
			'jet-fb-checkbox-field'
		);

		wp_register_script(
			$this->get_handle( 'check-mark-checkbox' ),
			$this->get_url( '/assets/build/frontend/checkbox.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	/**
	 * @return void
	 */
	public function enqueue_editor_assets() {
		$screen = get_current_screen();

		if ( ! $screen || 'jet-engine' !== $screen->post_type ) {
			return;
		}

		$script_asset = require_once $this->get_dir( '/assets/build/editor.asset.php' );

		wp_enqueue_script(
			$this->get_handle( 'check-mark-editor' ),
			$this->get_url( '/assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	/** @noinspection PhpUnhandledExceptionInspection */
	private function get_dir( string $path = '' ): string {
		/** @var Jet_Engine $compat */
		$compat = jet_form_builder()->compat( Jet_Engine::class );

		return $compat->get_dir( 'blocks/check-mark' . $path );
	}

	/** @noinspection PhpUnhandledExceptionInspection */
	private function get_url( string $path ): string {
		/** @var Jet_Engine $compat */
		$compat = jet_form_builder()->compat( Jet_Engine::class );

		return $compat->get_url( 'blocks/check-mark' . $path );
	}

	/** @noinspection PhpUnhandledExceptionInspection */
	private function get_handle( string $prefix ): string {
		/** @var Jet_Engine $compat */
		$compat = jet_form_builder()->compat( Jet_Engine::class );

		return $compat->get_handle( $prefix );
	}
}
