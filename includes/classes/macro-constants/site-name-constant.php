<?php


namespace Jet_Form_Builder\Classes\Macro_Constants;

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Site_Name_Constant extends Base_Constant {

	public function get_id(): string {
		return 'SiteName';
	}

	public function get_value(): string {
		return Tools::get_site_name();
	}
}
