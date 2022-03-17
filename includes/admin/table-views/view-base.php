<?php


namespace Jet_Form_Builder\Admin\Table_Views;

use Jet_Form_Builder\Classes\Repository_Item_With_Class;
use Jet_Form_Builder\Classes\Repository_Static_Item_It;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies_Interface;

abstract class View_Base implements
	Repository_Static_Item_It,
	Model_Dependencies_Interface {

	use Repository_Item_With_Class;
	use Model_Dependencies;

	const COLUMN_CHOOSE  = 'choose';
	const COLUMN_ACTIONS = 'actions';
	const COLUMN_CLASSES = 'classes';

	abstract public function get_prepared_list( array $custom_list = array() ): array;

	public function get_list(): array {
		return $this->get_raw_list(
			array(
				'offset' => 0,
				'limit'  => 15,
			)
		);
	}

	public function get_global_actions(): array {
		return array();
	}

	public function get_total(): int {
		return 0;
	}

	public function get_receive_endpoint(): array {
		return array();
	}

	public function load_data(): array {
		return array();
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
				'list'        => $this->get_prepared_list(),
				'columns'     => $this->get_columns_headings(),
				'actions'     => $this->get_global_actions(),
				'total'       => $this->get_total(),
				'receive_url' => $this->get_receive_endpoint(),
			),
			$this->load_data()
		);
	}


}
