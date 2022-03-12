<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Table_Views;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Classes_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Form_Link_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Header_Actions_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Primary_Form_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Referrer_Link_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Row_Actions_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Status_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\User_Login_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Fetch_Filters_Endpoint;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Fetch_Records_Page_Endpoint;
use Jet_Form_Builder\Admin\Table_Views\Columns\Record_Id_Column_Advanced;
use Jet_Form_Builder\Admin\Table_Views\View_Advanced_Base;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Records_Table_View extends View_Advanced_Base {

	public function get_columns(): array {
		return array(
			self::COLUMN_CHOOSE  => new Record_Id_Column_Advanced(),
			self::COLUMN_ACTIONS => new Row_Actions_Column(),
			self::COLUMN_CLASSES => new Classes_Column(),
			'form'               => new Primary_Form_Column(),
			'referrer'           => new Referrer_Link_Column(),
			'status'             => new Status_Column(),
			'user'               => new User_Login_Column(),
			'id'                 => new Record_Id_Column_Advanced(),
		);
	}

	/**
	 * @return Base_Db_Model[]
	 */
	public function get_dependencies(): array {
		return array(
			new Models\Record_Action_Result_Model(),
			new Models\Record_Error_Model(),
			new Models\Record_Field_Model(),
		);
	}

	public function get_raw_list( array $args ): array {
		try {
			return ( new Record_View() )
				->set_table_args( $args )
				->query()
				->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function get_global_actions(): array {
		return ( new Header_Actions_Column() )->get_value();
	}

	public function load_data(): array {
		return array(
			'receive_url'      => array(
				'url'     => Fetch_Records_Page_Endpoint::rest_url(),
				'methods' => Fetch_Records_Page_Endpoint::get_methods(),
			),
			'total'            => Record_View_Count::count(),
			'filters_endpoint' => array(
				'methods' => Fetch_Filters_Endpoint::get_methods(),
				'url'     => Fetch_Filters_Endpoint::rest_url(),
			),
			'messages'         => array(
				'filter_form'       => __( 'Select Form', 'jet-form-builder' ),
				'filter_form_title' => __( 'Filter by Form', 'jet-form-builder' ),
				'empty_checked'     => __( 'You have not selected any record.', 'jet-form-builder' ),
				'empty_action'      => __( 'You have not selected an action.', 'jet-form-builder' ),
			),
		);
	}
}
