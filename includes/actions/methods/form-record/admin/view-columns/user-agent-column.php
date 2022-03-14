<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class User_Agent_Column extends Column_Advanced_Base {

	protected $column = 'user_agent';

	public function get_label(): string {
		return __( 'User Agent', 'jet-form-builder' );
	}
}
