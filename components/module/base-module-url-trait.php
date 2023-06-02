<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Module_Url_Trait {

	public function get_url( string $url ): string {
		return jet_form_builder()->plugin_url(
			'modules/' . $this->rep_item_id() . '/' . $url
		);
	}

	abstract public function rep_item_id();

}
