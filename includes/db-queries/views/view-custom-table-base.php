<?php


namespace Jet_Form_Builder\Db_Queries\Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class View_Base_Custom_Table extends View_Base {

	abstract public function table_name(): string;

	/**
	 * @return string
	 */
	public function table_prefix(): string {
		global $wpdb;

		return $wpdb->prefix;
	}

	public function table(): string {
		return $this->table_prefix() . $this->table_name();
	}

}
