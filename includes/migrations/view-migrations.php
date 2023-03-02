<?php


namespace Jet_Form_Builder\Migrations;

use Jet_Form_Builder\Db_Queries\Views\View_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class View_Migrations extends View_Base {

	/**
	 * @return string
	 */
	public function table(): string {
		return Migration_Model::table();
	}

	public function select_columns(): array {
		return Migration_Model::schema_columns();
	}

	public function get_dependencies(): array {
		return array(
			new Migration_Model(),
		);
	}
}