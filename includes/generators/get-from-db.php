<?php

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Get_From_DB extends Base {

	/**
	 * Returns generator ID
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_db';
	}

	/**
	 * Returns generator name
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from database', 'jet-form-builder' );
	}

	/**
	 * Returns generated options list
	 *
	 * @param $args
	 *
	 * @return array
	 */
	public function generate( $args ) {

		global $wpdb;

		$result = array();
		$field  = $args['generator_field'];
		$table  = $wpdb->postmeta;

		// phpcs:disable WordPress.DB
		$rows = $wpdb->get_results(
			$wpdb->prepare( "SELECT `meta_value` FROM `$table` WHERE `meta_key` = '%s'", $field ),
			ARRAY_A
		);
		// phpcs:enable WordPress.DB

		if ( empty( $rows ) ) {
			return $result;
		}

		foreach ( $rows as $row ) {
			$result[] = array(
				'value' => $row['meta_value'],
				'label' => $row['meta_value'],
			);
		}

		return $result;
	}

}
