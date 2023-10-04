<?php


namespace JFB_Modules\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use JFB_Modules\Form_Record\Admin\View_Columns\Export_Csv_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Form_Link_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Ip_Address_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Print_Pdf_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Referrer_Link_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Status_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\User_Agent_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\User_Login_Column;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Table_Views\Columns\Created_At_Column;
use Jet_Form_Builder\Admin\Table_Views\Columns\Updated_At_Column;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Record_Inline_Actions_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Actions', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'export_csv' => new Export_Csv_Column(),
			'print_pdf'  => new Print_Pdf_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		try {
			return Record_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Not_Found_Page_Exception(
				esc_html( $exception->getMessage() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				...$exception->get_additional()
			);
		}
	}

}
