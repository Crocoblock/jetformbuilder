<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Form_Action_Status_Column extends Column_Advanced_Base {

	protected $column = 'status';
	protected $type   = 'icon_status';

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}

	protected function get_help_labels(): array {
		return array(
			'success' => __( 'The action was completed successfully', 'jet-form-builder' ),
			'warning' => __( 'The action was skipped because the condition did not met', 'jet-form-builder' ),
			'failed'  => __( 'An error occurred while executing the action', 'jet-form-builder' ),
		);
	}

	public function get_value( array $record = array() ) {
		$status      = parent::get_value( $record );
		$help_labels = $this->get_help_labels();

		if ( 'skipped' === $status ) {
			$status = 'warning';
		}

		return array(
			'type' => $status,
			'help' => $help_labels[ $status ] ?? '',
		);
	}
}
