<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;


use Jet_Form_Builder\Admin\Table_Views\Actions\View_Single_Action;
use Jet_Form_Builder\Gateways\Table_Views\Actions\View_Action;

trait Actions_List_For_Column {

	/**
	 * @return View_Single_Action[]
	 */
	protected function get_actions(): array {
		return array(
			new View_Action(),
		);
	}

}