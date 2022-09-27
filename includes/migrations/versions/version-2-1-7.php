<?php


namespace Jet_Form_Builder\Migrations\Versions;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;

/**
 * @since 2.1.7 https://github.com/Crocoblock/issues-tracker/issues/1476
 *
 * Class Version_2_1_7
 * @package Jet_Form_Builder\Migrations\Versions
 */
class Version_2_1_7 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		$records = new Record_View();

		// phpcs:disable WordPress.DB
		$wpdb->query(
			"
ALTER TABLE `{$records->table()}` CHANGE `updated_at` `updated_at` TIMESTAMP NULL DEFAULT NULL
"
		);
		$wpdb->query(
			"
UPDATE `{$records->table()}` SET {$records->column( 'updated_at' )} = NULL
WHERE CAST({$records->column( 'updated_at' )} AS CHAR(20)) = \"0000-00-00 00:00:00\"
"
		);
		$wpdb->query(
			"
ALTER TABLE `{$records->table()}` CHANGE `referrer` `referrer` TEXT NULL DEFAULT NULL
"
		);
	}

	public function down( \wpdb $wpdb ) {
		// phpcs:enable WordPress.DB
	}

}