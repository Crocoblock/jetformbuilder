<?php


namespace Jet_Form_Builder\Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Module_After_Install_It {

	public function on_install();

}