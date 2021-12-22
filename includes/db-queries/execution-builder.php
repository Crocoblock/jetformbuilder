<?php


namespace Jet_Form_Builder\Db_Queries;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Skip_Exception;
use Jet_Form_Builder\Exceptions\Sql_Exception;

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
	 * @throws Sql_Exception
	 */
	public function create( Base_Db_Model $model ): Execution_Builder {
		$this->before_create( $model );

		$this->delta( $this->create_table_schema( $model ) );

		return $this->save_to_existed( $model );
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @throws Sql_Exception
	 */
	public function before_create( Base_Db_Model $model ) {
		try {
			$model->before_create();
		} catch ( Skip_Exception $exception ) {
			return;
		}

		foreach ( $model->capabilities_to_create() as $cap ) {
			if ( ! current_user_can( $cap ) ) {
				throw ( new Sql_Exception(
					"No capability: {$cap} to create table: {$model->table()}."
				) )->set_code( 403 );
			}
		}
	}

	/**
	 * @param Base_Db_Model $model
	 * @param array $columns
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function insert( Base_Db_Model $model, $columns = array(), $format = null ): int {
		$this->before_insert( $model );

		$insert_columns = array_merge( $model->get_defaults(), $columns );
		$result         = (int) $this->wpdb()->insert( $model->table(), $insert_columns, $format );

		if ( ! $result ) {
			throw new Sql_Exception( "Something went wrong on insert into: {$model->table()}" );
		}

		return $result;
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @throws Sql_Exception
	 */
	public function before_insert( Base_Db_Model $model ) {
		try {
			$model->before_insert();
		} catch ( Skip_Exception $exception ) {
			return;
		}

		foreach ( $model->capabilities_to_insert() as $cap ) {
			if ( ! current_user_can( $cap ) ) {
				throw ( new Sql_Exception(
					"No capability: {$cap} to insert into table: {$model->table()}."
				) )->set_code( 403 );
			}
		}
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
		$this->before_update( $model );

		$result = (int) $this->wpdb()->update( $model->table(), $columns, $where, $format, $where_format );

		if ( ! $result ) {
			throw new Sql_Exception( "Something went wrong on update rows in: {$model->table()}" );
		}

		return $result;
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @throws Sql_Exception
	 */
	public function before_update( Base_Db_Model $model ) {
		try {
			$model->before_update();
		} catch ( Skip_Exception $exception ) {
			return;
		}

		foreach ( $model->capabilities_to_update() as $cap ) {
			if ( ! current_user_can( $cap ) ) {
				throw ( new Sql_Exception(
					"No capability: {$cap} to update rows in table: {$model->table()}."
				) )->set_code( 403 );
			}
		}
	}

	public function create_table_schema( Base_Db_Model $model ) {
		$schema_keys     = $model->schema_keys();
		$table           = $model->table();
		$columns         = $model->schema();
		$charset_collate = $model->schema_charset_collate();

		$ready_columns = '';
		foreach ( $columns as $column => $desc ) {
			$ready_columns .= $column . ' ' . $desc . ", \n";
		}

		$keys = [];
		foreach ( $schema_keys as $key => $column_name ) {
			$keys[] = "$key ($column_name)";
		}
		$ready_keys = implode( ", \n", $keys );

		return "CREATE TABLE $table (
			$ready_columns
			$ready_keys
		) $charset_collate;";
	}

	public function is_exist( Base_Db_Model $model ): bool {
		$table = $model->table();

		if ( ! isset( $this->existed_tables[ $table ] ) ) {
			$this->existed_tables[ $table ] = ( $table === $this->wpdb()->get_var( "SHOW TABLES LIKE '$table'" ) );
		}

		return $this->existed_tables[ $table ];
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @return Execution_Builder
	 * @throws Sql_Exception
	 */
	public function safe_create( Base_Db_Model $model ) {
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
			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		}

		dbDelta( $sql );
	}

	/**
	 * Returns WPDB instance
	 * @return \QM_DB|\wpdb [description]
	 */
	protected function wpdb() {
		global $wpdb;

		return $wpdb;
	}

}