<?php


namespace Jet_Form_Builder\Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Module_Url_Trait {

	public function get_url( string $url ): string {
		return jet_form_builder()->plugin_url(
			'includes/modules/' . $this->rep_item_id() . '/' . $url
		);
	}

	abstract public function rep_item_id();

}
