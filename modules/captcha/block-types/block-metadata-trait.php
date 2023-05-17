<?php


namespace JFB_Modules\Captcha\Block_Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Captcha\Module;

trait Block_Metadata_Trait {

	public function get_path_metadata_block() {
		/** @var Module $module */
		try {
			$module = jet_form_builder()->module( Module::class );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return $module->get_dir( 'blocks-metadata/' . $this->get_name() );
	}

}