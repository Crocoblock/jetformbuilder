<?php


namespace JFB_Modules\Onboarding;

use Jet_Form_Builder\Blocks\Block_Helper;
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

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Dir_It, Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'onboarding';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_before' ),
			20
		);
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_package_before' ),
			0
		);
		add_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_before' )
		);
		remove_action(
			'jet-form-builder/editor-package/before',
			array( $this, 'editor_assets_package_before' )
		);
		remove_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);
	}

	public function editor_assets_before() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/editor.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function editor_assets_package_before() {
		wp_enqueue_script(
			$this->get_handle( 'package' ),
			$this->get_url( 'assets/build/js/editor.package.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function add_default_fields_to_form( $arguments ) {
		$arguments['template'] = array(
			array( Block_Helper::pref( 'welcome' ) ),
		);

		return $arguments;
	}
}
