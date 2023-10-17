<?php


namespace Jet_Form_Builder\Migrations\Versions;

use JFB_Modules\Form_Record\Models\Record_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Version_3_1_7 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		$records = new Record_Model();

		// phpcs:disable WordPress.DB
		$wpdb->query(
			"
ALTER TABLE `{$records->table()}` CHANGE `user_agent` `user_agent` TEXT NULL DEFAULT NULL
"
		);
	}

	public function down( \wpdb $wpdb ) {
		$records = new Record_Model();

		$wpdb->query(
			"
ALTER TABLE `{$records->table()}` CHANGE `user_agent` `user_agent` VARCHAR(255) NULL DEFAULT NULL
"
		);
		// phpcs:enable WordPress.DB
	}

}
