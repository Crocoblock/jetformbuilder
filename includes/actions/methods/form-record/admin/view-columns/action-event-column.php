<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Action_Event_Column extends Column_Advanced_Base {

	protected $column = 'on_event';

	/**
	 * @return string
	 */
	public function get_label(): string {
		return __( 'Executed on event', 'jet-form-builder' );
	}
}