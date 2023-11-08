<?php


namespace JFB_Modules\Ai;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Ai\Rest_Api\Endpoints\Generate_Form_Endpoint;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'ai';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_assets' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'editor_enqueue_assets' ) );
	}

	public function remove_hooks() {
		remove_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_assets' ) );
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'editor_enqueue_assets' ) );
	}

	public function on_install() {
		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		/** @noinspection PhpUnhandledExceptionInspection */
		$rest_api = jet_form_builder()->module( 'rest-api' );

		$rest_api->get_controller()->install( new Generate_Form_Endpoint() );
	}

	public function on_uninstall() {
		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		/** @noinspection PhpUnhandledExceptionInspection */
		$rest_api = jet_form_builder()->module( 'rest-api' );

		$rest_api->get_controller()->uninstall( new Generate_Form_Endpoint() );
	}

	public function admin_enqueue_assets() {
		/** @var \JFB_Modules\Html_Parser\Module $parser_module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$parser_module = jet_form_builder()->module( 'html-parser' );

		$parser_module->register_scripts();
		wp_enqueue_style( 'wp-components' );
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/admin/forms.js' ),
			array(
				$parser_module->get_handle(),
				'wp-api-fetch',
				'wp-dom-ready',
				'wp-components',
				'wp-i18n',
			),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function editor_enqueue_assets() {
		/** @var \JFB_Modules\Html_Parser\Module $parser_module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$parser_module = jet_form_builder()->module( 'html-parser' );

		$parser_module->register_scripts();
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/editor.js' ),
			array(
				$parser_module->get_handle(),
			),
			jet_form_builder()->get_version(),
			true
		);
	}
}
