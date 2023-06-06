<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Repository_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Module_Static_Instance_Trait {

	/**
	 * @return Base_Module_After_Install_It|Base_Module_Dir_It|Base_Module_Handle_It|Base_Module_It|Base_Module_Url_It|Mock_Module
	 */
	public static function instance() {
		if ( ! jet_form_builder()->has_module( static::get_instance_id() ) ) {
			return new Mock_Module();
		}

		try {
			return jet_form_builder()->module( static::get_instance_id() );
		} catch ( Repository_Exception $exception ) {
			return new Mock_Module();
		}
	}

	public function rep_item_id() {
		return static::get_instance_id();
	}

}
