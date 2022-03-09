<?php


namespace Jet_Form_Builder\Db_Queries\Traits;


interface Model_Dependencies_Interface {

	public function get_dependencies(): array;

	public function prepare_dependencies();

}