<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		global $wpdb;
		$model->before_create();

		$sql = $this->create_table_schema( $model );

		// phpcs:ignore WordPress.DB
		$wpdb->query( $sql );

		$model->after_create();
		$this->add_foreign_relations( $model );

		return $this->save_to_existed( $model );
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @return Execution_Builder
	 */
	public function create_foreign_tables( Base_Db_Model $model ): Execution_Builder {
		foreach ( $model->foreign_relations() as $constraint ) {
			// Fool protection
			if ( get_class( $constraint->get_model() ) === get_class( $model ) ) {
				_doing_it_wrong(
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					get_class( $model ) . '::foreign_relations',
					'You have a logical error. A model cannot be dependent on itself.',
					'2.0.0'
				);
				continue;
			}
			$constraint->get_model()->create();
		}

		return $this;
	}


	/**
	 * @param Base_Db_Model $model
	 * @param array $columns
	 *
	 * @param null $format
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function insert( Base_Db_Model $model, $columns = array(), $format = null ): int {
		global $wpdb;

		$model->before_insert();

		$insert_columns = array_merge( $model->get_defaults(), $columns );

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery
		$wpdb->insert( $model::table(), $insert_columns, $format );

		if ( ! $wpdb->insert_id ) {
			throw new Sql_Exception(
				esc_html( "Something went wrong on insert into: {$model::table()}" ),
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				$insert_columns
			);
		}

		$model->after_insert( $insert_columns );

		return $wpdb->insert_id;
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
		global $wpdb;

		$model->before_update();

		$update_columns = $model->update_columns( $columns );

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery
		$wpdb->update( $model->table(), $update_columns, $where, $format, $where_format );

		if ( ! $wpdb->rows_affected ) {
			throw new Sql_Exception(
				esc_html( "Something went wrong on update rows in: {$model::table()}" ),
				$columns, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				$where // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			);
		}

		return $wpdb->rows_affected;
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
		global $wpdb;

		$model->before_delete();

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery
		$result = (int) $wpdb->delete( $model->table(), $where, $where_format );

		if ( ! $result ) {
			throw new Sql_Exception(
				esc_html( "Something went wrong on delete rows in: {$model->table()}" ),
				$where // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			);
		}

		return $result;
	}

	/**
	 * @param View_Base $view
	 *
	 * @return int
	 * @throws Query_Builder_Exception
	 */
	public function view_delete( View_Base $view ): int {
		global $wpdb;

		$where = ( new Query_Conditions_Builder() )
			->set_view( $view )
			->result();

		// phpcs:ignore WordPress.DB
		$wpdb->query( "DELETE FROM {$view->table()} {$where}" );

		if ( ! $wpdb->rows_affected ) {
			throw new Query_Builder_Exception(
				esc_html( "Something went wrong on delete rows in: {$view->table()}" ),
				$where // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			);
		}

		return $wpdb->rows_affected;
	}

	/**
	 * @param array $columns
	 * @param View_Base $view
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function view_update( array $columns, View_Base $view ): int {
		global $wpdb;

		$where = ( new Query_Conditions_Builder() )
			->set_view( $view )
			->result();

		$set   = $view->build_set( $columns );
		$query = "UPDATE `{$view->table()}` {$set} {$where};";

		// phpcs:ignore WordPress.DB
		(int) $wpdb->query( $query );

		if ( ! $wpdb->rows_affected ) {
			throw new Sql_Exception(
				esc_html( "Something went wrong on update rows in: {$view->table()}" ),
				$query, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				$wpdb->rows_affected // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			);
		}

		return $wpdb->rows_affected;
	}

	/**
	 * @param Base_Db_Model $model
	 *
	 * @return string
	 */

	public function create_table_schema( Base_Db_Model $model ) {
		$schema_keys     = $model->schema_keys();
		$table           = $model->table();
		$columns         = $model->schema();
		$charset_collate = $model->schema_charset_collate();
		$engine          = apply_filters( 'jet-form-builder/table-engine', $model->schema_engine(), $model );

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

	protected function add_foreign_relations( Base_Db_Model $model ) {
		global $wpdb;

		foreach ( $model->foreign_relations() as $constraint ) {
			$constraint->set_foreign_table( $model::table_name() );
			try {
				$constraint->before_create();
			} catch ( Skip_Exception $exception ) {
				continue;
			}
			// phpcs:ignore WordPress.DB
			$wpdb->query( "ALTER TABLE `{$model::table()}` ADD {$constraint->build()}" );
		}
	}

	public function is_exist( Base_Db_Model $model ): bool {
		global $wpdb;

		$table = $model::table();

		if ( ! isset( $this->existed_tables[ $table ] ) ) {
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery
			$find = $wpdb->get_var(
				$wpdb->prepare( 'SHOW TABLES LIKE %s', $table )
			);

			$this->existed_tables[ $table ] = ( $table === $find );
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

	public function transaction_start() {
		global $wpdb;

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery
		return $wpdb->query( 'START TRANSACTION' );
	}

	public function transaction_commit() {
		global $wpdb;

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery
		return $wpdb->query( 'COMMIT' );
	}

	public function transaction_rollback() {
		global $wpdb;

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery
		return $wpdb->query( 'ROLLBACK' );
	}


	public function delta( $sql ) {
		if ( ! function_exists( 'dbDelta' ) ) {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		}

		dbDelta( $sql );
	}

}
