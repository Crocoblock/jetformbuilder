<?php


namespace Jet_Form_Builder;

use Jet_Form_Builder\Exceptions\Not_Form_Request;

class Request_Router {

	/**
	 * @throws Not_Form_Request
	 */
	public static function init(): Request_Router {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		$hook_value = sanitize_text_field( wp_unslash( $_REQUEST[ jet_fb_handler()->hook_key ] ?? '' ) );

		if ( jet_fb_handler()->hook_val !== $hook_value ) {
			throw new Not_Form_Request( 'Request is not matched' );
		}
		$method = sanitize_text_field( wp_unslash( $_REQUEST['method'] ?? '' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Recommended

		$instance = ( new self() )->is_method( $method );

		if ( 'ajax' === $method ) {
			define( 'DOING_AJAX', true );

			add_action( 'parse_request', array( $instance, 'setup_ajax_request' ) );
		}

		return $instance;
	}


	/**
	 * @param string $method
	 *
	 * @return Request_Router
	 * @throws Not_Form_Request
	 */
	private function is_method( string $method ): Request_Router {
		if ( ! in_array( $method, array( 'reload', 'ajax' ), true ) ) {
			throw new Not_Form_Request( 'Request METHOD is not matched' );
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
			do_action( 'wp_ajax_' . jet_fb_handler()->hook_key );
		} else {
			do_action( 'wp_ajax_nopriv_' . jet_fb_handler()->hook_key );
		}

		die();
	}

}
