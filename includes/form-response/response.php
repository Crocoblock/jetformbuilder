<?php


namespace Jet_Form_Builder\Form_Response;

use Jet_Form_Builder\Form_Response\Types\Response_It;

class Response {

	public $manager;
	private $query_args = array();
	public $args        = array();

	public $default_args = array(
		'status' => 'success',
		'errors' => array(),
	);

	public function __construct( Response_It $instance, $query_args = array() ) {
		$this->manager = $instance;
		$this->add_query_args( $query_args );
	}

	public function send() {
		$this->manager->send(
			apply_filters( 'jet-fb/response-handler/query-args', $this->query_args, $this )
		);
	}

	private function init_query_args() {
		$this->add_query_args(
			array( 'status' => $this->manager->parse_status( $this->args['status'] ) )
		);
	}

	public function init( array $args ) {
		$this->args = wp_parse_args( $args, $this->default_args );

		$this->init_query_args();
		$this->call_on_status();

		return $this;
	}

	private function call_on_status() {
		$callable = array( $this, 'on_' . $this->args['status'] );

		if ( is_callable( $callable ) ) {
			call_user_func( $callable );
		}
	}

	private function add_query_args( $args ) {
		$this->query_args = array_merge( $this->query_args, $args );
	}

	public function on_validation_failed() {
		$this->add_query_args(
			array(
				'fields' => $this->manager->get_field_errors( $this->args['errors'] ),
			)
		);
	}


}
