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

	/**
	 * @throws Sql_Exception
	 */
	public function safe_create(): Base_Db_Model {
		Execution_Builder::instance()->safe_create( $this );

		return $this;
	}

	/**
	 * @return View_Base
	 * @throws Query_Builder_Exception
	 */
	public static function view(): View_Base {
		throw new Query_Builder_Exception( 'View is undefined for: ' . static::class );
	}

	/**
	 * @param $primary_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function findById( $primary_id ) {
		return static::find( array( 'id' => $primary_id ) )
		             ->set_limit( array( 1 ) )
		             ->query()
		             ->query_one();
	}

	/**
	 * @param $columns
	 *
	 * @return View_Base
	 * @throws Query_Builder_Exception
	 */
	public static function find( $columns ): View_Base {
		$conditions = array();

		foreach ( $columns as $column => $value ) {
			if ( is_numeric( $column ) ) {
				$conditions[] = $value;
			} else {
				$conditions[] = array(
					'type'   => 'equal_column',
					'values' => array( $column, $value ),
				);
			}
		}

		return static::view()->set_conditions( $conditions );
	}

	/**
	 * @param $columns
	 *
	 * @return View_Base
	 * @throws Query_Builder_Exception
	 */
	public static function findOne( $columns ): View_Base {
		return static::find( $columns )->set_limit( array( 1 ) );
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function all() {
		return static::view()->query()->query_all();
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
		return 'InnoDB';
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