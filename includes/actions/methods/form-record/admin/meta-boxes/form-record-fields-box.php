<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Field_Name_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Field_Type_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Field_Value_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;

class Form_Record_Fields_Box extends Base_Table_Box {

	public function get_title(): string {
		return __( 'Form Fields', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'name'       => new Field_Name_Column(),
			'value'      => new Field_Value_Column(),
			'field_type' => new Field_Type_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		return Record_Fields_View::get_request( $this->get_id() );
	}

}
