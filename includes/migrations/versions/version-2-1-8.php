<?php


namespace Jet_Form_Builder\Migrations\Versions;

use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Actions;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Errors;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 2.1.8 https://github.com/Crocoblock/issues-tracker/issues/1574
 *
 * Class Version_2_1_8
 * @package Jet_Form_Builder\Migrations\Versions
 */
class Version_2_1_8 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		$actions = new Record_Actions();
		$errors = new Record_Errors();

		$tables = array( $actions, $errors );

		foreach ( $tables as $table ) {
			// phpcs:disable WordPress.DB
			$wpdb->query(
				"
ALTER TABLE `{$table->table()}` CHANGE `updated_at` `updated_at` TIMESTAMP NULL DEFAULT NULL
"
			);
			$wpdb->query(
				"
UPDATE `{$table->table()}` SET {$table->column( 'updated_at' )} = NULL
WHERE CAST({$table->column( 'updated_at' )} AS CHAR(20)) = \"0000-00-00 00:00:00\"
"
			);
		}
	}

	public function down( \wpdb $wpdb ) {
		// phpcs:enable WordPress.DB
	}

}