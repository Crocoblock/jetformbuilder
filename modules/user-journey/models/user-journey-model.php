<?php

namespace JFB_Modules\User_Journey\Models;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'user_journey';
	}

	public static function schema(): array {
		return array(
			'id'            => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'record_id'     => 'bigint(20) UNSIGNED NOT NULL',
			'journey_step'  => 'int(11) NOT NULL',
			'journey_url'   => 'text NOT NULL',
			'journey_query' => 'text',
			'timestamp'     => 'bigint(20) NOT NULL',
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'        => 'primary key',
			'record_id' => 'index',
		);
	}

	public function related_migrations(): array {
		return array();
	}

}
