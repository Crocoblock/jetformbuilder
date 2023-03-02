<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Utils {

	public static function get_empty_status(): array {
		return array(
			'type'          => Column_Base::STATUS_WARNING,
			'help'          => __( 'This data is not stored now. You can enable data storing in the Action\'s settings', 'jet-form-builder' ),
			'text'          => __( 'Is not stored', 'jet-form-builder' ),
			'help_position' => 'top-left',
		);
	}
}