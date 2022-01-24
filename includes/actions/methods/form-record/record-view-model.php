<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

class Record_View_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'records_views';
	}

	public static function schema(): array {
		return array(
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'user_id'    => 'bigint(20) NOT NULL',
			'record_id'  => 'bigint(20) NOT NULL',
			'count'      => 'int(11) NOT NULL',
			'created_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at' => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL'
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'        => 'primary key',
			'record_id' => 'index',
			'user_id'   => 'index',
		);
	}
}