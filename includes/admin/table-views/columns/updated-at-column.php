<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Updated_At_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Updated', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$date = $record['updated_at'] ?? '';

		if ( '0000-00-00 00:00:00' === $date ) {
			return $date;
		}

		return mysql2date( 'F j, Y, H:i:s', $date );
	}
}