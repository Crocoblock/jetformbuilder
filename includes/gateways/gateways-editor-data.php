<?php


namespace Jet_Form_Builder\Gateways;


use Jet_Form_Builder\Plugin;

trait Gateways_Editor_Data {

	private function labels() {
		return array_merge(
			array(
				'notifications_before'  => __( 'Before payment processed:', 'Gateways editor data', 'jet-form-builder' ),
				'notifications_success' => __( 'On successful payment:', 'Gateways editor data', 'jet-form-builder' ),
				'notifications_failed'  => __( 'On failed payment:', 'Gateways editor data', 'jet-form-builder' ),
				'price_field'           => __( 'Price/amount field', 'Gateways editor data', 'jet-form-builder' ),
				'message_success'       => __( 'Payment success message', 'Gateways editor data', 'jet-form-builder' ),
				'message_failed'        => __( 'Payment failed message', 'Gateways editor data', 'jet-form-builder' ),
				'use_success_redirect'  => __( 'Use redirect URL from Redirect notification', 'Gateways editor data', 'jet-form-builder' ),
				'action_order'          => __( 'Create payment order notification:', 'Gateways editor data', 'jet-form-builder' )
			),
			$this->options_labels()
		);
	}

	public function default_messages() {
		return array(
			'success' => 'Payment success message',
			'failed'  => 'Payment failed message',
		);
	}

	private function options_labels() {
		$result = array();

		foreach ( $this->_gateways as $gateway ) {
			/** @var Base_Gateway $gateway */
			$result[ $gateway->get_id() ] = $gateway->options( 'label' );
		}

		return $result;
	}

	private function gateways_additional() {
		$result = array();

		foreach ( $this->_gateways as $gateway ) {
			/** @var Base_Gateway $gateway */
			$result[ $gateway->get_id() ] = $gateway->additional_editor_data();
		}

		return $result;
	}

	private function gateways_for_js() {
		$result = array();

		foreach ( $this->_gateways as $gateway ) {
			$result[] = array(
				'value' => $gateway->get_id(),
				'label' => $gateway->get_name()
			);
		}

		return $result;
	}

	public function editor_data() {
		$result = array(
			'allowed' => Plugin::instance()->allow_gateways
		);

		if ( $result['allowed'] ) {
			$result['labels']     = $this->labels();
			$result['list']       = $this->gateways_for_js();
			$result['messages']   = $this->default_messages();
			$result['additional'] = $this->gateways_additional();
		}

		return apply_filters( 'jet-form-builder/gateways/editor-data', $result );
	}

}