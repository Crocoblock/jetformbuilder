<?php


namespace JFB_Modules\Form_Record\Admin\Meta_Boxes;

use JFB_Modules\Form_Record\Admin\View_Columns\Field_Name_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Field_Type_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Field_Value_Column;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View_Count;
use JFB_Modules\Form_Record\Rest_Endpoints\Fetch_Records_Fields_Box_Endpoint;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Columns\Hidden_Primary_Id_Column_Trait;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Record_Print_Fields_Box extends Form_Record_Fields_Box {

	public function get_columns(): array {
		return array(
			'name'  => new Field_Name_Column(),
			'value' => new Field_Value_Column(),
		);
	}

}
