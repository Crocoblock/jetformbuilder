<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class State_Column extends Column_Advanced_Base {

	protected $column = 'admin_area_1';

	public function get_label(): string {
		return __( 'State / Province', 'jet-form-builder' );
	}

}