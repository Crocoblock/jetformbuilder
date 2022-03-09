<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Field_Name_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Field_Type_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Field_Value_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Field_Model;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Columns\Hidden_Primary_Id_Column_Trait;

class Form_Record_Fields_Box extends Base_Table_Box {

	use Hidden_Primary_Id_Column_Trait;

	public function get_title(): string {
		return __( 'Form Fields', 'jet-form-builder' );
	}

	public function get_dependencies(): array {
		return array(
			new Record_Field_Model(),
		);
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
	 * @throws Not_Found_Page_Exception|Empty_Box_Exception
	 */
	public function get_list(): array {
		$request = Record_Fields_View::get_request( $this->get_id() );

		if ( empty( $request ) ) {
			throw new Empty_Box_Exception( 'Empty request' );
		}

		return $request;
	}

}
