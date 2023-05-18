<?php


namespace JFB_Modules\Base_Module;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Repository_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module_Tools {

	public static function get_url( string $module_name, string $url ): string {
		try {
			return jet_form_builder()->module( $module_name )->get_url( $url );
		} catch ( Repository_Exception $exception ) {
			return '';
		}
	}

}