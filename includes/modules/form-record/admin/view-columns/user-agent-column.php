<?php


namespace Jet_Form_Builder\Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

		return Utils::get_empty_status();
	}

	public function get_type( array $record = array() ): string {
		$value = parent::get_value( $record );

		return $value ? $this->type : Column_Base::STATUS;
	}
}
