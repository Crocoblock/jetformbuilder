<?php


namespace JFB_Modules\Html_Parser;

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

class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'html-parser';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	public function register_scripts() {
		$script_asset = require_once $this->get_dir( 'assets/build/parser.asset.php' );

		// script have already registered
		if ( true === $script_asset ) {
			return;
		}

		/** @var \JFB_Modules\Jet_Plugins\Module $jet_plugins */
		/** @noinspection PhpUnhandledExceptionInspection */
		$jet_plugins = jet_form_builder()->module( 'jet-plugins' );
		$jet_plugins->register_scripts();

		array_push(
			$script_asset['dependencies'],
			$jet_plugins::HANDLE
		);

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/parser.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_localize_script(
			$this->get_handle(),
			'JetFormBuilderParserConfig',
			array(
				'mimes' => get_allowed_mime_types(),
			)
		);

		$ui_asset = require $this->get_dir( 'assets/build/admin-ui.asset.php' );
		wp_register_script(
			'jfb-html-parser-admin-ui',
			$this->get_url( 'assets/build/admin-ui.js' ),
			$ui_asset['dependencies'],
			$ui_asset['version'],
			true
		);

		if (
			is_admin()
			&& isset( $_GET['post_type'] )
			&& 'jet-form-builder' === $_GET['post_type']
			&& isset( $_SERVER['REQUEST_URI'] )
			&& false !== strpos( $_SERVER['REQUEST_URI'], 'edit.php' ) // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		) {
			wp_enqueue_script( $this->get_handle() );
			wp_enqueue_script( 'jfb-html-parser-admin-ui' );
		}
	}
}
