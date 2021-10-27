<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;

class Subscribe_Now extends Scenario_View_Base {

	use Scenarios_Connectors\Subscribe_Now;

	public function get_columns_handlers(): array {
		return array(
			self::COLUMN_CHOOSE => array(
				'value' => array( $this, 'get_related_id' ),
				'type'  => 'integer',
			),
			'id'                => array(
				'value' => array( $this, 'get_related_id' ),
				'type'  => 'integer',
			),
			'record_id'         => array(
				'value' => array( $this, 'get_item_id' ),
			),
			'status'            => array(
				'value' => array( $this, 'get_status_info' ),
				'type'  => 'array',
			),
			'subscriber'        => array(
				'value' => array( $this, 'get_subscriber_info' ),
				'type'  => 'array',
			),
			'plan_info'         => array(
				'value' => array( $this, 'get_plan_info' ),
			),
			'create_time'       => array(
				'value' => array( $this, 'get_create_time' ),
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			self::COLUMN_CHOOSE => array(
				'label' => '',
			),
			'id'                => array(
				'label' => __( 'ID', 'jet-form-builder' ),
			),
			'record_id'         => array(
				'label' => __( 'Record ID', 'jet-form-builder' ),
			),
			'status'            => array(
				'label' => __( 'Status Info', 'jet-form-builder' ),
			),
			'subscriber'        => array(
				'label' => __( 'Subscriber Info', 'jet-form-builder' ),
			),
			'plan_info'         => array(
				'label' => __( 'Plan Info', 'jet-form-builder' ),
			),
			'create_time'       => array(
				'label' => __( 'Create time', 'jet-form-builder' ),
			),
		);
	}


	/**
	 * By default store related post id
	 * Possible value in $record['order_id'] :
	 *
	 * - 2342
	 */
	public function get_related_id( $record, $undefined ) {
		return $record['order_id'] ?? $undefined;
	}

	/**
	 * Possible values in $record['resource']['id'] :
	 * - I-17SAYS7KS71U
	 *
	 * @return mixed
	 */
	public function get_item_id( $record, $undefined ) {
		return $record['resource']['id'] ?? $undefined;
	}

	/**
	 * Possible values in $record['resource']['status'] :
	 *
	 * - APPROVAL_PENDING. The subscription is created but not yet approved by the buyer.
	 * - APPROVED. The buyer has approved the subscription.
	 * - ACTIVE. The subscription is active.
	 * - SUSPENDED. The subscription is suspended.
	 * - CANCELLED. The subscription is cancelled.
	 * - EXPIRED. The subscription is expired.
	 */
	public function get_status_info( $record, $undefined ): array {
		return array(
			'status'             => $record['resource']['status'] ?? $undefined,
			'status_update_time' => $record['resource']['status_update_time'] ?? __( 'Not updated yet.', 'jet-form-builder' ),
		);
	}


	/**
	 * Possible value in $record['resource']['plan_id'] :
	 *
	 * - P-2RW14005CT67939112MPP
	 */
	public function get_plan_info( $record, $undefined ) {
		return $record['resource']['plan_id'] ?? $undefined;
	}

	/**
	 * Possible value in $record['resource']['subscriber'] :
	 *
	 * array (
	 * 'email_address' => 'sanko200065@gmail.com',
	 * 'payer_id' => 'VFG6LG948GIRL',
	 * 'name' =>
	 * array (
	 * 'given_name' => 'Олександр',
	 * 'surname' => 'Іваненко',
	 * ),
	 * 'shipping_address' =>
	 * array (
	 * 'address' =>
	 * array (
	 * 'address_line_1' => 'Rumina',
	 * 'admin_area_2' => 'Mykolaiv',
	 * 'admin_area_1' => 'MYKOLAIVSKA OBL',
	 * 'postal_code' => '54000',
	 * 'country_code' => 'UA',
	 * ),
	 * ),
	 * )
	 */
	public function get_subscriber_info( $record, $undefined ) {
		return $record['resource']['subscriber'] ?? $undefined;
	}

	/**
	 * Possible value in $record['resource']['status_update_time']:
	 *
	 * - 2021-10-25T07:15:28Z
	 */
	public function get_status_update_time( $record, $undefined ) {
		return $record['resource']['status_update_time'] ?? $undefined;
	}

	/**
	 * Possible value in $record['resource']['create_time']:
	 *
	 * - 2021-10-25T07:15:28Z
	 */
	public function get_create_time( $record, $undefined ) {
		return $record['resource']['create_time'] ?? $undefined;
	}

}
