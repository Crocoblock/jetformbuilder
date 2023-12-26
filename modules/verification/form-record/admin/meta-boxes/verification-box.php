<?php


namespace JFB_Modules\Verification\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;
use JFB_Modules\Webhook\Form_Record\Db\Views\Token_By_Record_View;
use JFB_Modules\Verification\Form_Record\Admin\Columns\Expire_At_Column;
use JFB_Modules\Verification\Form_Record\Admin\Columns\Status_Column;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Verification_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Verification', 'jet-form-builder' );
	}

	public function get_dependencies(): array {
		return array(
			new Tokens_To_Records_Model(),
		);
	}

	/**
	 * @return Column_Base[]
	 */
	public function get_columns(): array {
		return array(
			'status' => new Status_Column(),
			'date'   => new Expire_At_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Empty_Box_Exception
	 */
	public function get_list(): array {
		try {
			return Token_By_Record_View::findOne(
				array( 'record_id' => $this->get_id() )
			)->query()->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception(
				esc_html( $exception->getMessage() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				...$exception->get_additional()
			);
		}
	}
}
