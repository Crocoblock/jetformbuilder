<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Exceptions\Not_Router_Request;

abstract class Request_Router {

	abstract protected function get_hook_name(): string;

	abstract protected function get_hook_value(): string;

	/**
	 * @throws Not_Router_Request
	 */
	protected function is_request(): Request_Router {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$hook_value = sanitize_text_field( wp_unslash( $_REQUEST[ $this->get_hook_name() ] ?? '' ) );

		if ( $this->get_hook_value() !== $hook_value ) {
			throw new Not_Router_Request( 'Request is not matched' );
		}

		return $this;
	}

	protected function get_method(): string {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field( wp_unslash( $_REQUEST['method'] ?? '' ) );
	}

	/**
	 * @throws Not_Router_Request
	 */
	public static function listen(): Request_Router {
		$listener = ( new static() )->is_request();
		$method   = $listener->get_method();

		$listener->is_method( $method );

		if ( 'ajax' === $method ) {
			define( 'DOING_AJAX', true );

			add_action( 'parse_request', array( $listener, 'setup_ajax_request' ) );
		}

		return $listener;
	}


	/**
	 * @param string $method
	 *
	 * @return Request_Router
	 * @throws Not_Router_Request
	 */
	private function is_method( string $method ): Request_Router {
		if ( ! in_array( $method, array( 'reload', 'ajax' ), true ) ) {
			throw new Not_Router_Request( 'Request METHOD is not matched' );
		}

		return $this;
	}

	/**
	 * Setup front referrer
	 *
	 * @param \WP $wp
	 *
	 * @return never-return
	 */
	public function setup_ajax_request( \WP $wp ) {
		$wp->query_posts();
		$wp->register_globals();

		if ( is_user_logged_in() ) {
			do_action( 'wp_ajax_' . $this->get_hook_name() );
		} else {
			do_action( 'wp_ajax_nopriv_' . $this->get_hook_name() );
		}

		die();
	}

}
