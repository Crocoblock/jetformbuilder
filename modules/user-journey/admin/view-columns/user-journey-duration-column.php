<?php


namespace JFB_Modules\User_Journey\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Duration_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Duration', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		if ( isset( $record['is_separator'] ) && $record['is_separator'] ) {
			return '';
		}

		$duration = $record['duration'] ?? 0;

		if ( $duration ) {
			return $this->format_duration( $duration );
		}

		return '0 sec';
	}

	private function format_duration( $seconds ) {
		$days    = floor( $seconds / 86400 );
		$hours   = floor( ( $seconds % 86400 ) / 3600 );
		$minutes = floor( ( $seconds % 3600 ) / 60 );
		$seconds = $seconds % 60;

		$parts = array();

		if ( 0 < $days ) {
			$parts[] = $days . ' day' . ( 1 < $days ? 's' : '' );
		}
		if ( 0 < $hours ) {
			$parts[] = $hours . ' hour' . ( 1 < $hours ? 's' : '' );
		}
		if ( 0 < $minutes ) {
			$parts[] = $minutes . ' min' . ( 1 < $minutes ? 's' : '' );
		}
		if ( 0 < $seconds || empty( $parts ) ) {
			$parts[] = $seconds . ' sec' . ( 1 < $seconds ? 's' : '' );
		}

		return implode( ' ', $parts );
	}
}
