<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Query_Views;


use Jet_Form_Builder\Blocks\Conditional_Block\Models\Render_State_Model;
use Jet_Form_Builder\Db_Queries\Views\View_Base;

class Render_States_View extends View_Base {

	/**
	 * @return string
	 */
	public function table(): string {
		return Render_State_Model::table();
	}

	public function select_columns(): array {
		return Render_State_Model::schema_columns();
	}

	public function get_dependencies(): array {
		return array(
			new Render_State_Model(),
		);
	}
}