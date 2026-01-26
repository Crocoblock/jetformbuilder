<?php

namespace JFB_Modules\Blocks_V2\Phone_Field;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Modules\Blocks_V2\Interfaces\Block_Asset_Interface;
use JFB_Modules\Blocks_V2\Module;
use Jet_Form_Builder\Blocks\Module as LegacyBlocksModule;

/**
 * International Phone Field Assets Handler
 */
class Block_Asset implements Block_Asset_Interface {

	const INTL_TEL_INPUT_VERSION = '25.2.0';

	/**
	 * Initialize hooks
	 */
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
	 * Register frontend assets
	 *
	 * @throws Repository_Exception
	 */
	public function register_frontend_assets() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		// Register intl-tel-input library (local files)
		wp_register_style(
			'intl-tel-input',
			$blocks_v2->get_url( 'phone-field/assets/lib/intl-tel-input/intlTelInput.min.css' ),
			array(),
			self::INTL_TEL_INPUT_VERSION
		);

		wp_register_script(
			'intl-tel-input',
			$blocks_v2->get_url( 'phone-field/assets/lib/intl-tel-input/intlTelInputWithUtils.min.js' ),
			array(),
			self::INTL_TEL_INPUT_VERSION,
			true
		);

		// Check if our built assets exist
		$asset_file = $blocks_v2->get_dir( 'phone-field/assets/build/frontend/field.asset.php' );

		if ( file_exists( $asset_file ) ) {
			$asset = require_once $asset_file;

			if ( true !== $asset ) {
				$asset['dependencies'][] = LegacyBlocksModule::MAIN_SCRIPT_HANDLE;
				$asset['dependencies'][] = 'intl-tel-input';

				$handle = $blocks_v2->get_handle( 'phone-field' );

				wp_register_script(
					$handle,
					$blocks_v2->get_url( 'phone-field/assets/build/frontend/field.js' ),
					$asset['dependencies'],
					$asset['version'],
					true
				);

				// Localize script with custom country name translations
				wp_localize_script(
					$handle,
					'jfbPhoneFieldI18n',
					$this->get_localized_country_names()
				);

				wp_register_style(
					$blocks_v2->get_handle( 'phone-field' ),
					$blocks_v2->get_url( 'phone-field/assets/build/frontend/field.css' ),
					array( 'intl-tel-input' ),
					$asset['version']
				);
			}
		}
	}

	/**
	 * Get localized country names for intl-tel-input
	 *
	 * @return array Country names that can be translated
	 */
	private function get_localized_country_names() {
		return apply_filters(
			'jet-form-builder/phone-field/i18n',
			array(
				// By default, intl-tel-input uses its own country name translations
				// Add entries here ONLY if you want to override specific countries
				// Example:
				// 'ua' => __( 'Ukraine', 'jet-form-builder' ),
				// 'us' => __( 'United States', 'jet-form-builder' ),
				// 'gb' => __( 'United Kingdom', 'jet-form-builder' ),
			)
		);
	}

	/**
	 * Enqueue editor assets
	 *
	 * @return void
	 * @throws Repository_Exception
	 */
	public function enqueue_editor_assets() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		$asset_file = $blocks_v2->get_dir( 'phone-field/assets/build/editor/index.asset.php' );

		if ( ! file_exists( $asset_file ) ) {
			return;
		}

		$asset = require_once $asset_file;

		if ( true === $asset ) {
			return;
		}

		wp_enqueue_script(
			$blocks_v2->get_handle( 'phone-field-editor' ),
			$blocks_v2->get_url( 'phone-field/assets/build/editor/index.js' ),
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_enqueue_style(
			$blocks_v2->get_handle( 'phone-field-editor' ),
			$blocks_v2->get_url( 'phone-field/assets/build/editor/index.css' ),
			array(),
			$asset['version']
		);
	}

	/**
	 * Enqueue field assets when field is rendered
	 * Called from Block_Render::before_render()
	 */
	public function enqueue_field_assets() {
		wp_enqueue_style( 'intl-tel-input' );
		wp_enqueue_style( 'intl-tel-input-flags-fix' );
		wp_enqueue_script( Base_Module_Handle_It::HANDLE_PREFIX . 'blocks-v2-phone-field' );
		wp_enqueue_style( Base_Module_Handle_It::HANDLE_PREFIX . 'blocks-v2-phone-field' );
	}
}
