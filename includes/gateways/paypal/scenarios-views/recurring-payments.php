<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

use Jet_Form_Builder\Admin\Pages;
use Jet_Form_Builder\Classes\Table_View_Base;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Action_Refund_Recurring_Payment as RefundAction;

class Recurring_Payments extends Table_View_Base {

	private $raw_payments;
	private $queried_related;

	public static function rep_item_id() {
		return 'SUBSCRIBE_NOW_PAYMENTS';
	}

	public function get_list(): array {
		try {

			$this->raw_payments = ( new Query_Builder() )
				->set_view(
					( new Paypal\Query_Views\Recurring_Payments_View() )
						->set_limit( array( 25 ) )
				)
				->debug()
				->query_all();

			$this->set_related();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}

		return $this->raw_payments;
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	private function set_related() {
		$related_ids = array();

		foreach ( $this->raw_payments as $payment ) {
			$related_ids[ $payment['resource']['id'] ] = $this->get_related_id( $payment );
		}

		$subscriptions = Paypal\Prepared_Views::get_subscriptions_raw_by_id( $related_ids );
		$view          = new Paypal\Scenarios_Views\Subscribe_Now();

		foreach ( $this->raw_payments as &$payment ) {
			$subscription_id = $related_ids[ $payment['resource']['id'] ];

			foreach ( $subscriptions as $subscription ) {
				if ( $subscription['resource']['id'] !== $subscription_id ) {
					continue;
				}
				$payment['related_object'] = $view->prepare_record( $subscription );
			}
		}
	}

	public function get_columns_handlers(): array {
		return array(
			'id'                 => array(
				'value' => array( $this, 'get_payment_id' ),
				'type'  => 'integer',
			),
			'status'             => array(
				'value' => array( $this, 'get_status_info' ),
			),
			'type'               => array(
				'value' => array( $this, 'get_resource_type' ),
			),
			'date'               => array(
				'value' => array( $this, 'get_payment_date' ),
			),
			'subscriber'         => array(
				'value' => array( $this, 'get_subscriber' ),
				'type'  => 'rawArray',
			),
			'related_id'         => array(
				'value' => array( $this, 'get_related_id' ),
			),
			'gross'              => array(
				'value' => array( $this, 'get_gross' ),
			),
			'_FORM_ID'           => array(
				'value' => array( $this, 'get_form_id' ),
				'type'  => 'integer',
			),
			self::COLUMN_ACTIONS => array(
				'value' => array( $this, 'get_actions' ),
				'type'  => 'rawArray',
			),
			'refund_link'        => array(
				'value' => array( $this, 'get_refund_link' ),
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			'date'               => array(
				'label' => __( 'Date', 'jet-form-builder' ),
			),
			'related_id'         => array(
				'label' => __( 'Subscription ID', 'jet-form-builder' ),
			),
			'status'             => array(
				'label' => __( 'Type', 'jet-form-builder' ),
			),
			'subscriber'         => array(
				'label' => __( 'Subscriber', 'jet-form-builder' ),
			),
			'gross'              => array(
				'label' => __( 'Gross', 'jet-form-builder' ),
			),
			self::COLUMN_ACTIONS => array(
				'label' => __( 'Actions', 'jet-form-builder' ),
			),
		);
	}

	public function get_payment_id( $record ) {
		return $record['resource']['id'] ?? '';
	}

	public function get_status_info( $record ) {
		switch ( $record['resource_type'] ) {
			case 'sale':
				return __( 'Recurring payment from', 'jet-form-builder' );
			case 'refund':
				return __( 'Refund to', 'jet-form-builder' );
			default:
				return __( 'Unknown', 'jet-form-builder' );
		}
	}

	public function get_resource_type( $record ) {
		return $record['resource_type'] ?? '';
	}

	public function is_sale( $record ): bool {
		return 'sale' === $this->get_resource_type( $record );
	}

	public function get_related_id( $record ) {
		$current_id = $record['resource']['id'] ?? '';

		if ( $this->is_sale( $record ) ) {
			return $record['resource']['billing_agreement_id'] ?? '';
		}

		if ( isset( $this->queried_related[ $current_id ] ) ) {
			return $this->queried_related[ $current_id ];
		}

		$sale_id = $record['resource']['sale_id'] ?? '';

		foreach ( $this->raw_payments as $payment ) {
			if ( $payment['payment_id'] !== $sale_id ) {
				continue;
			}

			return $payment['resource']['billing_agreement_id'] ?? '';
		}

		try {
			$sale = Paypal\Prepared_Views::get_payment_raw( $sale_id );
		} catch ( Query_Builder_Exception $exception ) {
			return '';
		}

		$this->queried_related[ $current_id ] = $sale['resource']['billing_agreement_id'] ?? '';

		return $this->queried_related[ $current_id ];
	}

	public function get_payment_date( $record ) {
		return $this->format_date( $record['create_dt'] ?? 0 );
	}

	public function get_subscriber( $record ) {
		return $record['related_object']['subscriber']['value'];
	}

	public function get_form_id( $record ) {
		return $record['related_object']['_FORM_ID']['value'];
	}


	public function get_actions( $record ): array {
		$subscription_id = $this->get_related_id( $record );

		$actions = array(
			'view_subscription' => array(
				'label'   => __( 'View Subscription', 'jet-form-builder' ),
				'payload' => array(
					'url' => ( new Pages\Paypal_Subscriptions_Entries() )->get_url(
						array(
							'sub' => $subscription_id,
						)
					),
				),
			),
		);

		if ( ! $this->is_sale( $record ) ) {
			return $actions;
		}

		return array_merge(
			$actions,
			array(
				'refund' => array(
					'label'   => __( 'Refund payment', 'jet-form-builder' ),
					'payload' => array(
						'contact_name'  => array(
							'label' => __( 'Subscriber name', 'jet-form-builder' ),
						),
						'contact_email' => array(
							'label' => __( 'Subscriber email', 'jet-form-builder' ),
						),
						'amount'        => array(
							'label' => __( 'Total Refund Amount', 'jet-form-builder' ),
						),
						'invoice_id'    => array(
							'label' => __( 'Invoice Number (Optional)', 'jet-form-builder' ),
						),
						'note_to_payer' => array(
							'label' => __( 'Note To Buyer (Optional)', 'jet-form-builder' ),
						),
						'method'        => RefundAction::get_methods(),
						'url'           => RefundAction::dynamic_rest_url( $record['resource']['id'] ),
					),
				),
			)
		);
	}

	public function get_gross( $record ) {
		$value    = number_format( $record['resource']['amount']['total'] ?? 0, 2 );
		$currency = $record['resource']['amount']['currency'] ?? '';

		$value = ( $this->is_sale( $record ) ? '+' : '-' ) . ' ' . $value;

		return "{$value} {$currency}";
	}

	public function get_refund_link( $record ) {
		$links = $record['resource']['links'] ?? array();

		foreach ( $links as $link ) {
			if ( 'refund' === $link['rel'] ) {
				return $link['href'];
			}
		}

		return '';
	}

	public function format_date( $date_time ) {
		return date( 'Y-m-d H:i:s', $date_time );
	}


}

