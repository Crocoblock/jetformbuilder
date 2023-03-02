<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Form_Link_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Ip_Address_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Referrer_Link_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\Status_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\User_Agent_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns\User_Login_Column;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
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

class Form_Record_Values_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'General Values', 'jet-form-builder' );
	}

	public function get_dependencies(): array {
		return array(
			new Record_Model(),
		);
	}

	public function get_columns(): array {
		return array(
			'form'       => new Form_Link_Column(),
			'referrer'   => new Referrer_Link_Column(),
			'status'     => new Status_Column(),
			'user'       => new User_Login_Column(),
			'ip_address' => new Ip_Address_Column(),
			'user_agent' => new User_Agent_Column(),
			'created_at' => new Created_At_Column(),
			'updated_at' => new Updated_At_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		try {
			$record = Record_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Not_Found_Page_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		if ( $record['is_viewed'] ) {
			return $record;
		}

		try {
			( new Record_Model() )->update(
				array(
					'is_viewed' => 1,
				),
				array(
					'id' => $record['id'],
				)
			);
			$record['is_viewed'] = 1;
		} catch ( Sql_Exception $exception ) {
			throw new Not_Found_Page_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		return $record;
	}

}
