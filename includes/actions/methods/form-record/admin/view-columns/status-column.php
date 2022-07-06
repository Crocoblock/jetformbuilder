<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Form_Messages\Status_Info;

class Status_Column extends Column_Advanced_Base {

	protected $type   = self::STATUS;
	protected $column = 'status';

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$status = parent::get_value( $record );
		$status = empty( $status ) ? 'failed' : $status;

		$info = new Status_Info( $status );

		return array(
			'type' => $info->is_success() ? self::STATUS_SUCCESS : self::STATUS_FAILED,
			'text' => $info->get_message(),
		);
	}

}
