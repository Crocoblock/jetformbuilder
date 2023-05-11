<?php


namespace Jet_Form_Builder\Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Field_Name_Column extends Column_Advanced_Base {

	protected $column = 'field_name';
	protected $type   = 'rawArray';

	public function get_label(): string {
		return __( 'Label & Name', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$name  = parent::get_value( $record );
		$attrs = Tools::decode_json( $record['field_attrs'] ?? '{}' );

		return array(
			'name'  => $name,
			'label' => $attrs['label'] ?? '',
		);
	}
}
