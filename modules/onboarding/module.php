<?php


namespace JFB_Modules\Onboarding;

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
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'editor_assets_before' ) );
	}

	public function remove_hooks() {
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'editor_assets_before' ) );
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
}

