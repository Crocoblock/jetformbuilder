<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Admin\Table_Views\Columns\Created_At_Column;
use Jet_Form_Builder\Admin\Table_Views\Columns\Updated_At_Column;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Meta_Boxes\Actions\Delete_Payment_Action;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Gateway_Type_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payment_Amount_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payment_Currency_Column;
use Jet_Form_Builder\Gateways\Pages\Payments_Page;
use Jet_Form_Builder\Gateways\Pages\Single_Payment_Page;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;
use Jet_Form_Builder\Gateways\Rest_Api\Receive_Payment;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Payment_Status_Column;

class Payment_Details_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Payment Details', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'amount'     => new Payment_Amount_Column(),
			'code'       => new Payment_Currency_Column(),
			'gateway'    => new Gateway_Type_Column(),
			'status'     => new Payment_Status_Column(),
			'created_at' => new Created_At_Column(),
			'updated_at' => new Updated_At_Column(),
		);
	}

	public function get_actions(): array {
		if ( ! is_a( jet_fb_current_page(), Single_Payment_Page::class ) ) {
			return array();
		}

		return array(
			new Delete_Payment_Action(),
		);
	}

	public function get_rest_url(): string {
		return Receive_Payment::dynamic_rest_url(
			array( 'id' => $this->get_id() )
		);
	}

	public function get_rest_methods(): string {
		return Receive_Payment::get_methods();
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		try {
			return Payment_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Not_Found_Page_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}
}
