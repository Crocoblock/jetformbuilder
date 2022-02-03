<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Models;


use Jet_Form_Builder\Actions\Methods\Form_Record\Constraints\Record_Model_Constraint;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Record_Field_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'records_fields';
	}

	public static function schema(): array {
		return array(
			'id'          => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'record_id'   => 'bigint(20) NOT NULL',
			'field_name'  => 'varchar(100) NOT NULL',
			'field_value' => 'longtext',
			'field_type'  => 'varchar(40) NOT NULL'
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
			new Record_Model_Constraint()
		);
	}

}