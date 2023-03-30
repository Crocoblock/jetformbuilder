<?php


namespace Jet_Form_Builder\Classes\Http;

use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Http_Tools {

	protected static $query;

	public static function get_site_host() {
		return str_ireplace( 'www.', '', wp_parse_url( home_url(), PHP_URL_HOST ) );
	}

	/**
	 * Get current user IP Address.
	 *
	 * Taken from:
	 * https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-geolocation.php#L80-L91
	 * (WC_Geolocation::get_ip_address)
	 *
	 * @return string
	 */
	public static function get_ip_address(): string {
		if ( isset( $_SERVER['HTTP_X_REAL_IP'] ) ) {
			return sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_REAL_IP'] ) );
		} elseif ( isset( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
			// Proxy servers can send through this header like this: X-Forwarded-For: client1, proxy1, proxy2
			// Make sure we always only send through the first IP in the list which should always be the client IP.
			return (string) rest_is_ip_address( trim( current( preg_split( '/,/', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) ) ) ) );
		} elseif ( isset( $_SERVER['REMOTE_ADDR'] ) ) {
			return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
		}

		return '';
	}

	public static function get_user_agent(): string {
		return sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ?? '' ) );
	}

	public static function replace_path_args( string $path, array $path_args ): string {
		$patterns = array();

		foreach ( $path_args as $key => $value ) {
			$patterns[ "#\(\?P<$key\>\S+\)#" ] = function ( $matches ) use ( $value ) {
				return (string) $value;
			};
		}

		return implode(
			'/',
			preg_replace_callback_array(
				$patterns,
				explode( '/', $path )
			)
		);
	}

	/**
	 * Returns form action url
	 *
	 * @param array $args
	 *
	 * @return string [type] [description]
	 */
	public static function get_form_action_url( array $args = array() ): string {
		global $wp;

		$args = array_merge(
			array(
				Plugin::instance()->form_handler->hook_key => Plugin::instance()->form_handler->hook_val,
				'method'                                   => 'reload',
			),
			$args
		);

		$action = add_query_arg(
			$args,
			trailingslashit(
				home_url( $wp->request )
			)
		);

		return apply_filters( 'jet-form-builder/form-action-url', $action );
	}

	/**
	 * Returns form refer url
	 *
	 * @return [type] [description]
	 */
	public static function get_form_refer_url(): string {

		global $wp;

		$refer = home_url( $wp->request );

		if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
			$refer = trailingslashit( $refer ) . '?' . $_SERVER['QUERY_STRING'];
		}

		return apply_filters( 'jet-form-builder/form-refer-url', $refer );
	}

	public static function get_query(): array {
		if ( ! is_null( self::$query ) ) {
			return self::$query;
		}

		if ( ! jet_fb_handler()->is_process() ) {
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			self::$query = wp_unslash( $_GET );

			return self::$query;
		}

		$query = array();

		wp_parse_str(
			wp_parse_url( jet_fb_handler()->refer, PHP_URL_QUERY ),
			$query
		);

		self::$query = wp_unslash( $query );

		return self::$query;
	}

}
