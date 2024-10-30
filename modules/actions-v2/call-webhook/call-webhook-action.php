<?php

namespace JFB_Modules\Actions_V2\Call_Webhook;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use JFB_Modules\Rich_Content;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Call_Webhook_Action extends Base {

	public function get_name() {
		return __( 'Call Webhook', 'jet-form-builder' );
	}

	public function get_id() {
		return 'call_webhook';
	}

	public function action_attributes() {
		return array(
			'webhook_url' => array(
				'default' => '',
			),
		);
	}

	public function do_action( array $request, Action_Handler $handler ) {
		$webhook_url = ! empty( $this->settings['webhook_url'] ) ? trim( $this->settings['webhook_url'] ) : false;
		$webhook_timeout = ! empty( $this->settings['webhook_timeout'] ) ? (int) $this->settings['webhook_timeout'] : false;

		if ( ! $webhook_url ) {
			throw new Action_Exception(
				'failed',
				esc_html__( 'Empty webhook url', 'jet-form-builder' )
			);
		}

		$args = array(
			'body' => $request,
		);

		if ( $webhook_timeout !== false ) {
			$args['timeout'] = $webhook_timeout;
		}

		/**
		 * Filter webhook arguments
		 */
		$args = apply_filters(
			'jet-form-builder/action/webhook/request-args',
			$args,
			$this->settings,
			$this
		);

		$webhook_url = Rich_Content\Module::rich( $webhook_url );

		$webhook_url = apply_filters(
			'jet-form-builder/action/webhook/request-url',
			$webhook_url,
			$this
		);

		$webhook_url = esc_url_raw( $webhook_url );

		if ( ! $webhook_url ) {
			throw new Action_Exception( 'failed', 'empty_webhook_url' );
		}

		$response = wp_remote_post( $webhook_url, $args );

		if ( $response instanceof \WP_Error ) {
			throw new Action_Exception(
				'failed',
				esc_html__( 'Remote request returned error', 'jet-form-builder' ),
				$response // phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			);
		}
		/**
		 * Fires whe webhook response received
		 */
		do_action( 'jet-form-builder/action/webhook/response', $response, $this->settings, $this );
	}

}
