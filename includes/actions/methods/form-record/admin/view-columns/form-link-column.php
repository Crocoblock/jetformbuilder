<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Form_Link_Column extends Column_Advanced_Base {

	protected $column = 'form_id';
	protected $type   = 'link';

	public function get_label(): string {
		return __( 'Form', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$form_id = parent::get_value( $record );
		$form    = get_post( $form_id );

		return array(
			'text' => get_the_title( $form ),
			'href' => get_edit_post_link( $form, false ),
		);
	}
}
