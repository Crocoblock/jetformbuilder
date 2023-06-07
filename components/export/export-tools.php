<?php


namespace JFB_Components\Export;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Export_Tools {

	/**
	 * @return Base_Export_It|Table_Entries_Export_It
	 */
	public static function get_exporter_by_format(): Base_Export_It {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$exporter = self::get_exporter( sanitize_key( $_GET['format'] ?? 'csv' ) );

		return $exporter ?: self::get_exporter( 'csv' );
	}

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
