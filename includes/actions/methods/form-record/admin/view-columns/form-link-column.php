<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Classes\Post\Post_Tools;

class Form_Link_Column extends Column_Advanced_Base {

	protected $column = 'form_id';
	protected $type   = self::LINK;

	public function get_label(): string {
		return __( 'Form', 'jet-form-builder' );
	}

	/**
	 * @param array $record
	 *
	 * @return array
	 */
	public function get_value( array $record = array() ) {
		$form_id = parent::get_value( $record );
		$form    = get_post( $form_id );

		return array(
			'text'  => Post_Tools::get_title( $form ),
			'href'  => get_edit_post_link( $form, false ),
			'title' => __( 'Edit form', 'jet-form-builder' ),
			'type'  => 'edit',
		);
	}
}
