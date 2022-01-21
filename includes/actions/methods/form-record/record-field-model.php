<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Record_Field_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'record_fields';
	}

	public static function schema(): array {
		return array(
			'id'          => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'record_id'   => 'bigint(20)',
			'status'      => 'varchar(20)',
			'field_name'  => 'varchar(100)',
			'field_value' => 'longtext',
			'field_type'  => 'varchar(40)'
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'      => 'primary key',
			'form_id' => 'index',
			'user_id' => 'index',
		);
	}

}