<?php

namespace JFB_Modules\Gateways;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Gateways_Editor_Data {

	private function labels() {
		return array_merge(
			array(
				'notifications_before'      => _x( 'Before payment processed:', 'Gateways editor data', 'jet-form-builder' ),
				'notifications_success'     => _x( 'On successful payment:', 'Gateways editor data', 'jet-form-builder' ),
				'notifications_failed'      => _x( 'On failed payment:', 'Gateways editor data', 'jet-form-builder' ),
				'price_field'               => _x( 'Price/amount field', 'Gateways editor data', 'jet-form-builder' ),
				'message_success'           => _x( 'Payment success message', 'Gateways editor data', 'jet-form-builder' ),
				'message_failed'            => _x( 'Payment failed message', 'Gateways editor data', 'jet-form-builder' ),
				'use_success_redirect'      => _x( 'Redirect to a page', 'Gateways editor data', 'jet-form-builder' ),
				'action_order'              => _x( 'Create payment order notification:', 'Gateways editor data', 'jet-form-builder' ),
				'use_success_redirect_help' => _x(
					'Enable this toggle to redirect a user after successful payment.',
					'Gateways editor data',
					'jet-form-builder'
				),
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

	private function required_fields_map(): array {
		// Fallback hardcode (until gateway plugins can self-declare)
		$map = array(
			'paypal' => array( 'client_id', 'secret' ),
			'stripe' => array( 'public', 'secret' ),
		);

		foreach ( $this->rep_get_items() as $gateway ) {
			/** @var Base_Gateway $gateway */
			$id     = $gateway->get_id();
			$fields = (array) $gateway->required_credentials_fields();

			if ( ! empty( $fields ) ) {
				$map[ $id ] = array_values( $fields );
			}
		}

		return $map;
	}

	private function gateways_global_valid() {

		$required_map = $this->required_fields_map();
		$result       = array();

		foreach ( $this->rep_get_items() as $gateway ) {

			$id = $gateway->get_id();

			if ( ! isset( $required_map[ $id ] ) ) {
				continue;
			}

			$class_name = get_class( $gateway );

			if ( ! method_exists( $class_name, 'get_credentials' ) ) {
				$result[ $id ] = false;
				continue;
			}

			$creds = $class_name::get_credentials();

			$is_valid = true;

			foreach ( $required_map[ $id ] as $field ) {
				if ( empty( $creds[ $field ] ) ) {
					$is_valid = false;
					break;
				}
			}

			$result[ $id ] = $is_valid;
		}

		return $result;
	}

	public function editor_data() {
		$required_map = $this->required_fields_map();

		$result = array(
			'allowed'    => true,
			'labels'     => $this->labels(),
			'list'       => $this->gateways_for_js(),
			'messages'   => $this->default_messages(),
			'additional' => $this->gateways_additional(),
			'validation' => array(
				'required_map' => $required_map,
				'global_valid' => $this->gateways_global_valid(),
			),
		);

		return apply_filters( 'jet-form-builder/gateways/editor-data', $result );
	}

}
