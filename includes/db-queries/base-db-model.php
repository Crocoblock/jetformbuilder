<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Versions\Base_Migration;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Db_Model {

	const DB_TABLE_PREFIX = 'jet_fb_';
	// phpcs:disable Generic.NamingConventions.UpperCaseConstantName.ClassConstantNotUpperCase
	const InnoDB = 'InnoDB';
	const MyISAM = 'MyISAM';
	// phpcs:enable Generic.NamingConventions.UpperCaseConstantName.ClassConstantNotUpperCase

	const PRIMARY_ID = 'id';
	const CREATED_AT = 'created_at';
	const UPDATED_AT = 'updated_at';

	const DATETIME_FORMAT = 'Y-m-d H:i:s';

	protected static $prefix = self::DB_TABLE_PREFIX;

	protected $silence = false;
	protected $gmt     = 0;

	/**
	 * Returns table name
	 *
	 * @return [type] [description]
	 */
	abstract public static function table_name(): string;

	/**
	 * Returns columns schema
	 *
	 * @return [type] [description]
	 */
	abstract public static function schema(): array;

	/**
	 * Returns schemas options
	 * Such as primary keys, charset
	 *
	 * @return [type] [description]
	 */
	abstract public static function schema_keys(): array;

	public static function schema_columns( $prefix = '' ): array {
		$columns   = array();
		$generator = self::generate_scoped_columns( $prefix );

		foreach ( $generator as $column ) {
			$generator->next();

			$columns[] = $generator->current();
		}

		return $columns;
	}

	public static function generate_scoped_columns( string $prefix = '' ): \Generator {
		$generator = self::generate_columns();

		foreach ( $generator as $column ) {
			$item = sprintf( '`%s`.`%s`', static::table(), $column );

			if ( $prefix ) {
				$item .= sprintf( " as '%s'", "{$prefix}.{$column}" );
			}

			yield $column;
			yield array( 'as' => $item );
		}
	}

	public static function generate_columns(): \Generator {
		$schema = static::schema();

		foreach ( $schema as $column_name => $details ) {
			yield $column_name;
		}
	}


	public function create(): Base_Db_Model {
		Execution_Builder::instance()->safe_create( $this );

		return $this;
	}

	/**
	 * This method is used to create foreign keys.
	 * And this is safe as the model will create
	 * the outer table before it creates the current one.
	 *
	 * P.S. see
	 *  - \Jet_Form_Builder\Db_Queries\Base_Db_Model::before_create
	 *  - \Jet_Form_Builder\Db_Queries\Execution_Builder::create
	 *
	 * @return Base_Db_Constraint[]
	 */
	public function foreign_relations(): array {
		return array();
	}

	/**
	 * This method returns a list of migrations
	 * that must be performed before
	 * the sql query is executed.
	 *
	 * These migrations will be automatically
	 * marked as "installed" after the current table is created
	 *
	 * @return Base_Migration[]
	 */
	public function related_migrations(): array {
		return array();
	}

	/**
	 * Generate migrations which need to install
	 *
	 * @return \Generator
	 */
	public function get_migrations(): \Generator {
		$migrations = $this->related_migrations();

		if ( ! count( $migrations ) ) {
			return;
		}

		foreach ( $this->related_migrations() as $migration ) {
			if ( ! $migration->is_installed() ) {
				yield $migration;
			}
		}
	}

	/**
	 * @param array $columns
	 * @param null $format
	 *
	 * @return int
	 * @throws Sql_Exception
	 * @since 3.3.0 Added inner hooks
	 */
	public function insert( $columns = array(), $format = null ): int {
		$columns = apply_filters( 'jet-form-builder/db/before-insert', $columns, $this );
		$columns = apply_filters( "jet-form-builder/db/{$this::table_name()}/before-insert", $columns );

		$id = Execution_Builder::instance()->insert( $this, $columns, $format );

		do_action( 'jet-form-builder/db/after-insert', $id, $columns, $this );
		do_action( "jet-form-builder/db/{$this::table_name()}/after-insert", $id, $columns );

		return $id;
	}

	public function insert_soft( $columns = array(), $format = null ): int {
		try {
			return $this->insert( $columns, $format );
		} catch ( Sql_Exception $exception ) {
			return 0;
		}
	}

	/**
	 * @param $multi_columns
	 * @param null $format
	 *
	 * @return int[]
	 * @throws Sql_Exception
	 */
	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
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
	public function update( $columns, $where, $format = null, $where_format = null ): int {
		return Execution_Builder::instance()->update( $this, $columns, $where, $format, $where_format );
	}

	public function update_soft( $columns, $where, $format = null, $where_format = null ): int {
		try {
			return $this->update( $columns, $where, $format, $where_format );
		} catch ( Sql_Exception $exception ) {
			return 0;
		}
	}

	/**
	 * @param $where
	 * @param null $format
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function delete( $where, $format = null ) {
		return Execution_Builder::instance()->delete( $this, $where, $format );
	}

	public function get_defaults(): array {
		$defaults    = array();
		$schema_keys = array_keys( static::schema() );

		if ( in_array( self::CREATED_AT, $schema_keys, true ) ) {
			$defaults[ self::CREATED_AT ] = current_time( 'mysql', $this->gmt );
		}

		return $defaults;
	}

	public function before_create() {
		$this->create_foreign_tables();
		$this->mark_migrations_as_installed();
	}

	protected function create_foreign_tables() {
		Execution_Builder::instance()->create_foreign_tables( $this );
	}

	protected function mark_migrations_as_installed() {
		foreach ( $this->related_migrations() as $migration ) {
			$migration->install_automatic();
		}
	}

	public function after_create() {
	}

	/**
	 * @throws Sql_Exception
	 */
	public function before_insert() {
		$this->create();
		$this->migrations_install();
	}

	/**
	 * @throws Sql_Exception
	 */
	protected function migrations_install() {
		try {
			foreach ( $this->related_migrations() as $migration ) {
				$migration->install();
			}
		} catch ( Migration_Exception $exception ) {
			throw new Sql_Exception( esc_html( $exception->getMessage() ) );
		}
	}

	public function after_insert( $insert_columns ) {
	}

	public function before_update() {
	}

	public function update_columns( array $columns ): array {
		$schema_keys = array_keys( static::schema() );

		if ( in_array( self::UPDATED_AT, $schema_keys, true ) &&
			! array_key_exists( self::UPDATED_AT, $columns )
		) {
			$columns[ self::UPDATED_AT ] = current_time( 'mysql', $this->gmt );
		}

		return $columns;
	}

	/**
	 * @throws Sql_Exception
	 */
	public function before_delete() {
		if ( jet_form_builder()->has_module( 'cli' ) ) {
			return;
		}
		if ( ! current_user_can( 'manage_options' ) ) {
			throw new Sql_Exception(
				esc_html( "Not enough capabilities for current user to delete rows in {$this::table()}" )
			);
		}
	}

	public function schema_charset_collate() {
		return $this->wpdb()->get_charset_collate();
	}

	public function schema_engine() {
		return self::InnoDB;
	}

	/**
	 * You must you this function,
	 * to get right name of table
	 *
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
	 *
	 * @return \QM_DB|\wpdb [description]
	 */
	public static function wpdb() {
		global $wpdb;

		return $wpdb;
	}

}
