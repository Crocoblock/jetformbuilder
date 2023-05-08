<?php


namespace Jet_Form_Builder\Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Module_Handle_It {

	public function get_handle( string $unique_string = '' ): string;

}