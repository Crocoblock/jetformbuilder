<?php


namespace JFB_Modules\Gateways\Pages;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Gateways\Module;

trait Gateways_Pages_Trait {

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function base_script_url(): string {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'gateways' );

		return $module->get_url( "assets/build/js/admin/pages/{$this->slug()}{min}.js" );
	}

}