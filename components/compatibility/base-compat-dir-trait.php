<?php


namespace JFB_Components\Compatibility;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Compat_Dir_Trait {

	public function get_dir( string $path ): string {
		return jet_form_builder()->plugin_dir(
			'compatibility/' . $this->rep_item_id() . '/' . $path
		);
	}

	abstract public function rep_item_id();

}
