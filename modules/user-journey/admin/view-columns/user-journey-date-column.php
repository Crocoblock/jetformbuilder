<?php


namespace JFB_Modules\User_Journey\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Date_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Date', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$timestamp = $record['timestamp'] ?? 0;

		if ( $timestamp ) {
			$timestamp = ( int )( $timestamp / 1000 );
			$timezone  = new \DateTimeZone( wp_timezone_string() );
			$date      = new \DateTime();

			$date->setTimestamp( $timestamp );
			$date->setTimezone( $timezone );

			$date_format = get_option( 'date_format' );
			$time_format = get_option( 'time_format' );

			$datetime_format = $date_format . ' ' . $time_format;

			return $date->format( $datetime_format );
		}

		return '';
	}
}
