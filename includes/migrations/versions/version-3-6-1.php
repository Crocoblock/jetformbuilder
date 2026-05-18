<?php


namespace Jet_Form_Builder\Migrations\Versions;

use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Version_3_6_1 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		$actions = Record_Action_Result_Model::table();

		// phpcs:disable WordPress.DB
		$table_exists = $wpdb->get_var(
			$wpdb->prepare( 'SHOW TABLES LIKE %s', $actions )
		);

		if ( $actions !== $table_exists ) {
			return;
		}

		$column_exists = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
				WHERE TABLE_SCHEMA = %s
				AND TABLE_NAME = %s
				AND COLUMN_NAME = 'action_name'",
				DB_NAME,
				$actions
			)
		);

		if ( empty( $column_exists ) ) {
			$wpdb->query(
				"ALTER TABLE {$actions} ADD action_name varchar(255) NULL DEFAULT NULL AFTER action_id"
			);
		}
		// phpcs:enable WordPress.DB
	}

	public function down( \wpdb $wpdb ) {
		$actions = Record_Action_Result_Model::table();

		// phpcs:disable WordPress.DB
		$table_exists = $wpdb->get_var(
			$wpdb->prepare( 'SHOW TABLES LIKE %s', $actions )
		);

		if ( $actions !== $table_exists ) {
			return;
		}

		$wpdb->query(
			"ALTER TABLE {$actions} DROP COLUMN action_name"
		);
		// phpcs:enable WordPress.DB
	}
}
