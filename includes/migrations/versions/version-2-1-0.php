<?php


namespace Jet_Form_Builder\Migrations\Versions;

use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Version_2_1_0 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		$actions = Record_Action_Result_Model::table();

		// phpcs:disable WordPress.DB
		// Check if column already exists before adding it
		$column_exists = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
				WHERE TABLE_SCHEMA = %s 
				AND TABLE_NAME = %s 
				AND COLUMN_NAME = 'on_event'",
				DB_NAME,
				$actions
			)
		);

		if ( empty( $column_exists ) ) {
			$wpdb->query(
				"ALTER TABLE {$actions} ADD on_event VARCHAR(155) NULL DEFAULT 'DEFAULT.PROCESS'"
			);
		}
	}

	public function down( \wpdb $wpdb ) {
		$actions = Record_Action_Result_Model::table();

		$wpdb->query(
			"ALTER TABLE {$actions} DROP COLUMN on_event"
		);
		// phpcs:enable WordPress.DB
	}

}
