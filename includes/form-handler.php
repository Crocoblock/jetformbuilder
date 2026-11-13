<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Default_Required\Default_Required_Event;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Options_Handler;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Classes\Security\Submitted_Post_Context;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Not_Router_Request;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Form_Request_Router;
use Jet_Form_Builder\Request\Request_Handler;
use JFB_Modules\Rich_Content\Macros_Parser;
use JFB_Modules\Rich_Content\Module;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Macros_Parser parser
 *
 * Define Jet_Engine_Booking_Forms_Handler class
 */
class Form_Handler {

	public $hook_key          = 'jet_form_builder_submit';
	public $hook_val          = 'submit';
	public $form_data         = array();
	public $response_data     = array();
	public $is_ajax           = false;
	public $is_success        = false;
	public $response_args     = array();
	public $user_journey_data = array();

	public $form_id;
	public $refer;
	public $manager;

	/** @var Action_Handler */
	public $action_handler;

	public $form_key         = '_jet_engine_booking_form_id';
	public $refer_key        = '_jet_engine_refer';
	public $post_id_key      = '__queried_post_id';
	public $user_journey_key = '_user_journey';
	/**
	 * @var Request_Handler
	 */
	public $request_handler;

	private $submitted_post_context       = false;
	private $valid_submitted_post_context = false;

	/**
	 * Why the submitted post context was not accepted: missing, invalid or
	 * unreadable. Empty when it was accepted.
	 *
	 * @var string
	 */
	private $post_context_rejection = '';

	/**
	 * Post ID sent in the post context field (0 when absent or "no post").
	 *
	 * @var int
	 */
	private $submitted_post_id = 0;

	/** @var int */
	private $accepted_post_id = 0;


	/**
	 * Constructor for the class
	 */
	public function __construct() {
		$this->set_jfb_request_args();
		$this->action_handler  = new Action_Handler();
		$this->request_handler = new Request_Handler();

		add_filter( 'jet-form-builder/message-types', array( Submitted_Post_Context::class, 'add_message_type' ) );
		add_filter( 'jet-engine/listings/data/default-object', array( Submitted_Post_Context::class, 'pin_jet_engine_object' ), 20 );
	}

	public function call_form() {
		try {
			Form_Request_Router::listen();
		} catch ( Not_Router_Request $exception ) {
			return;
		}

		add_action( 'jet-form-builder/request', array( $this, 'merge_request' ), 1 );

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
			add_action( 'wp_loaded', array( $this, 'process_form' ), 0 );
		}
	}

	public function core_fields() {
		return apply_filters(
			'jet-form-builder/form-handler/core-fields',
			array(
				$this->form_key    => array(
					'callback' => array( $this, 'set_form_id' ),
				),
				$this->refer_key   => array(
					'callback' => array( $this, 'set_referrer' ),
				),
				$this->post_id_key => array(
					'callback' => array( $this, 'set_current_post' ),
				),
				$this->user_journey_key => array(
					'callback' => array( $this, 'set_user_journey_data' ),
				),
			)
		);
	}

	public function merge_request() {
		$fields = array(
			'__form_id' => $this->get_form_id(),
			'__refer'   => $this->get_referrer(),
			'__is_ajax' => $this->is_ajax(),
		);

		foreach ( $fields as $name => $value ) {
			jet_fb_context()->set_field_type( 'text-field', $name );
			jet_fb_context()->update_request( $value, $name );
			jet_fb_context()->make_secure( $name );
		}
	}

	public function set_user_journey_data( $data ) {
		$this->user_journey_data = $data;
	}

	public function get_user_journey_data() {
		return $this->user_journey_data;
	}


	public function set_referrer( $url ): Form_Handler {
		$refer = remove_query_arg(
			array( 'values', 'status', 'fields' ),
			esc_url_raw( $url )
		);

		$this->refer = wp_validate_redirect( $refer );

		return $this;
	}

	public function get_referrer() {
		return $this->refer;
	}

	public function set_form_id( $form_id ) {
		$form_id = absint( $form_id );

		$this->form_id = Block_Helper::is_valid_form_post( $form_id, true ) ? $form_id : 0;

		return $this;
	}

	public function get_form_id() {
		return $this->form_id;
	}

	public function has_submitted_post_context(): bool {
		return $this->submitted_post_context;
	}

	/**
	 * Post accepted as the context of this submission (signature or proof).
	 *
	 * @return int 0 when there is none.
	 */
	public function get_accepted_post_id(): int {
		return $this->submitted_post_context && $this->valid_submitted_post_context ? $this->accepted_post_id : 0;
	}

	/**
	 * @return string Empty when no context was submitted or it was accepted;
	 *                otherwise missing | invalid | unreadable.
	 */
	public function get_post_context_rejection(): string {
		return $this->submitted_post_context && ! $this->valid_submitted_post_context
			? $this->post_context_rejection
			: '';
	}

	/**
	 * Request-selected context must have been rendered for this form and remain
	 * readable by the submitter. The generic Tools setter remains server-side API.
	 *
	 * @param mixed $post_id Submitted post ID.
	 */
	public function set_current_post( $post_id ) {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing -- This field is an HMAC, not a nonce; verify it below.
		$signature = sanitize_text_field( wp_unslash( $_POST[ Submitted_Post_Context::SIGNATURE_FIELD ] ?? '' ) );

		$this->submitted_post_id = is_scalar( $post_id ) && preg_match( '/^[0-9]+$/D', (string) $post_id ) ? (int) $post_id : 0;

		if ( '' === $signature ) {
			$this->post_context_rejection = 'missing';
		} elseif ( ! Submitted_Post_Context::verify( $this->form_id, $post_id, $signature ) ) {
			$this->post_context_rejection = 'invalid';
		} elseif ( (int) $post_id > 0 && ! Submitted_Post_Context::can_read_post( $post_id, Submitted_Post_Context::PAGE ) ) {
			$this->post_context_rejection = 'unreadable';
		} else {
			$this->post_context_rejection = '';
		}

		$this->valid_submitted_post_context = '' === $this->post_context_rejection;
		$this->accepted_post_id             = $this->valid_submitted_post_context ? max( 0, $this->submitted_post_id ) : 0;

		Tools::set_current_post( $this->valid_submitted_post_context ? $post_id : 0 );
	}

	/**
	 * Is ajax form processing or not
	 *
	 * @return boolean [description]
	 */
	public function is_ajax(): bool {
		return $this->is_ajax;
	}

	/**
	 * Is form processing or not
	 *
	 * @return bool
	 */
	public function is_process(): bool {
		return ! empty( $this->refer );
	}

	/**
	 * Setup form data
	 *
	 * @return void [description]
	 */
	public function setup_form() {

		if ( $this->form_id ) {
			return;
		}

		// Missing core fields must not retain a previous global or AJAX referer.
		$this->submitted_post_context       = true;
		$this->valid_submitted_post_context = false;
		$this->post_context_rejection       = 'missing';
		$this->submitted_post_id            = 0;
		$this->accepted_post_id             = 0;
		Tools::set_current_post( 0 );

		$fields = $this->core_fields();

		foreach ( $fields as $field_name => $options ) {
			// phpcs:disable WordPress.Security
			if ( ! isset( $_POST[ $field_name ] ) ) {
				continue;
			}

			Tools::call( $options['callback'] ?? false, $_POST[ $field_name ] );
			// phpcs:enable WordPress.Security
		}

		// Before anything reads the post: parsers, add-ons, records.
		$this->recover_post_context();
	}

	private function get_response_manager() {
		if ( ! $this->form_id ) {
			$this->setup_form();
		}

		if ( $this->is_ajax ) {
			jet_fb_action_handler()->set_form_id( $this->form_id );

			return new Form_Response\Types\Ajax_Response(
				array(
					'form_id' => $this->form_id,
					'actions' => jet_fb_action_handler()->get_all(),
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
	 * @return void
	 */
	public function process_ajax_form() {
		$this->is_ajax = true;
		$this->process_form();
	}

	/**
	 * Process current form
	 *
	 * @return void [description]
	 */
	public function process_form() {
		$this->setup_form();

		if ( ! $this->form_id || ! $this->refer ) {
			$this->add_response_data(
				array(
					'reload' => true,
				)
			);
			$this->set_response_args(
				array(
					'status' => 'failed',
				)
			);
			$this->send_raw_response();

			return;
		}

		$this->try_send();

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

	public function try_send() {
		try {
			$this->send_form();
		} catch ( Request_Exception $exception ) {
			$this->send_response(
				array(
					'status' => $exception->get_form_status(),
					'errors' => $exception->get_fields_errors(),
				)
			);
		} catch ( Action_Exception $exception ) {
			/**
			 * @see https://github.com/Crocoblock/jetformbuilder/issues/334
			 */
			$this->is_success = $exception->is_success();

			$this->send_response(
				array(
					'status' => $exception->get_form_status(),
				)
			);
		} catch ( Spam_Exception $exception ) {
			$this->send_response(
				array(
					'status' => $exception->get_form_status(),
				)
			);
		}
	}

	/**
	 * @throws Request_Exception
	 */
	public function send_form() {
		if ( ! $this->form_id ) {
			throw new Request_Exception( 'failed' );
		}

		$this->check_submitted_post_context();

		$this->action_handler->set_form_id( $this->form_id );
		$this->request_handler->set_form_data();

		do_action( 'jet-form-builder/form-handler/before-send', $this );

		// execute all actions
		jet_fb_events()->execute( Default_Process_Event::class );

		$this->add_response_data( $this->action_handler->response_data );

		$this->is_success = true;
	}


	/**
	 * A rejected context is already empty (no global post, no Live_Form post).
	 * A form that does not read the post goes on without it. A form that does
	 * would compute empty server values, so it stops before parsing and actions.
	 *
	 * @throws Request_Exception
	 */
	private function check_submitted_post_context() {
		if ( ! $this->submitted_post_context || $this->valid_submitted_post_context ) {
			return;
		}

		if ( Submitted_Post_Context::form_requires_post_context( $this->form_id ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped -- Status key, not output.
			throw new Request_Exception( Submitted_Post_Context::EXPIRED_STATUS );
		}
	}

	/**
	 * A form without a signature (page cached before signatures existed) gets
	 * its post back only with an equivalent proof: the post is open to the
	 * visitor and the form is placed in its content, so any guest receives this
	 * exact pair with a valid signature. A changed ID next to a signature
	 * (invalid) or a closed post (unreadable) is never recovered.
	 *
	 * The same proof restores the referring page for an AJAX submission of a
	 * form rendered without a post, as before signatures.
	 *
	 * @return bool Whether a post context was recovered.
	 */
	private function recover_post_context(): bool {
		$missing = ! $this->valid_submitted_post_context && 'missing' === $this->post_context_rejection;
		$no_post = $this->valid_submitted_post_context && $this->submitted_post_id <= 0;

		if ( ! $missing && ! $no_post ) {
			return false;
		}

		$candidates = array();

		if ( $missing && $this->submitted_post_id > 0 ) {
			$candidates[] = $this->submitted_post_id;
		} elseif ( wp_doing_ajax() ) {
			foreach ( array( $this->refer, wp_get_raw_referer() ) as $url ) {
				$candidates[] = is_string( $url ) && '' !== $url ? url_to_postid( $url ) : 0;
			}
		}

		foreach ( array_unique( array_filter( $candidates ) ) as $post_id ) {
			if ( ! Submitted_Post_Context::can_read_post( $post_id, Submitted_Post_Context::STRICT ) ||
				! Submitted_Post_Context::form_is_placed_in( $this->form_id, $post_id ) ) {
				continue;
			}

			Tools::set_current_post( $post_id );
			$this->accepted_post_id             = (int) $post_id;
			$this->valid_submitted_post_context = true;
			$this->post_context_rejection       = '';

			return true;
		}

		return false;
	}

	/**
	 * Add new properties into response data
	 *
	 * @param array $data [description]
	 */
	public function add_response_data( $data = array() ) {
		$this->response_data = array_merge( $this->response_data, $data );
	}

	public function set_response_args( $args ) {
		$this->response_args = array_merge( $this->response_args, $args );

		return $this;
	}

	public function get_response_args() {
		return $this->response_args;
	}

	/**
	 * Redirect back to refer
	 *
	 * @param array $args [description]
	 *
	 * @return void [description]
	 */
	public function send_response( $args = array() ) {
		try {
			$this->set_response_args( $args );

			jet_fb_events()->execute( Default_Required_Event::class );

			do_action( 'jet-form-builder/form-handler/after-send', $this, $this->is_success );
		} catch ( Repository_Exception $exception ) {
			$this->send_raw_response();

			return;
		} catch ( Handler_Exception $exception ) {
			$this->is_success    = false;
			$this->response_args = array(
				'status' => $exception->get_form_status(),
			);
			$this->response_data = array();

			$this->send_raw_response();

			return;
		}

		$this->send_raw_response();
	}

	public function send_raw_response() {
		( new Form_Response\Response(
			$this->get_response_manager(),
			$this->response_data
		) )->init( $this->response_args )->send();
	}

	/**
	 * Backward compatibility to deprecated properties
	 *
	 * @param $name
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function __get( $name ) {
		switch ( $name ) {
			case 'parser':
				/** @var Module $rich */
				$rich = jet_form_builder()->module( 'rich-content' );

				return $rich->get_parser();
			default:
				return null;
		}
	}

	public function set_jfb_request_args() {
		$options_handler = new Options_Handler();
		$options_handler->set_jfb_request_args();
		$options = Tab_Handler_Manager::get_options( 'options-tab' );
		if ( isset( $options['gfb_request_args_key'] ) ) {
			$this->hook_key = $options['gfb_request_args_key'];
		}
		if ( isset( $options['gfb_request_args_value'] ) ) {
			$this->hook_val = $options['gfb_request_args_value'];
		}
	}

}
