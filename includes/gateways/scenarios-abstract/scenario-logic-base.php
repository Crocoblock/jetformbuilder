<?php


namespace Jet_Form_Builder\Gateways\Scenarios_Abstract;

use Jet_Form_Builder\Actions\Types\Save_Record;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Base_Gateway;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;
use Jet_Form_Builder\Gateways\Paypal\Controller;
use Jet_Form_Builder\Gateways\Paypal\Scenario_Item_Trait;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Manager;

abstract class Scenario_Logic_Base {

	use Scenario_Item_Trait;

	/** @var Controller */
	protected $controller;

	protected $queried_token;
	protected $queried_row = array();
	protected $api_response;

	abstract public function process_before();

	abstract public function process_after();

	abstract protected function query_token();

	abstract protected function query_scenario_row();

	abstract public function get_failed_statuses();

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

	public function on_success() {
		$this->controller->send_response(
			array(
				'status' => $this->controller->get_status_on_payment(
					$this->get_scenario_row( 'status' )
				),
			)
		);
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

	public function get_additional_args() {
		return array(
			Scenarios_Manager::QUERY_VAR => static::scenario_id(),
		);
	}

	protected function get_success_url() {
		return $this->controller->get_refer_url( Controller::SUCCESS_TYPE, $this->get_additional_args() );
	}

	protected function get_failed_url() {
		return $this->controller->get_refer_url( Controller::FAILED_TYPE, $this->get_additional_args() );
	}

	public function install( Base_Gateway $controller ) {
		if ( ! $this->controller ) {
			$this->controller = $controller;
		}

		return $this;
	}

	public function redirect_to_checkout( $order ) {
		foreach ( $order['links'] as $link ) {
			if ( empty( $link['rel'] ) || 'approve' !== $link['rel'] ) {
				continue;
			}

			jfb_action_handler()->add_response( array( 'redirect' => $link['href'] ) );
			break;
		}
	}

	/**
	 * @param string $key
	 * @param string $if_empty
	 *
	 * @return mixed
	 */
	public function get_setting( string $key, $if_empty = '' ) {
		return $this->controller->current_scenario( $key, $if_empty );
	}

	public function get_settings() {
		return $this->controller->current_scenario();
	}

	private function get_context_key() {
		return $this->controller->get_id() . '__' . static::scenario_id();
	}

	public function add_context( array $context ) {
		jfb_action_handler()->add_context( $this->get_context_key(), $context );

		return $this;
	}

	public function get_context( string $property = '' ) {
		return jfb_action_handler()->get_context( $this->get_context_key(), $property );
	}

	/**
	 * This function is called on the hook
	 * jet-form-builder/form-handler/after-send
	 *
	 * from the \Jet_Form_Builder\Gateways\Gateway_Manager::after_send_actions
	 *
	 * @throws Sql_Exception
	 * @since 2.0.0
	 */
	public function attach_record_id() {
		$record_id  = jfb_action_handler()->get_context( Save_Record::ID, 'id' );
		$payment_id = $this->get_context( 'payment_id' );

		if ( ! $record_id || ! $payment_id ) {
			return;
		}

		try {
			( new Payment_Model )->update(
				array(
					'record_id' => $record_id,
				),
				array(
					'id' => $payment_id
				)
			);	
		} catch ( Sql_Exception $exception ) {
			throw $exception->dynamic_error();
		}
	}

}
