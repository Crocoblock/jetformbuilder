<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Error_Data_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Error_Message_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Error_Place_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Exception_Name_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Errors;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Columns\Record_Id_Column_Advanced;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Form_Record_Errors_Box extends Base_Table_Box {

	public function get_title(): string {
		return __( 'Record Errors', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'name'    => new Exception_Name_Column(),
			'message' => new Error_Message_Column(),
			'place'   => new Error_Place_Column(),
			'data'    => new Error_Data_Column(),
			'id'      => new Record_Id_Column_Advanced(),
		);
	}

	/**
	 * @param array $args
	 *
	 * @return array
	 * @throws Not_Found_Page_Exception|Empty_Box_Exception
	 */
	public function get_raw_list( array $args ): array {
		try {
			return Record_Errors::find(
				array( 'record_id' => $this->get_id() )
			)->set_table_args( $args )
			->query()
			->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}
}
