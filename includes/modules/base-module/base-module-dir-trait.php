<?php


namespace Jet_Form_Builder\Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Module_Dir_Trait {

	public function get_dir( string $path ): string {
		return jet_form_builder()->plugin_dir(
			'includes/modules/' . $this->rep_item_id() . '/' . $path
		);
	}

	abstract public function rep_item_id();

}
