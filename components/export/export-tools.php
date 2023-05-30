<?php


namespace JFB_Components\Export;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Export_Tools {

	/**
	 * @param string $format
	 *
	 * @return false|Base_Export_It
	 */
	public static function get_exporter( string $format ) {
		$formats = apply_filters(
			'jet-form-builder/export/formats',
			array(
				'csv' => new Csv\Service(),
			)
		);

		return array_key_exists( $format, $formats ) ? $formats[ $format ] : false;
	}

}