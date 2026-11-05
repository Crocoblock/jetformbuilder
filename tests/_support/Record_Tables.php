<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;
use JFB_Modules\Form_Record\Models\Record_Error_Model;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;

/**
 * Gives a test fresh Form Record / webhook token tables built from the
 * plugin's own model schemas.
 *
 * The wpunit bootstrap does not run JetFormBuilder's database installer, and
 * wp-browser rewrites every `CREATE TABLE` into `CREATE TEMPORARY TABLE`.
 * Temporary tables are not rolled back with the per-test transaction: they
 * live for the whole DB connection, i.e. the whole suite run. A table one
 * test creates with a hand-written (or older) schema is therefore still
 * there for every test that runs after it, and the plugin cannot replace it
 * with the full schema - `CREATE` fails with "already exists" and inserts
 * then fail on missing columns such as `created_at`.
 *
 * Lives in `tests/_support/` rather than `tests/wpunit/` for the same reason
 * as `Ajax_Die_Signal`: Codeception scans every class declared in
 * `tests/wpunit/*.php` for test methods.
 */
final class Record_Tables {

	/**
	 * Child tables first, so a leftover foreign key never blocks a drop.
	 *
	 * @return Base_Db_Model[]
	 */
	private static function models(): array {
		return array(
			new Tokens_To_Records_Model(),
			new Tokens_Model(),
			new Record_Field_Model(),
			new Record_Action_Result_Model(),
			new Record_Error_Model(),
			new Record_Model(),
		);
	}

	/**
	 * Drops whatever records/token tables earlier tests left behind and
	 * recreates them with the plugin's own schema.
	 */
	public static function reset(): void {
		self::drop();

		foreach ( array_reverse( self::models() ) as $model ) {
			$model->create();
		}
	}

	public static function drop(): void {
		global $wpdb;

		$builder = Execution_Builder::instance();

		foreach ( self::models() as $model ) {
			$table = $model::table();

			// wp-browser turns this into `DROP TEMPORARY TABLE IF EXISTS`.
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.SchemaChange, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			$wpdb->query( "DROP TABLE IF EXISTS `{$table}`" );

			// Execution_Builder caches "table exists" for the whole process, and
			// `SHOW TABLES` does not list temporary tables, so the cache is the
			// only thing that would otherwise make `create()` skip this table.
			unset( $builder->existed_tables[ $table ] );
		}
	}
}
