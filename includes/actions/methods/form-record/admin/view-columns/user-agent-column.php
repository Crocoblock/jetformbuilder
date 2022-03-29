<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;

class User_Agent_Column extends Column_Advanced_Base {

	protected $column = 'user_agent';

	public function get_label(): string {
		return __( 'User Agent', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$value = parent::get_value( $record );

		if ( $value ) {
			return $value;
		}

		return array(
			'type'          => Column_Base::STATUS_WARNING,
			'help'          => __( 'You can enable saving in the action settings', 'jet-form-builder' ),
			'text'          => __( 'Not recorded', 'jet-form-builder' ),
			'help_position' => 'top-left',
		);
	}

	public function get_type( array $record = array() ): string {
		$value = parent::get_value( $record );

		return $value ? $this->type : Column_Base::STATUS;
	}
}
