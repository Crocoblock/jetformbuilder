<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Models;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_7;

class Record_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'records';
	}

	/**
	 * @since 2.1.7 https://github.com/Crocoblock/issues-tracker/issues/1476
	 *
	 * @return string[]
	 */
	public static function schema(): array {
		return array(
			'id'                => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'form_id'           => 'bigint(20) UNSIGNED NOT NULL',
			'user_id'           => 'bigint(20)',
			'from_content_id'   => 'bigint(20) NOT NULL',
			'from_content_type' => 'varchar(20) NOT NULL',
			'status'            => 'varchar(255)',
			'ip_address'        => 'varchar(255)',
			'user_agent'        => 'varchar(255)',
			'referrer'          => 'text',
			'submit_type'       => 'varchar(20)',
			'is_viewed'         => 'tinyint(1)',
			'created_at'        => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'        => 'TIMESTAMP',
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'      => 'primary key',
			'form_id' => 'index',
			'user_id' => 'index',
		);
	}

	public function related_migrations(): array {
		return array(
			new Version_2_1_7(),
		);
	}

}
