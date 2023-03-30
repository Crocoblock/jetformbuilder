<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Created_At_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Created', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		return mysql2date( 'F j, Y, H:i:s', $record['created_at'] ?? '' );
	}
}
