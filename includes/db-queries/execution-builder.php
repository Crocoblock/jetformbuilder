<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

/**
 * @method static Execution_Builder instance()
 *
 * Class Execution_Builder
 * @package Jet_Form_Builder\Db_Queries
 */
class Execution_Builder {

	public $existed_tables = array();

	use Instance_Trait;

	/**
	 * @param Base_Db_Model $model
	 *
	 * @return Execution_Builder
	 */
	public function create( Base_Db_Model $model ): Execution_Builder {
		$model->before_create();

		$this->delta( $this->create_table_schema( $model ) );

		return $this->save_to_existed( $model );
	}


	/**
	 * @param Base_Db_Model $model
	 * @param array $columns
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function insert( Base_Db_Model $model, $columns = array(), $format = null ): int {
		$model->before_insert();

		$insert_columns = array_merge( $model->get_defaults(), $columns );
		$this->wpdb()->insert( $model->table(), $insert_columns, $format );

		if ( ! $this->wpdb()->insert_id ) {
			throw new Sql_Exception( "Something went wrong on insert into: {$model->table()}", $insert_columns );
		}

		$model->after_insert( $insert_columns );

		return $this->wpdb()->insert_id;
	}

	/**
	 * @param Base_Db_Model $model
	 * @param array $columns
	 * @param $where
	 * @param $format
	 * @param $where_format
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function update( Base_Db_Model $model, $columns, $where, $format = null, $where_format = null ): int {
		$model->before_update();

		$result = (int) $this->wpdb()->update( $model->table(), $columns, $where, $format, $where_format );

		if ( ! $result ) {
			throw new Sql_Exception(
				"Something went wrong on update rows in: {$model->table()}",
				$columns,
				$where
			);
		}

		return $result;
	}

	/**
	 * @param Base_Db_Model $model
	 * @param $where
	 * @param $where_format
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function delete( Base_Db_Model $model, $where, $where_format ): int {
		$model->before_delete();

		$result = (int) $this->wpdb()->delete( $model->table(), $where, $where_format );

		if ( ! $result ) {
			throw new Sql_Exception(
				"Something went wrong on delete rows in: {$model->table()}",
				$where
			);
		}

		return $result;
	}

	public function create_table_schema( Base_Db_Model $model ) {
		$schema_keys     = $model->schema_keys();
		$table           = $model->table();
		$columns         = $model->schema();
		$charset_collate = $model->schema_charset_collate();
		$engine          = $model->schema_engine();

		if ( ! empty( $engine ) ) {
			$engine = "ENGINE={$engine}";
		}

		$ready_columns = '';
		foreach ( $columns as $column => $desc ) {
			$ready_columns .= $column . ' ' . $desc . ", \n";
		}

		$keys = array();
		foreach ( $schema_keys as $column_name => $key ) {
			$keys[] = "$key ($column_name)";
		}
		$ready_keys = implode( ", \n", $keys );

		return "CREATE TABLE $table (
			$ready_columns
			$ready_keys
		) {$engine} {$charset_collate};";
	}

	public function is_exist( Base_Db_Model $model ): bool {
		$table = $model->table();

		if ( ! isset( $this->existed_tables[ $table ] ) ) {
			// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			$this->existed_tables[ $table ] = ( $table === $this->wpdb()->get_var( "SHOW TABLES LIKE '$table'" ) );
		}

		return $this->existed_tables[ $table ];
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @return Execution_Builder
	 */
	public function safe_create( Base_Db_Model $model ): Execution_Builder {
		if ( $this->is_exist( $model ) ) {
			return $this;
		}

		return $this->create( $model );
	}

	public function save_to_existed( Base_Db_Model $model ): Execution_Builder {
		$this->existed_tables[ $model->table() ] = true;

		return $this;
	}

	public function delta( $sql ) {
		if ( ! function_exists( 'dbDelta' ) ) {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		}

		dbDelta( $sql );
	}

	/**
	 * Returns WPDB instance
	 *
	 * @return \QM_DB|\wpdb [description]
	 */
	protected function wpdb() {
		global $wpdb;

		return $wpdb;
	}

}
