<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Models;

use Jet_Form_Builder\Actions\Methods\Form_Record\Constraints\Record_Model_Constraint;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_8;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_Error_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'records_errors';
	}

	public static function schema(): array {
		return array(
			'id'           => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'record_id'    => 'bigint(20) NOT NULL',
			'name'         => 'varchar(100)',
			'message'      => 'varchar(255)',
			'file'         => 'varchar(255)',
			'line'         => 'int(11)',
			'trace_string' => 'longtext',
			'data'         => 'longtext',
			'created_at'   => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'   => 'TIMESTAMP',
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'        => 'primary key',
			'record_id' => 'index',
		);
	}

	public function foreign_relations(): array {
		return array(
			new Record_Model_Constraint(),
		);
	}

	public function related_migrations(): array {
		return array(
			new Version_2_1_8(),
		);
	}
}
