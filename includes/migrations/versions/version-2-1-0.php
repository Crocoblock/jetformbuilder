<?php


namespace Jet_Form_Builder\Migrations\Versions;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Action_Result_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Version_2_1_0 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		$actions = Record_Action_Result_Model::table();

		// phpcs:disable WordPress.DB
		$wpdb->query(
			"ALTER TABLE {$actions} ADD on_event VARCHAR(155) NULL DEFAULT 'DEFAULT.PROCESS'"
		);
	}

	public function down( \wpdb $wpdb ) {
		$actions = Record_Action_Result_Model::table();

		$wpdb->query(
			"ALTER TABLE {$actions} DROP COLUMN on_event"
		);
		// phpcs:enable WordPress.DB
	}

}