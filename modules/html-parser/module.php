<?php


namespace JFB_Modules\Html_Parser;

use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It, Base_Module_Handle_It, Base_Module_Url_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'html-parser';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'register_scripts' ) );
	}

	public function remove_hooks() {
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'register_scripts' ) );
	}

	public function register_scripts() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/parser.js' ),
			array( 'jet-plugins' ),
			jet_form_builder()->get_version(),
			true
		);
	}
}
