<?php


namespace Jet_Form_Builder\Db_Queries\Traits;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;

trait Model_Dependencies {

	/**
	 * @return Base_Db_Model[]
	 */
	public function get_dependencies(): array {
		return array();
	}

	public function prepare_dependencies() {
		foreach ( $this->get_dependencies() as $model ) {
			$model->create();
		}
	}

}