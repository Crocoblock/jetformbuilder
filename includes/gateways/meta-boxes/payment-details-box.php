<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Admin\Table_Views\Columns\Created_At_Column;
use Jet_Form_Builder\Admin\Table_Views\Columns\Updated_At_Column;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payment_Amount_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payment_Currency_Column;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;

class Payment_Details_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Payment Details', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'amount'     => new Payment_Amount_Column(),
			'code'       => new Payment_Currency_Column(),
			'created_at' => new Created_At_Column(),
			'updated_at' => new Updated_At_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception|Empty_Box_Exception
	 */
	public function get_list(): array {
		try {
			return Payment_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}
}
