<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages\Single_Form_Record_Page;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Classes\Post\Post_Tools;

class Primary_Form_Column extends Column_Advanced_Base {

	protected $column = 'form_id';
	protected $type   = 'link';

	public function get_label(): string {
		return __( 'Form', 'jet-form-builder' );
	}

	/**
	 * @param array $record
	 *
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_value( array $record = array() ) {
		$form_id = parent::get_value( $record );
		$single  = ( new Single_Form_Record_Page() )->set_id( $record['id'] ?? 0 );

		return array(
			'text'  => Post_Tools::get_title( $form_id ),
			'href'  => $single->get_url(),
			'title' => __( 'View Record', 'jet-form-builder' ),
		);
	}
}
