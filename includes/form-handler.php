<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Form_Response;
use Jet_Form_Builder\Request\Request_Handler;

/**
 * Form builder class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Jet_Engine_Booking_Forms_Handler class
 */
class Form_Handler {

	public $hook_key        = 'jet_form_builder_submit';
	public $hook_val        = 'submit';
	public $form_data       = array();
	public $response_data   = array();
	public $is_ajax         = false;
	public $is_success      = false;
	public $response_status = 'failed';

	public $form_id;
	public $refer;
	public $manager;

	/** @var Action_Handler */
	public $action_handler;

	public $request_data;

	public $form_key    = '_jet_engine_booking_form_id';
	public $refer_key   = '_jet_engine_refer';
	public $post_id_key = '__queried_post_id';
	/**
	 * @var Request_Handler
	 */
	public $request_handler;


	/**
	 * Constructor for the class
	 */
	function __construct() {
		$this->action_handler  = new Action_Handler();
		$this->request_handler = new Request_Handler();

		if ( wp_doing_ajax() ) {

			add_action(
				'wp_ajax_' . $this->hook_key,
				array( $this, 'process_ajax_form' )
			);
			add_action(
				'wp_ajax_nopriv_' . $this->hook_key,
				array( $this, 'process_ajax_form' )
			);

		} else {

			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			if ( ! isset( $_REQUEST[ $this->hook_key ] ) || $this->hook_val !== $_REQUEST[ $this->hook_key ] ) {
				return;
			}

			add_action( 'wp_loaded', array( $this, 'process_form' ), 0 );
		}
	}

	/**
	 * Is ajax form processing or not
	 *
	 * @return boolean [description]
	 */
	public function is_ajax() {
		return $this->is_ajax;
	}

	/**
	 * Setup form data
	 *
	 * @return void [description]
	 */
	public function setup_form() {
		global $post;

		if ( $this->form_id ) {
			return;
		}

		// phpcs:disable WordPress
		if ( ! $this->is_ajax ) {
			$post          = ! empty( $_POST[ $this->post_id_key ] ) ? get_post( absint( $_POST[ $this->post_id_key ] ) ) : null;
			$this->form_id = ! empty( $_POST[ $this->form_key ] ) ? absint( $_POST[ $this->form_key ] ) : false;
			$this->refer   = ! empty( $_POST[ $this->refer_key ] ) ? esc_url_raw( $_POST[ $this->refer_key ] ) : false;
		} else {
			$values = ! empty( $_POST['values'] ) ? Tools::sanitize_recursive( $_POST['values'] ) : array();

			foreach ( $values as $data ) {
				switch ( $data['name'] ) {
					case $this->form_key:
						$this->form_id = absint( $data['value'] );
						break;
					case $this->post_id_key:
						$post = get_post( absint( $data['value'] ) );
						break;
					case $this->refer_key:
						$this->refer = esc_url_raw( $data['value'] );
						// Clear form-related arguments.
						$this->refer = remove_query_arg( array( 'values', 'status', 'fields' ), $this->refer );
						break;
				}
			}
		}
		// phpcs:enable WordPress

		$this->refer = wp_validate_redirect( $this->refer );
	}

	private function get_response_manager() {
		if ( ! $this->form_id ) {
			$this->setup_form();
		}

		if ( $this->is_ajax ) {
			$this->action_handler->set_form_id( $this->form_id );

			return new Form_Response\Types\Ajax_Response(
				array(
					'form_id' => $this->form_id,
					'actions' => $this->action_handler->get_all(),
				)
			);
		} else {
			return new Form_Response\Types\Reload_Response(
				array(
					'refer' => $this->refer,
				)
			);
		}
	}

	/**
	 * Process form with Ajax
	 *
	 * @return [type] [description]
	 */
	public function process_ajax_form() {
		$this->is_ajax = true;
		$this->process_form();
	}

	/**
	 * Process current form
	 *
	 * @return [type] [description]
	 */
	public function process_form() {

		$this->setup_form();

		if ( ! $this->form_id || ! $this->refer ) {
			$this->add_response_data(
				array(
					'reload' => true,
				)
			);

			$this->send_response(
				array(
					'status' => 'failed',
				)
			);
		}

		$this->try_set_data();

		do_action( 'jet-form-builder/form-handler/before-send', $this );

		$this->try_to_do_actions();

		do_action( 'jet-form-builder/form-handler/after-send', $this, $this->is_success );

		if ( true === $this->is_success ) {
			$this->send_response(
				array(
					'status' => 'success',
				)
			);
		} else {
			$this->send_response(
				array(
					'status' => 'failed',
				)
			);
		}
	}

	public function try_set_data() {
		try {
			$request = array(
				'form_id' => $this->form_id,
				'is_ajax' => $this->is_ajax,
				'refer'   => $this->refer,
			);
			$this->action_handler->set_form_id( $this->form_id );
			$this->request_handler->set_request( $request );

			$this->request_data = $this->request_handler->get_form_data();

		} catch ( Request_Exception $exception ) {
			$this->send_response(
				array(
					'status' => $exception->get_form_status(),
					'errors' => $exception->get_fields_errors(),
				)
			);
		}
	}


	public function try_to_do_actions() {
		try {
			$this->action_handler->add_request( $this->request_data );

			$this->add_response_data( $this->action_handler->do_actions() );
			$this->is_success = true;

		} catch ( Handler_Exception $exception ) {
			$this->send_response(
				array(
					'status' => $exception->get_form_status(),
				)
			);
		}
	}


	/**
	 * Add new properties into response data
	 *
	 * @param array $data [description]
	 */
	public function add_response_data( $data = array() ) {
		$this->response_data = array_merge( $this->response_data, $data );
	}

	/**
	 * Redirect back to refer
	 *
	 * @param array $args [description]
	 *
	 * @return void [description]
	 */
	public function send_response( $args = array() ) {
		( new Form_Response\Response( $this->get_response_manager(), $this->response_data ) )->init( $args )->send();
	}

}


