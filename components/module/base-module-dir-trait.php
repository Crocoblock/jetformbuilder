<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Module_Dir_Trait {

	public function get_dir( string $path ): string {
		return jet_form_builder()->plugin_dir(
			'modules/' . $this->rep_item_id() . '/' . $path
		);
	}

	abstract public function rep_item_id();

}
