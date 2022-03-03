<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Status_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}

	protected function get_value( array $record ) {
		$status = parent::get_value( $record );

		return empty( $status ) ? 'failed' : $status;
	}

}
