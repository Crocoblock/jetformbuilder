<?php


namespace Jet_Form_Builder\Modules\Security\Csrf;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Csrf_Token_Model extends Base_Db_Model {

	private static $deleted = false;

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
			self::PRIMARY_ID => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'client_id'      => 'varchar(155)',
			'token'          => 'text',
			self::CREATED_AT => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
		);
	}

	public function schema_engine() {
		return self::MyISAM;
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

		if ( self::$deleted ) {
			return;
		}

		self::$deleted = true;

		/** @var \DateTimeImmutable $datetime_limit */
		$datetime_limit = apply_filters(
			'jet-form-builder/security/csrf-token/datetime-limit',
			current_datetime()->modify( '-4 hours' )
		);

		$self = ( new static() )->create();

		// phpcs:disable WordPress.DB
		$wpdb->query(
			$wpdb->prepare(
				"
DELETE FROM {$self::table()} 
WHERE 1=1
	AND TIMESTAMP(`created_at`) <= TIMESTAMP(%s)
",
				$datetime_limit->format( 'Y-m-d H:i:s' )
			)
		);
		// phpcs:enable WordPress.DB
	}


}
