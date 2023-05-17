<?php


namespace JFB_Modules\Form_Record\Admin\Meta_Boxes;

use JFB_Modules\Form_Record\Admin\View_Columns\Action_Event_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Form_Action_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Form_Action_Status_Column;
use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;
use JFB_Modules\Form_Record\Query_Views\Record_Actions;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Admin\Table_Views\Columns\Created_At_Column;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Record_Actions_Box extends Base_Table_Box {

	protected $show_overflow = true;

	public function get_title(): string {
		return __( 'Actions Log', 'jet-form-builder' );
	}

	public function get_dependencies(): array {
		return array(
			new Record_Action_Result_Model(),
		);
	}

	/**
	 * @return Column_Base[]
	 */
	public function get_columns(): array {
		return array(
			'action'     => new Form_Action_Column(),
			'status'     => new Form_Action_Status_Column(),
			'event'      => new Action_Event_Column(),
			'created_at' => new Created_At_Column(),
		);
	}

	/**
	 * @param array $args
	 *
	 * @return array
	 * @throws Empty_Box_Exception
	 */
	public function get_raw_list( array $args ): array {
		try {
			return Record_Actions::find(
				array( 'record_id' => $this->get_id() )
			)->set_table_args( $args )
			->query()
			->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}
}
