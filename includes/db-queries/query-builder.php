<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Query_Builder {

	protected $sql;
	protected $select;
	protected $where;

	private $view;

	public function set_view( View_Base $view ): Query_Builder {
		$this->view = $view;

		return $this;
	}

	/**
	 * @return View_Base
	 * @throws Query_Builder_Exception
	 */
	public function view(): View_Base {
		if ( ! $this->view ) {
			throw new Query_Builder_Exception( 'Undefined view' );
		}

		return $this->view;
	}

	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function prepare_select(): Query_Builder {
		$this->select = 'SELECT';
		$columns      = array();

		foreach ( $this->view()->select_columns() as $column ) {
			$columns[] = sprintf( '`%s`.`%s`', $this->view()->table(), $column );
		}

		$this->select .= " \r\n\t" . implode( ", \r\n\t", $columns );
		$this->select .= "\r\n FROM `{$this->view()->table()}`";

		return $this;
	}

	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function maybe_prepare_select(): Query_Builder {
		if ( $this->select ) {
			return $this;
		}

		return $this->prepare_select();
	}

	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function prepare_where(): Query_Builder {
		$this->where = 'WHERE';
		$conditions  = array_merge(
			array(
				array(
					'type'   => 'equal',
					'values' => array( 1, 1 ),
				),
			),
			$this->view()->conditions()
		);

		foreach ( $conditions as $condition ) {
			$this->is_correct_condition( $condition );

		}

		return $this;
	}

	/**
	 * @param $condition
	 *
	 * @throws Query_Builder_Exception
	 */
	private function is_correct_condition( $condition ) {
		$type = $condition['type'] ?? false;

		if ( ! $type || ! in_array( $type, $this->condition_types, true ) ) {
			throw new Query_Builder_Exception( "Undefined condition type: $type" );
		}
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	public function to_sql() {
		$this->maybe_prepare_select();
	}

}
