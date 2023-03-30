<?php


namespace Jet_Form_Builder\Db_Queries\Traits;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
