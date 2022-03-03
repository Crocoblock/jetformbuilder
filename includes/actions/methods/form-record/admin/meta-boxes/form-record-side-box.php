<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;


use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Value_Handlers\Form_Link_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Value_Handlers\User_Login_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;

class Form_Record_Side_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'General Values', 'jet-form-builder' );
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		try {
			return Record_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function get_columns_handlers(): array {
		return array(
			'form_link' => new Form_Link_Column( 'form_id' ),
			'user'      => new User_Login_Column( 'user_id' ),
		);
	}

	public function get_columns_headings(): array {
		return array(
			'form_link' => array()
		);
	}

}