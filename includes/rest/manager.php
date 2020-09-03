<?php
namespace Jet_Form_Builder\Rest;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Manager {

	private $api_namespace = 'jet-form-builder/v2';
	private $_endpoints    = false;

	/**
	 * Register hooks
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'init_rest' ) );
	}

	/**
	 * Initialize all JetEngine related Rest API endpoints
	 *
	 * @return [type] [description]
	 */
	public function init_endpoints() {

		$this->_endpoints = array();

		$this->register_endpoint( new Endpoint_Update_Form() );

		do_action( 'jet-form-builder/rest/init-endpoints', $this );

	}

	/**
	 * Register new endpoint
	 *
	 * @param  object $endpoint_instance Endpoint instance
	 * @return void
	 */
	public function register_endpoint( $endpoint_instance = null ) {

		if ( $endpoint_instance ) {
			$this->_endpoints[ $endpoint_instance->get_name() ] = $endpoint_instance;
		}

	}

	/**
	 * Returns all registererd API endpoints
	 *
	 * @return [type] [description]
	 */
	public function get_endpoints() {

		if ( false === $this->_endpoints ) {
			$this->init_endpoints();
		}

		return $this->_endpoints;

	}

	/**
	 * Returns route to passed endpoint
	 *
	 * @return [type] [description]
	 */
	public function get_route( $endpoint = '', $full = false ) {

		$path = '/' . $this->api_namespace . '/' . $endpoint . '/';

		if ( ! $full ) {
			return $path;
		} else {
			return get_rest_url( null, $path );
		}

	}

	/**
	 * Register JetEngine rest API routes
	 *
	 * @return [type] [description]
	 */
	public function init_rest() {

		$endpoints = $this->get_endpoints();

		foreach ( $endpoints as $endpoint ) {

			$args = array(
				'methods'             => $endpoint->get_method(),
				'callback'            => array( $endpoint, 'callback' ),
				'permission_callback' => array( $endpoint, 'permission_callback' ),
			);

			if ( ! empty( $endpoint->get_args() ) ) {
				$args['args'] = $endpoint->get_args();
			}

			$route = '/' . $endpoint->get_name() . '/' . $endpoint->get_query_params();

			register_rest_route( $this->api_namespace, $route, $args );

		}

	}

}

