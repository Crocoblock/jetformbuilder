<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Form_Action_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Actions;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Admin\Table_Views\Columns\Record_Id_Column;
use Jet_Form_Builder\Admin\Table_Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Form_Record_Actions_Box extends Base_Table_Box {

	public function get_title(): string {
		return __( 'Actions Log', 'jet-form-builder' );
	}

	/**
	 * @return Column_Base[]
	 */
	public function get_columns(): array {
		return array(
			View_Base::COLUMN_CHOOSE => new Record_Id_Column(),
			'action'                 => new Form_Action_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		try {
			return Record_Actions::find(
				array(
					'record_id' => $this->get_id(),
				)
			)->query()->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}
}
