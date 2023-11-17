<?php


namespace Jet_Form_Builder\Classes\Macro_Constants;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Site_Url_Constant extends Base_Constant {

	public function get_id(): string {
		return 'SiteUrl';
	}

	public function get_value(): string {
		return get_site_url();
	}
}
