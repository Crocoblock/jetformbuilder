<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Classes\Tools;

class Error_Data_Column extends Column_Advanced_Base {

	protected $column = 'data';
	protected $type   = self::PRE;

	public function get_label(): string {
		return __( 'Data', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$value = parent::get_value( $record );

		return is_scalar( $value ) ? $value : Tools::encode_json( $value );
	}

}
