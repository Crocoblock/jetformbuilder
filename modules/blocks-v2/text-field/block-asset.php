<?php

namespace JFB_Modules\Blocks_V2\Text_Field;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Modules\Blocks_V2\Interfaces\Block_Asset_Interface;
use JFB_Modules\Blocks_V2\Module;
use Jet_Form_Builder\Blocks\Module as LegacyBlocksModule;

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
		add_filter(
			'jet-form-builder/before-end-form',
			array( $this, 'enqueue_required_assets' )
		);
	}

	/**
	 * @throws Repository_Exception
	 */
	public function register_frontend_assets() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );
		$asset     = require_once $blocks_v2->get_dir( 'text-field/assets/build/frontend/field.asset.php' );

		if ( true === $asset ) {
			return;
		}

		$asset['dependencies'][] = LegacyBlocksModule::MAIN_SCRIPT_HANDLE;

		wp_register_script(
			$blocks_v2->get_handle( 'text-field' ),
			$blocks_v2->get_url( 'text-field/assets/build/frontend/field.js' ),
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_register_style(
			$blocks_v2->get_handle( 'text-field' ),
			$blocks_v2->get_url( 'text-field/assets/build/frontend/field.css' ),
			array(),
			$asset['version']
		);

		$asset_mask = require_once $blocks_v2->get_dir( 'text-field/assets/build/frontend/field.mask.asset.php' );

		$asset_mask['dependencies'][] = 'jet-form-builder-inputmask';

		wp_register_script(
			'jet-form-builder-inputmask',
			$blocks_v2->get_url( 'text-field/assets/lib/jquery.inputmask.min.js' ),
			array( 'jquery' ),
			$asset_mask['version'],
			true
		);

		wp_register_script(
			$blocks_v2->get_handle( 'text-field-mask' ),
			$blocks_v2->get_url( 'text-field/assets/build/frontend/field.mask.js' ),
			$asset_mask['dependencies'],
			$asset_mask['version'],
			true
		);
	}

	/**
	 * @return void
	 * @throws Repository_Exception
	 */
	public function enqueue_editor_assets() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );
		$asset     = require_once $blocks_v2->get_dir( 'text-field/assets/build/editor.asset.php' );

		if ( true === $asset ) {
			return;
		}

		wp_enqueue_script(
			$blocks_v2->get_handle( 'text-field-editor' ),
			$blocks_v2->get_url( 'text-field/assets/build/editor.js' ),
			$asset['dependencies'],
			$asset['version'],
			true
		);
		wp_enqueue_style(
			$blocks_v2->get_handle( 'text-field-editor' ),
			$blocks_v2->get_url( 'text-field/assets/build/editor.css' ),
			array(),
			$asset['version']
		);

		$block_render = new Block_Render( new Block_Type() );

		wp_localize_script(
			$blocks_v2->get_handle( 'text-field-editor' ),
			'JFBTextFieldConfig',
			array(
				'seenIcon'   => $block_render->get_seen_icon(),
				'unSeenIcon' => $block_render->get_unseen_icon(),
			)
		);
	}

	public function enqueue_required_assets() {
		wp_enqueue_script( Base_Module_Handle_It::HANDLE_PREFIX . 'blocks-v2-text-field' );
	}
}
