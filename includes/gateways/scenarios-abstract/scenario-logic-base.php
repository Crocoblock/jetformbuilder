<?php


namespace Jet_Form_Builder\Gateways\Scenarios_Abstract;

use Jet_Form_Builder\Actions\Executors\Action_Default_Executor;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Actions\Types\Redirect_To_Page;
use Jet_Form_Builder\Actions\Types\Save_Record;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Base_Gateway;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Scenario_Item_Trait;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

abstract class Scenario_Logic_Base {

	use Scenario_Item_Trait;

	protected $queried_token;
	protected $queried_row = array();
	protected $api_response;

	abstract public function after_actions();

	abstract public function process_after();

	abstract protected function query_token();

	abstract protected function query_scenario_row();

	abstract public function get_failed_statuses();

	/**
	 * @throws Repository_Exception
	 * @throws Action_Exception
	 */
	public function on_catch() {
		$this->process_after();

		$this->process_status( $this->get_process_status() );

		/** redirect to the page */
		jet_fb_gateway_current()->send_response(
			array(
				'status' => jet_fb_gateway_current()->get_result_message(
					$this->get_scenario_row( 'status' )
				),
			)
		);
	}

	/**
	 * @throws Repository_Exception
	 */
	public function before_actions() {
		jet_fb_gateway_current()->set_form_meta( Gateway_Manager::instance()->gateways() );

		$keep_these      = jet_fb_gateway_current()->get_actions_before();
		$default_actions = ( new Action_Default_Executor() )->get_actions_ids();

		foreach ( $default_actions as $index ) {
			$action = jet_fb_action_handler()->get_action_by_id( $index );

			if ( 'redirect_to_page' === $action->get_id() ) {
				jet_fb_action_handler()->unregister_action( $index );

				$this->add_context(
					array(
						'redirect' => $action,
					)
				);
			}

			if ( empty( $keep_these[ $index ]['active'] ) ) {
				jet_fb_action_handler()->unregister_action( $index );
			}
		}
	}

	/**
	 * @param $type
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_referrer_url( string $type ) {
		$success_redirect = filter_var(
			jet_fb_gateway_current()->gateway( 'use_success_redirect' ),
			FILTER_VALIDATE_BOOLEAN
		);
		$refer            = jet_fb_action_handler()->get_refer();

		/** @var Redirect_To_Page $redirect */
		$redirect = $this->get_context( 'redirect' );

		if ( $success_redirect && $redirect && 'success' === $type ) {
			$refer = $redirect->get_completed_redirect_url();
		}

		return add_query_arg(
			array(
				Gateway_Manager::PAYMENT_TYPE_PARAM => jet_fb_gateway_current()->get_id(),
				Scenarios_Manager::QUERY_VAR        => static::scenario_id(),
			),
			$refer
		);
	}

	/**
	 * Process status notification and enqueue message
	 *
	 * @param string $type [description]
	 *
	 * @throws Action_Exception
	 * @throws Repository_Exception
	 */
	public function process_status( $type = 'success' ) {

		do_action( 'jet-form-builder/gateways/on-payment-' . $type, jet_fb_gateway_current() );

		$keep_these = jet_fb_gateway_current()->gateway( 'notifications_' . $type, array() );

		if ( empty( $keep_these ) ) {
			return;
		}

		$entry = $this->get_scenario_row();

		$all = jet_fb_action_handler()->set_form_id( $entry['form_id'] ?? 0 )
									  ->unregister_action( 'redirect_to_page' )
									  ->get_all();

		if ( empty( $all ) ) {
			return;
		}

		foreach ( $all as $index => $notification ) {
			if ( empty( $keep_these[ $index ]['active'] ) ) {
				jet_fb_action_handler()->unregister_action( $index );
			}
		}

		try {
			$request = Record_Fields_View::get_request_list( $entry['record']['id'] ?? 0 );
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		jet_fb_action_handler()->add_request( $request );

		( new Action_Default_Executor() )->soft_run_actions();
	}

	public function get_gateways_meta() {
		$form_id = (int) $this->get_scenario_row( 'form_id', 0 );

		return jet_form_builder()->post_type->get_gateways( $form_id );
	}

	public function scenario_row( $props = array() ) {
		if ( ! empty( $props ) ) {
			$this->set_scenario_row( $props );
		}

		return $this->get_scenario_row();
	}

	public function get_scenario_row( $key = '', $if_empty = false ) {
		$this->maybe_query_scenario_row();

		return $key ? ( $this->queried_row[ $key ] ?? $if_empty ) : $this->queried_row;
	}

	public function set_scenario_row( $props ): Scenario_Logic_Base {
		$this->maybe_query_scenario_row();

		$this->queried_row = array_merge( $this->queried_row, $props );

		return $this;
	}

	protected function maybe_query_scenario_row(): Scenario_Logic_Base {
		if ( empty( $this->queried_row ) ) {
			$this->queried_row = $this->query_scenario_row();
		}

		return $this;
	}

	public function get_process_status() {
		return in_array( $this->get_scenario_row( 'status' ), $this->get_failed_statuses(), true )
			? 'failed'
			: 'success';
	}

	public function get_queried_token() {
		if ( ! $this->queried_token ) {
			$this->queried_token = $this->query_token();
		}

		return $this->queried_token;
	}

	public function add_redirect( $links ) {
		foreach ( $links as $link ) {
			if ( empty( $link['rel'] ) || 'approve' !== $link['rel'] ) {
				continue;
			}

			jet_fb_action_handler()->add_response( array( 'redirect' => $link['href'] ) );
			break;
		}
	}

	/**
	 * @param string $key
	 * @param string $if_empty
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function get_setting( string $key, $if_empty = '' ) {
		return jet_fb_gateway_current()->current_scenario( $key, $if_empty );
	}

	/**
	 * @return array|false|mixed
	 * @throws Repository_Exception
	 */
	public function get_settings() {
		return jet_fb_gateway_current()->current_scenario();
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	private function get_context_key() {
		return jet_fb_gateway_current()->get_id() . '__' . static::scenario_id();
	}

	/**
	 * @param array $context
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function add_context( array $context ) {
		jet_fb_action_handler()->add_context( $this->get_context_key(), $context );

		return $this;
	}

	/**
	 * @param string $property
	 *
	 * @return array|false|mixed
	 * @throws Repository_Exception
	 */
	public function get_context( string $property = '' ) {
		return jet_fb_action_handler()->get_context( $this->get_context_key(), $property );
	}

}
