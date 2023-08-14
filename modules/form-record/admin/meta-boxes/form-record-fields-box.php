<?php


namespace JFB_Modules\Form_Record\Admin\Meta_Boxes;

use JFB_Modules\Form_Record\Admin\View_Columns\Field_Name_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Field_Type_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Field_Value_Column;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View_Count;
use JFB_Modules\Form_Record\Rest_Endpoints\Fetch_Records_Fields_Box_Endpoint;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Columns\Hidden_Primary_Id_Column_Trait;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Record_Fields_Box extends Base_Table_Box {

	protected $show_overflow = true;

	use Hidden_Primary_Id_Column_Trait;

	public function get_title(): string {
		return __( 'Form Fields', 'jet-form-builder' );
	}

	public function get_dependencies(): array {
		return array(
			new Record_Field_Model(),
		);
	}

	public function get_total(): int {
		return Record_Fields_View_Count::count(
			array(
				'record_id' => $this->get_id(),
			)
		);
	}

	public function get_rest_url(): string {
		return Fetch_Records_Fields_Box_Endpoint::dynamic_rest_url(
			array(
				'id' => $this->get_id(),
			)
		);
	}

	public function get_rest_methods(): string {
		return Fetch_Records_Fields_Box_Endpoint::get_methods();
	}

	public function get_columns(): array {
		return array(
			'name'       => new Field_Name_Column(),
			'value'      => new Field_Value_Column(),
			'field_type' => new Field_Type_Column(),
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
			return Record_Fields_View::find(
				array( 'record_id' => $this->get_id() )
			)->set_table_args( $args )
			->query()
			->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception(
				esc_html( $exception->getMessage() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				...$exception->get_additional()
			);
		}
	}

}
