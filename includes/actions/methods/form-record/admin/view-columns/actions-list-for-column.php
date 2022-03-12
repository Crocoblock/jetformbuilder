<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;


use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions\Delete_Record_Action;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions\Mark_Not_Viewed_Action;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions\Mark_Viewed_Action;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions\View_Action;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions\View_Related_Form;

trait Actions_List_For_Column {

	protected function get_actions(): array {
		return array(
			new View_Action(),
			new Mark_Viewed_Action(),
			new Mark_Not_Viewed_Action(),
			new View_Related_Form(),
			new Delete_Record_Action(),
		);
	}

}