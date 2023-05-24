<?php


namespace JFB_Components\Rest_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Rest_Api_Controller_Base {

	public function rest_api_init() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * @return Rest_Api_Endpoint_Base[]
	 */
	abstract public function routes(): array;

	public function register_routes() {
		foreach ( $this->routes() as $route ) {
			$endpoint_args = $route->get_overridden_args()
				?: array( // phpcs:ignore Universal.Operators.DisallowShortTernary.Found
					'methods'             => $route::get_methods(),
					'callback'            => array( $route, 'run_callback' ),
					'permission_callback' => array( $route, 'check_permission' ),
					'args'                => $route->get_common_args(),
				);

			$result = register_rest_route(
				$route::get_namespace(),
				"/{$route::get_rest_base()}",
				$endpoint_args,
				$route->get_override()
			);

			if ( ! $result ) {
				_doing_it_wrong(
					__METHOD__,
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					"Error on register REST API route: {$route::get_namespace()}/{$route::get_rest_base()}",
					'1.4.0'
				);
			}
		}
	}

}
