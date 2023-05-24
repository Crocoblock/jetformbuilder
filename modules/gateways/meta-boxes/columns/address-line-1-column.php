<?php


namespace JFB_Modules\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Address_Line_1_Column extends Column_Advanced_Base {

	protected $column = 'address_line_1';

	public function get_label(): string {
		return __( 'Street Address Line 1', 'jet-form-builder' );
	}

}
