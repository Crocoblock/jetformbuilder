<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Models;

use Jet_Form_Builder\Actions\Methods\Form_Record\Constraints\Record_Model_Constraint;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_0;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_8;

class Record_Action_Result_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'records_actions';
	}

	public static function schema(): array {
		return array(
			'id'          => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'record_id'   => 'bigint(20) NOT NULL',
			'action_slug' => 'varchar(255) NOT NULL',
			'action_id'   => 'int(11) NOT NULL',
			'on_event'    => 'varchar(155) NULL DEFAULT \'DEFAULT.PROCESS\'',
			'status'      => 'varchar(255) NOT NULL',
			'created_at'  => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'  => 'TIMESTAMP',
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
			new Version_2_1_0(),
			new Version_2_1_8(),
		);
	}
}
