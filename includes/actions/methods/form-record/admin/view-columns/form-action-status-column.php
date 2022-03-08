<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Form_Action_Status_Column extends Column_Advanced_Base {

	protected $column = 'status';
	protected $type   = 'icon_status';

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$status = parent::get_value( $record );

		return array(
			'type' => $status,
		);
	}
}
