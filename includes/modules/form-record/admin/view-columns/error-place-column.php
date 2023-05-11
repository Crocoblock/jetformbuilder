<?php


namespace Jet_Form_Builder\Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Error_Place_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Error Place', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		return sprintf( '%s:%d', $record['file'], (int) $record['line'] );
	}

}
