<?php

namespace JFB_Compatibility\Jet_Engine\Blocks\Map_Field;

use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Compatibility\Jet_Engine\Jet_Engine;
use JFB_Modules\Blocks_V2\Interfaces\Block_Asset_Interface;

class Block_Asset implements Block_Asset_Interface {

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
	 * @return void
	 * @throws Repository_Exception
	 */
	public function register_frontend_assets() {
		/** @var Jet_Engine $compat */
		$compat       = jet_form_builder()->compat( Jet_Engine::class );
		$script_asset = require_once $compat->get_dir( 'blocks/map-field/assets/build/frontend/map.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		$handle = $compat->get_handle( 'map-field' );

		array_push(
			$script_asset['dependencies'],
			Module::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			$handle,
			$compat->get_url( 'blocks/map-field/assets/build/frontend/map.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_register_style(
			$handle,
			$compat->get_url( 'blocks/map-field/assets/build/frontend/map.css' ),
			array(),
			$script_asset['version']
		);

		$script_asset = require_once $compat->get_dir(
			'blocks/map-field/assets/build/frontend/autocomplete.asset.php'
		);

		wp_register_script(
			$handle . '-autocomplete',
			$compat->get_url( 'blocks/map-field/assets/build/frontend/autocomplete.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_register_style(
			$handle . '-autocomplete',
			$compat->get_url( 'blocks/map-field/assets/build/frontend/autocomplete.css' ),
			array(),
			$script_asset['version']
		);

		wp_localize_script(
			$handle,
			'JetMapFieldsSettings',
			array(
				'api'             => jet_engine()->api->get_route( 'get-map-point-data' ),
				'apiHash'         => jet_engine()->api->get_route( 'get-map-location-hash' ),
				'apiLocation'     => jet_engine()->api->get_route( 'get-map-location-data' ),
				'apiAutocomplete' => jet_engine()->api->get_route( 'get-map-autocomplete-data' ),
				'nonce'           => wp_create_nonce( 'jet-map-field' ),
				'i18n'            => array(
					'loading'   => esc_html__( 'Loading ...', 'jet-form-builder' ),
					'notFound'  => esc_html__( 'Address not found', 'jet-form-builder' ),
					'resetBtn'  => esc_html__( 'Reset location', 'jet-form-builder' ),
					'descTitle' => esc_html__( 'Lat and Lng are separately stored in the following fields', 'jet-form-builder' ),
				),
			)
		);
	}

	/**
	 * @return void
	 * @throws Repository_Exception
	 */
	public function enqueue_editor_assets() {
		/** @var Jet_Engine $compat */
		$compat       = jet_form_builder()->compat( Jet_Engine::class );
		$script_asset = require_once $compat->get_dir( 'blocks/map-field/assets/build/editor.asset.php' );
		$handle       = $compat->get_handle( 'map-field-editor' );

		wp_enqueue_script(
			$handle,
			$compat->get_url( 'blocks/map-field/assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_localize_script(
			$handle,
			'JetFBMapField',
			array(
				'formats'      => Tools::get_formats(),
				'is_supported' => Tools::is_supported(),
				'help'         => Tools::get_help_message(),
			)
		);
	}
}
