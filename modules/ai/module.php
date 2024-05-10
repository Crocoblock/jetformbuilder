<?php


namespace JFB_Modules\Ai;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Ai\Rest_Api\Endpoints\Generate_Form_Endpoint;
use JFB_Modules\Post_Type;

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

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
		global $post_type;

		if ( Post_Type\Module::SLUG !== $post_type ) {
			return;
		}

		/** @var \JFB_Modules\Html_Parser\Module $parser_module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$parser_module = jet_form_builder()->module( 'html-parser' );

		$parser_module->register_scripts();

		$script_asset = require_once $this->get_dir( 'assets/build/admin/forms.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			$parser_module->get_handle()
		);

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/modal.css' ),
			array(
				'wp-components',
			),
			$script_asset['version']
		);
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/admin/forms.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_localize_script(
			$this->get_handle(),
			'JetFormBuilderAdmin',
			array(
				'edit_url' => esc_url(
					add_query_arg(
						array( 'action' => 'edit' ),
						admin_url( 'post.php' )
					)
				),
			)
		);
	}

	public function editor_enqueue_assets() {
		/** @var \JFB_Modules\Html_Parser\Module $parser_module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$parser_module = jet_form_builder()->module( 'html-parser' );

		$parser_module->register_scripts();
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			array(
				$parser_module->get_handle(),
			),
			jet_form_builder()->get_version(),
			true
		);
		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/modal.css' ),
			array(),
			jet_form_builder()->get_version()
		);
	}
}
