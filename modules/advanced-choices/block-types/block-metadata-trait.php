<?php


namespace JFB_Modules\Advanced_Choices\Block_Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Advanced_Choices\Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Block_Metadata_Trait {

	public function get_path_metadata_block() {
		/** @var Module $choices */
		try {
			$choices = jet_form_builder()->module( Module::class );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return $choices->get_dir( 'blocks-metadata/' . $this->get_name() );
	}

}