<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Pay_Now;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Subscribe;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

class Paypal_Entries extends Base_Page {

	public function slug(): string {
		return 'paypal-entries';
	}

	public function title(): string {
		return __( 'Paypal Entries', 'jet-form-builder' );
	}

	public function get_columns_list() {
		return array(
			'id'          => array(
				'label' => __( 'ID', 'jet-form-builder' ),
				'value' => array( $this, 'get_related_id' )
			),
			'record_type' => array(
				'label' => __( 'Record Type', 'jet-form-builder' ),
				'value' => array( $this, 'get_item_type' )
			),
			'record_id'   => array(
				'label' => __( 'Record ID', 'jet-form-builder' ),
				'value' => array( $this, 'get_item_id' )
			),
			'status'      => array(
				'label' => __( 'Status', 'jet-form-builder' ),
				'value' => array( $this, 'get_item_status' )
			)
		);
	}

	public function page_config(): array {
		$paypal = Gateway_Manager::instance()->controller( 'paypal' );

		return array(
			'entries' => $paypal->get_gateway_entries()
		);
	}

	public function get_related_id( $record ) {
		return (int) $record['order_id'] ?? 0;
	}

	public function get_item_type( $record ) {
		$scenario = $record['scenario'] ?? '';

		switch ( $scenario ) {

			case Scenario_Subscribe::scenario_id():
				return __( 'Subscription', 'jet-form-builder' );

			case Scenario_Pay_Now::scenario_id():
				return __( 'Payment', 'jet-form-builder' );

			default:
				return apply_filters(
					"jet-form-builder/gateways/paypal/entries-list/record-type-label",
					__( 'Payment', 'jet-form-builder' ),
					$record
				);
		}
	}

	public function get_item_id( $record ) {
		$scenario  = $record['scenario'] ?? false;
		$undefined = '###';

		switch ( $scenario ) {
			case Scenario_Pay_Now::scenario_id():
			case Scenario_Subscribe::scenario_id():
				return $record['resource']['id'] ?? $undefined;

			default:
				return apply_filters(
					"jet-form-builder/gateways/paypal/entries-list/record-id",
					$record['payment_id'] ?? $undefined,
					$record
				);
		}
	}

	public function get_item_status( $record ) {
		$scenario = $record['scenario'] ?? false;

		try {
			return Scenarios_Manager::instance()->rep_get_item( $scenario )->prepare_status_for_view( $record );
		} catch ( Repository_Exception $exception ) {
		}

		return $record['status'] ?? 'NONE';
	}
}