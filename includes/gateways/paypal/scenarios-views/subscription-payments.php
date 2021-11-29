<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;


use Jet_Form_Builder\Classes\Table_View_Base;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Subscription_Payments extends Table_View_Base {

	public static function rep_item_id() {
		return 'SUBSCRIBE_NOW_PAYMENTS';
	}

	public function get_list(): array {
		try {

			return ( new Query_Builder() )
				->set_view( new Paypal\Query_Views\Subscription_Payments() )
				->debug()
				->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function get_columns_handlers(): array {
		// TODO: Implement get_columns_handlers() method.
	}

	public function get_columns_headings(): array {
		// TODO: Implement get_columns_headings() method.
	}

	public function get_single_actions(): array {
		return array(
			'refund'  => array(
				'label'              => __( 'Refund payment', 'jet-form-builder' ),
				'reason'             => array(
					'label'   => __( 'Reason', 'jet-form-builder' ),
					'desc'    => __( 'The reason for the cancellation of a subscription.', 'jet-form-builder' ),
					'default' => 'Not satisfied with the service.',
				),
				'must_have_statuses' => array( 'ACTIVE' ),
			),
			'suspend' => array(
				'label'              => __( 'Suspend subscription', 'jet-form-builder' ),
				'reason'             => array(
					'label'   => __( 'Reason', 'jet-form-builder' ),
					'desc'    => __( 'The reason for suspenson of the subscription.', 'jet-form-builder' ),
					'default' => 'Item out of stock.',
				),
				'must_have_statuses' => array( 'ACTIVE' ),
			),
		);
	}
}