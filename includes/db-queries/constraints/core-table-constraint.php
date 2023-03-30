<?php


namespace Jet_Form_Builder\Db_Queries\Constraints;

use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Db_Queries\Query_Cache_Builder;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Core_Table_Constraint extends Base_Db_Constraint {

	/**
	 * @throws Skip_Exception
	 */
	public function before_create() {
		global $wpdb;

		$table  = $this->get_table();
		$cached = wp_cache_get( "status_table_{$table}", Query_Cache_Builder::CACHE_GROUP );

		if ( $cached && ! $this->is_inno_db( $cached ) ) {
			throw new Skip_Exception();
		}

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
		$status = $wpdb->get_row(
			$wpdb->prepare( 'SHOW TABLE STATUS WHERE Name = %s', $this->get_table() ),
			ARRAY_A
		);

		wp_cache_set( "status_table_{$table}", $status, Query_Cache_Builder::CACHE_GROUP );

		if ( ! $this->is_inno_db( $status ) ) {
			throw new Skip_Exception();
		}
	}

	private function is_inno_db( array $table_status ): bool {
		return Base_Db_Model::InnoDB === ( $table_status['Engine'] ?? '' );
	}

}
