<?php


namespace Jet_Form_Builder\Admin\Table_Views;

use Jet_Form_Builder\Admin\Table_Record_Prepare_Trait;
use Jet_Form_Builder\Classes\Repository_Item_With_Class;
use Jet_Form_Builder\Classes\Repository_Static_Item_It;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

abstract class View_Base implements Repository_Static_Item_It {

	use Repository_Item_With_Class;

	const COLUMN_CHOOSE  = 'choose';
	const COLUMN_ACTIONS = 'actions';
	const COLUMN_CLASSES = 'classes';

	abstract public function get_prepared_list( array $custom_list = array() ): array;

	abstract public function get_raw_list( array $args ): array;

	public function get_list(): array {
		return $this->get_raw_list(
			array(
				'offset' => 0,
				'limit'  => 15,
			)
		);
	}

	public function get_single_actions(): array {
		return array();
	}

	/**
	 * @return Base_Db_Model[]
	 */
	public function get_dependencies(): array {
		return array();
	}

	public function load_data(): array {
		return array();
	}

	/**
	 * @throws Sql_Exception
	 */
	public function prepare_dependencies() {
		foreach ( $this->get_dependencies() as $model ) {
			$model->safe_create();
		}
	}

	/**
	 * @return array
	 */
	final public function load_view(): array {
		try {
			$this->prepare_dependencies();
		} catch ( Sql_Exception $exception ) {
			return array(
				'list'    => array(),
				'columns' => array(),
				'actions' => array(),
			);
		}

		return array_merge(
			array(
				'list'    => $this->get_prepared_list(),
				'columns' => $this->get_columns_headings(),
				'actions' => $this->get_single_actions(),
			),
			$this->load_data()
		);
	}


}
