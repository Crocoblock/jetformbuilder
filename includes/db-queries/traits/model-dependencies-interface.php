<?php


namespace Jet_Form_Builder\Db_Queries\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Model_Dependencies_Interface {

	public function get_dependencies(): array;

	public function prepare_dependencies();

}