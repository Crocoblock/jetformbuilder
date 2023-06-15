<?php


namespace JFB_Modules\Form_Record\Admin\Pages\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Form_Record\Module;

trait Form_Records_Pages_Trait {

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function base_script_url(): string {
		/** @var Module $module */
		$module = jet_form_builder()->module( Module::class );

		return $module->get_url( "assets/build/js/admin/pages/{$this->slug()}{min}.js" );
	}

}