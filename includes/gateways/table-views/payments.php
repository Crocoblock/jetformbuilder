<?php


namespace Jet_Form_Builder\Gateways\Table_Views;

use Jet_FB_Paypal\PreparedViews;
use Jet_Form_Builder\Admin\Pages;
use Jet_Form_Builder\Classes\Table_View_Base;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_FB_Paypal\RestEndpoints;
use Jet_FB_Paypal\RestEndpoints\ActionRefundRecurringPayment as RefundAction;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;

class Payments extends Table_View_Base {

	public static function rep_item_id() {
		return 'SUBSCRIBE_NOW_PAYMENTS';
	}

	public function get_list(): array {
		return $this->get_raw_payments( 0, 15 );
	}

	public function get_raw_payments( $offset, $limit ): array {
		try {
			return ( new Query_Builder() )
				->set_view(
					( new Payment_View )
						->set_limit( array( $offset, $limit ) )
				)
				->debug()
				->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function load_data(): array {
		return array(
			'receive_url' => array(
				'method' => RestEndpoints\ReceivePayments::get_methods(),
				'url'    => RestEndpoints\ReceivePayments::rest_url(),
			),
			'total'       => PreparedViews::count_payments()
		);
	}

	public function get_columns_handlers(): array {
		return array(
			'id'       => array(
				'value' => array( $this, 'get_payment_id' ),
				'type'  => 'integer',
			),
			'type'     => array(
				'value' => array( $this, 'get_payment_type' ),
			),
			'date'     => array(
				'value' => array( $this, 'get_payment_date' ),
			),
			'gross'    => array(
				'value' => array( $this, 'get_gross' ),
			),
			'payer'    => array(
				'value' => array( $this, 'get_payer' ),
				'type'  => 'rawArray',
			),
			'_FORM_ID' => array(
				'value' => array( $this, 'get_form_id' ),
				'type'  => 'integer',
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			'date'   => array(
				'label' => __( 'Date', 'jet-form-builder' ),
			),
			'status' => array(
				'label' => __( 'Type', 'jet-form-builder' ),
			),
			'payer'  => array(
				'label' => __( 'Payer', 'jet-form-builder' ),
			),
			'gross'  => array(
				'label' => __( 'Gross', 'jet-form-builder' ),
			)
		);
	}

	public function get_payment_id( $record ) {
		return $record['transaction_id'] ?? '';
	}

	public function get_payment_type( $record ) {
		return $record['type'] ?? '';
	}

	public function get_payer( $record ) {
		$name = $record['ship']['full_name'] ?? '';

		if ( empty( $name ) ) {
			$name = implode( ' ', array(
				$record['payer']['first_name'] ?? '',
				$record['payer']['last_name'] ?? ''
			) );
		}

		return array(
			'email_address' => $record['payer']['email'] ?? '',
			'full_name'     => empty( $name ) ? 'unknown' : $name
		);
	}

	public function get_payment_date( $record ) {
		return mysql2date( 'F j, Y, H:i', $record['created_at'] );
	}

	public function get_form_id( $record ) {
		return $record['form_id'] ?? 0;
	}

	public function get_gross_sign( $record ) {
		return '+';
	}

	public function get_gross( $record ) {
		$value = number_format( $record['amount_value'] ?? 0, 2 );

		return sprintf(
			'%s %s %s',
			$this->get_gross_sign( $record ),
			$value,
			$record['amount_code'] ?? ''
		);
	}

}

