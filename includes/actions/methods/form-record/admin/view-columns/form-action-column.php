<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class Form_Action_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Action', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$format = '%s (%d)';
		try {
			$action = jet_form_builder()->actions->get_action( $record['action_slug'] ?? '' );
		} catch ( Repository_Exception $exception ) {
			return sprintf( $format, 'Undefined', 0 );
		}

		return sprintf( $format, $action->get_name(), $record['action_id'] ?? 0 );
	}
}
