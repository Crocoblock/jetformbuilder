<?php


namespace Jet_Form_Builder\Gateways\Table_Views;

use Jet_Form_Builder\Admin\Table_Views\Columns\Record_Id_Column_Advanced;
use Jet_Form_Builder\Admin\Table_Views\View_Advanced_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payment_To_Payer_Shipping_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_To_Record;
use Jet_Form_Builder\Gateways\Query_Views\Payment_Count_View;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;
use Jet_Form_Builder\Gateways\Paypal\Rest_Endpoints;
use Jet_Form_Builder\Admin\Table_Views\Columns\Created_At_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Gross_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Header_Actions_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Payer_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Payment_Status_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Payment_Type_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Row_Actions_Column;
use Jet_Form_Builder\Gateways\Table_Views\Columns\Transaction_Column;

class Payments extends View_Advanced_Base {

	public function get_raw_list( array $args ): array {
		try {
			return ( new Payment_View() )
				->set_table_args( $args )
				->query()
				->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function get_dependencies(): array {
		return array(
			new Payment_To_Payer_Shipping_Model(),
			new Payment_To_Record(),
		);
	}

	public function get_receive_endpoint(): array {
		return array(
			'method' => Rest_Endpoints\Receive_Payments::get_methods(),
			'url'    => Rest_Endpoints\Receive_Payments::rest_url(),
		);
	}

	public function get_total(): int {
		return Payment_Count_View::count();
	}

	public function get_empty_message(): string {
		return __( 'No payments found.', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'type'           => new Payment_Type_Column(),
			'date'           => new Created_At_Column(),
			'payment_status' => new Payment_Status_Column(),
			'gross'          => new Gross_Column(),
			'payer'          => new Payer_Column(),
			'id'             => new Record_Id_Column_Advanced(),
		);
	}

}

