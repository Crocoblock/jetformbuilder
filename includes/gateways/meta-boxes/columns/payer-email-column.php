<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payer_Email_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Email', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		return $record['email'] ?? '';
	}

}