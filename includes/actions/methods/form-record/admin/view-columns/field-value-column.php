<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Field_Value_Column extends Column_Advanced_Base {

	protected $column = 'field_value';

	public function get_label(): string {
		return __( 'Value', 'jet-form-builder' );
	}
}
