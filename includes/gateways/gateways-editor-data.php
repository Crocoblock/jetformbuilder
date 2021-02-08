<?php


namespace Jet_Form_Builder\Gateways;


use Jet_Form_Builder\Plugin;

trait Gateways_Editor_Data {

	private function labels() {
		return array_merge(
			array(
				'notifications_before'  => __( 'Before payment processed:', 'jet-form-builder' ),
				'notifications_success' => __( 'On successful payment:', 'jet-form-builder' ),
				'notifications_failed'  => __( 'On failed payment:', 'jet-form-builder' ),
				'price_field'           => __( 'Price/amount field', 'jet-form-builder' ),
				'message_success'       => __( 'Payment success message', 'jet-form-builder' ),
				'message_failed'        => __( 'Payment failed message', 'jet-form-builder' ),
				'use_success_redirect'  => __( 'Use redirect URL from Redirect notification', 'jet-form-builder' ),
				'action_order'          => __( 'Create payment order notification:', 'jet-form-builder' )
			),
			$this->options_labels()
		);
	}

	private function default_messages() {
		return array(
			'success' => 'Payment success message',
			'failed'  => 'Payment failed message',
		);
	}

	private function options_labels() {
		$result = array();

		foreach ( $this->_gateways as $gateway ) {
			$result[ $gateway->get_id() ] = $gateway->options( 'label' );
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
			$result['labels']   = $this->labels();
			$result['list']     = $this->gateways_for_js();
			$result['messages'] = $this->default_messages();
		}

		return $result;
	}

}