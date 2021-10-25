<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;


use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;

class Subscribe_Now extends Scenario_View_Base {

	use Scenarios_Connectors\Subscribe_Now;

	public function get_columns_handlers(): array {
		return array(
			'id'                 => array(
				'value' => array( $this, 'get_related_id' ),
				'type'  => 'integer'
			),
			'record_id'          => array(
				'value' => array( $this, 'get_item_id' ),
			),
			'status'             => array(
				'value' => array( $this, 'get_status' ),
			),
			'subscriber'         => array(
				'value' => array( $this, 'get_subscriber_info' ),
				'type'  => 'array'
			),
			'plan_info'          => array(
				'value' => array( $this, 'get_plan_info' ),
			),
			'status_update_time' => array(
				'value' => array( $this, 'get_status_update_time' )
			),
			'create_time'        => array(
				'value' => array( $this, 'get_create_time' )
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			'id'                 => array(
				'label' => __( 'ID', 'jet-form-builder' ),
			),
			'record_id'          => array(
				'label' => __( 'Record ID', 'jet-form-builder' ),
			),
			'status'             => array(
				'label' => __( 'Status', 'jet-form-builder' ),
			),
			'subscriber'         => array(
				'label' => __( 'Subscriber Info' ),
			),
			'plan_info'          => array(
				'label' => __( 'Plan Info', 'jet-form-builder' ),
			),
			'status_update_time' => array(
				'label' => __( 'Status update time', 'jet-form-builder' ),
			),
			'create_time'        => array(
				'label' => __( 'Create time', 'jet-form-builder' ),
			),
		);
	}


	public function get_related_id( $record, $undefined ) {
		return $record['order_id'] ?? $undefined;
	}

	public function get_item_id( $record, $undefined ) {
		return $record['resource']['id'] ?? $undefined;
	}

	public function get_status( $record, $undefined ) {
		return $record['resource']['status'] ?? $undefined;
	}

	public function get_plan_info( $record, $undefined ) {
		return $record['resource']['plan_id'] ?? $undefined;
	}

	public function get_subscriber_info( $record, $undefined ) {
		return $record['resource']['subscriber'] ?? $undefined;
	}

	public function get_status_update_time( $record, $undefined ) {
		return $record['resource']['status_update_time'] ?? $undefined;
	}

	public function get_create_time( $record, $undefined ) {
		return $record['resource']['create_time'] ?? $undefined;
	}

}