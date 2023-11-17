<?php

namespace JFB_Modules\Webhook\Db\Models;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use JFB_Modules\Webhook\Db\Constraints\Tokens_Model_Constraint;
use JFB_Modules\Form_Record\Constraints\Record_Model_Constraint;

class Tokens_To_Records_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'tokens_to_records';
	}

	public static function schema(): array {
		return array(
			'token_id'  => 'bigint(20) NOT NULL',
			'record_id' => 'bigint(20) NOT NULL',
		);
	}

	public static function schema_keys(): array {
		return array(
			'token_id'  => 'index',
			'record_id' => 'index',
		);
	}

	public function foreign_relations(): array {
		return array(
			new Tokens_Model_Constraint(),
			new Record_Model_Constraint(),
		);
	}

}
