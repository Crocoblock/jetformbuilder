<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Field_Model;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Db_Queries\Views\View_Base_Count_Trait;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Record_Fields_View_Count extends Record_Fields_View {

	use View_Base_Count_Trait;

}
