<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Plugin;

trait Gateways_Editor_Data {

	private function labels() {
		return array_merge(
			array(
				'notifications_before'  => _x( 'Before payment processed:', 'Gateways editor data', 'jet-form-builder' ),
				'notifications_success' => _x( 'On successful payment:', 'Gateways editor data', 'jet-form-builder' ),
				'notifications_failed'  => _x( 'On failed payment:', 'Gateways editor data', 'jet-form-builder' ),
				'price_field'           => _x( 'Price/amount field', 'Gateways editor data', 'jet-form-builder' ),
				'message_success'       => _x( 'Payment success message', 'Gateways editor data', 'jet-form-builder' ),
				'message_failed'        => _x( 'Payment failed message', 'Gateways editor data', 'jet-form-builder' ),
				'use_success_redirect'  => _x( 'Use redirect URL from Redirect notification', 'Gateways editor data', 'jet-form-builder' ),
				'action_order'          => _x( 'Create payment order notification:', 'Gateways editor data', 'jet-form-builder' ),
			),
			$this->options_labels(),
			$this->custom_labels()
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

		foreach ( $this->rep_get_items() as $gateway ) {
			/** @var Base_Gateway $gateway */
			$result[ $gateway->get_id() ] = $gateway->options( 'label' );
		}

		return $result;
	}

	private function custom_labels() {
		$result = array();

		foreach ( $this->rep_get_items() as $gateway ) {
			/** @var Base_Gateway $gateway */
			$result = array_merge(
				$result,
				$this->join_keys(
					$gateway->custom_labels(),
					$gateway->get_id()
				)
			);
		}

		return $result;
	}

	private function join_keys( $source, $prefix ): array {
		$custom_labels = array();

		foreach ( $source as $key => $label ) {
			$computed_key = "{$prefix}.{$key}";

			if ( is_string( $label ) ) {
				$custom_labels[ $computed_key ] = $label;
				continue;
			}
			if ( is_array( $label ) ) {
				$custom_labels = array_merge( $custom_labels, $this->join_keys( $label, $computed_key ) );
			}
		}

		return $custom_labels;
	}

	private function gateways_additional() {
		$result = array();

		foreach ( $this->rep_get_items() as $gateway ) {
			/** @var Base_Gateway $gateway */
			$result[ $gateway->get_id() ] = $gateway->additional_editor_data();
		}

		return $result;
	}

	private function gateways_for_js() {
		$result = array();

		foreach ( $this->rep_get_items() as $gateway ) {
			$result[] = array(
				'value' => $gateway->get_id(),
				'label' => $gateway->get_name(),
			);
		}

		return $result;
	}

	public function editor_data() {
		$result = array(
			'allowed' => Plugin::instance()->allow_gateways,
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
