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
	}

	public function remove_hooks() {
	}

	public function register_scripts() {
		/** @var \JFB_Modules\Jet_Plugins\Module $jet_plugins */
		/** @noinspection PhpUnhandledExceptionInspection */
		$jet_plugins = jet_form_builder()->module( 'jet-plugins' );
		$jet_plugins->register_scripts();

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/parser.js' ),
			array(
				$jet_plugins::HANDLE,
			),
			jet_form_builder()->get_version(),
			true
		);
	}
}
