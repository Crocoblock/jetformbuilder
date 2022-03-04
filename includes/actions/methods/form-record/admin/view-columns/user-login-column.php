<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class User_Login_Column extends Column_Advanced_Base {

	protected $column = 'user_id';

	public function get_label(): string {
		return __( 'Submitted By', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$id   = parent::get_value( $record );
		$user = get_user_by( 'ID', $id );

		return $user->user_login ?? 'Guest';
	}

}
