<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Blocks\Block_Helper;

class Field_Type_Column extends Column_Advanced_Base {

	protected $type   = 'rawArray';
	protected $column = 'field_type';

	public function get_label(): string {
		return __( 'Field Type', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$type = parent::get_value( $record );

		$block = \WP_Block_Type_Registry::get_instance()->get_registered(
			Block_Helper::pref( $type )
		);

		return array(
			'title' => $block->title,
			'icon'  => $block->icon,
		);
	}
}
