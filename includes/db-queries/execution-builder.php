<?php


namespace Jet_Form_Builder\Db_Queries;


use Jet_Form_Builder\Exceptions\Sql_Exception;

class Execution_Builder {

	/** @var Base_Db_Model */
	protected $model;

	public function set_model( Base_Db_Model $model ) {
		$this->model = $model;

		return $this;
	}

	public function create() {

	}

	/**
	 * @return Base_Db_Model
	 * @throws Sql_Exception
	 */
	public function model(): Base_Db_Model {
		if ( is_a( $this->model, Base_Db_Model::class ) ) {
			return $this->model;
		}

		throw new Sql_Exception( 'Model in not installed.', $this->model );
	}

}