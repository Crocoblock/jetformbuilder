<?php

namespace JFB_Components\Rest_Api;

class Route {

	/**
	 * @var Route|null
	 */
	private $parent_route;
	private $rest_namespace = '';
	private $route          = '';
	private $override       = false;
	/**
	 * @var Interfaces\Endpoint_Interface[]
	 */
	private $endpoints = array();

	public function register() {
		register_rest_route(
			$this->get_namespace(),
			"/{$this->get_route()}",
			iterator_to_array( $this->resolve_endpoints() ),
			$this->is_override()
		);
	}

	private function resolve_endpoints(): \Generator {
		foreach ( $this->endpoints as $endpoint ) {
			yield array(
				'methods'             => $endpoint->get_method(),
				'callback'            => array( $endpoint, 'process' ),
				'permission_callback' => array( $endpoint, 'has_permission' ),
				'args'                => $endpoint->get_args(),
			);
		}
	}

	/**
	 * @param Route|null $parent_route
	 */
	public function set_parent_route( Route $parent_route ) {
		$this->parent_route = $parent_route;

		if ( ! $this->get_namespace() ) {
			$this->set_namespace( $parent_route->get_namespace() );
		}
	}

	/**
	 * @param string $rest_namespace
	 */
	public function set_namespace( string $rest_namespace ) {
		$this->rest_namespace = $rest_namespace;
	}

	/**
	 * @return string
	 */
	public function get_namespace(): string {
		return $this->rest_namespace;
	}

	/**
	 * @param string $route
	 */
	public function set_route( string $route ) {
		$this->route = trim( $route, '/' );
	}

	/**
	 * @return string
	 */
	public function get_route(): string {
		if ( ! $this->parent_route ) {
			return $this->route;
		}

		return ( $this->parent_route->get_route() . '/' . $this->route );
	}

	/**
	 * @param bool $override
	 */
	public function set_override( bool $override ) {
		$this->override = $override;
	}

	/**
	 * @return bool
	 */
	public function is_override(): bool {
		return $this->override;
	}

	/**
	 * @param Interfaces\Endpoint_Interface[] $endpoints
	 */
	public function set_endpoints( array $endpoints ) {
		$this->endpoints = array();

		foreach ( $endpoints as $endpoint ) {
			$this->add_endpoint( $endpoint );
		}
	}

	public function add_endpoint( Interfaces\Endpoint_Interface $endpoint ) {
		$this->endpoints[] = $endpoint;
	}

	/**
	 * @return Interfaces\Endpoint_Interface[]
	 */
	public function get_endpoints(): array {
		return $this->endpoints;
	}

}
