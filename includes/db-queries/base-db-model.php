<?php


namespace Jet_Form_Builder\Db_Queries;


use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

abstract class Base_Db_Model {

	const DB_TABLE_PREFIX = 'jet_fb_';

	protected static $prefix = self::DB_TABLE_PREFIX;

	protected $silence = false;

	/**
	 * Returns table name
	 * @return [type] [description]
	 */
	abstract public static function table_name(): string;

	/**
	 * Returns columns schema
	 * @return [type] [description]
	 */
	abstract public static function schema(): array;

	/**
	 * Returns schemas options
	 * Such as primary keys, charset
	 * @return [type] [description]
	 */
	abstract public static function schema_keys(): array;

	public static function schema_columns( $prefix = '' ): array {
		$columns = array_keys( static::schema() );

		if ( ! $prefix ) {
			return $columns;
		}

		return array_map( function ( $column ) use ( $prefix ) {
			return array(
				'as' => sprintf( "`%s`.`%s` as '%s'", static::table(), $column, "{$prefix}.{$column}" )
			);
		}, $columns );
	}

	/**
	 * @throws Sql_Exception
	 */
	public function safe_create(): Base_Db_Model {
		Execution_Builder::instance()->safe_create( $this );

		return $this;
	}

	/**
	 * @param array $columns
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function insert( $columns = array(), $format = null ) {
		try {
			return Execution_Builder::instance()->insert( $this, $columns, $format );
		} catch ( Sql_Exception $exception ) {
			if ( $this->is_silence() ) {
				return 0;
			}
			throw $exception;
		}
	}

	/**
	 * @param $multi_columns
	 * @param null $format
	 *
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function insert_many( $multi_columns, $format = null ) {
		$inserted_ids = array();
		foreach ( $multi_columns as $columns ) {
			if ( ! is_array( $columns ) || empty( $columns ) ) {
				continue;
			}
			$inserted_ids[] = $this->insert( $columns );
		}

		return $inserted_ids;
	}

	/**
	 * @param $columns
	 * @param $where
	 * @param null $format
	 * @param null $where_format
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function update( $columns, $where, $format = null, $where_format = null ) {
		try {
			return Execution_Builder::instance()->update( $this, $columns, $where, $format, $where_format );
		} catch ( Sql_Exception $exception ) {
			if ( $this->is_silence() ) {
				return 0;
			}
			throw $exception;
		}
	}

	public function get_defaults(): array {
		return array();
	}

	/**
	 * To skip checking the rights specified in the "capabilities_to_create" method,
	 * throw the Skip_Exception exception.
	 *
	 * If you need a custom check before creating the table, throw a Sql_Exception.
	 *
	 * @throws Skip_Exception
	 */
	public function before_create() {
		throw new Skip_Exception();
	}

	public function capabilities_to_create(): array {
		return array( 'read' );
	}

	/**
	 * @throws Skip_Exception
	 */
	public function before_insert() {
		throw new Skip_Exception();
	}

	public function after_insert( $insert_columns ) {
	}

	public function capabilities_to_insert(): array {
		return array( 'read' );
	}

	/**
	 * @throws Skip_Exception
	 */
	public function before_update() {
		throw new Skip_Exception();
	}

	public function capabilities_to_update(): array {
		return array( 'read' );
	}

	public function schema_charset_collate() {
		return $this->wpdb()->get_charset_collate();
	}

	public function schema_engine() {
		return 'MyISAM';
	}

	/**
	 * You must you this function,
	 * to get right name of table
	 * @return string table name
	 */
	public static function table() {
		return static::wpdb()->prefix . static::$prefix . static::table_name();
	}

	/**
	 * @param bool $silence
	 *
	 * @return Base_Db_Model
	 */
	public function set_silence( bool $silence ): Base_Db_Model {
		$this->silence = $silence;

		return $this;
	}

	/**
	 * @return bool
	 */
	public function is_silence(): bool {
		return $this->silence;
	}

	/**
	 * Returns WPDB instance
	 * @return \QM_DB|\wpdb [description]
	 */
	public static function wpdb() {
		global $wpdb;

		return $wpdb;
	}

}