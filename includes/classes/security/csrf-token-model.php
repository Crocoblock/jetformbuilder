<?php


namespace Jet_Form_Builder\Classes\Security;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Csrf_Token_Model extends Base_Db_Model {

	/**
	 * @return string
	 */
	public static function table_name(): string {
		return 'csrf_tokens';
	}

	/**
	 * @return array
	 */
	public static function schema(): array {
		return array(
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'client_id'  => 'varchar(255)',
			'token'      => 'text',
			'created_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
		);
	}

	/**
	 * @return array
	 */
	public static function schema_keys(): array {
		return array(
			'id'        => 'primary key',
			'client_id' => 'unique',
		);
	}

	public static function clear() {
		global $wpdb;
		$self = ( new static() )->create();
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery
		$wpdb->query(
			$wpdb->prepare(
			// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				"DELETE FROM {$self::table()} WHERE TIMESTAMP(`created_at`) <= TIMESTAMP(%s)",
				current_datetime()->modify( '-4 hours' )->format( 'Y-m-d H:i:s' )
			)
		);
	}


}
