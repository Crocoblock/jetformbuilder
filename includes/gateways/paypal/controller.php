<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Capture_Payment_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Get_Token;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Pay_Now_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Subscribe_Now_Action;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Pay_Now;
use Jet_Form_Builder\Gateways\Paypal\Scenarios\Scenario_Subscribe;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Gateways\Base_Gateway;

class Controller extends Base_Gateway {

	public $data = false;
	public $message = false;
	public $redirect = false;

	protected $token_query_name = 'token';

	/**
	 * Returns current gateway ID
	 *
	 * @return [type] [description]
	 */
	public function get_id() {
		return 'paypal';
	}

	/**
	 * Returns current gateway name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return __( 'PayPal Checkout', 'Paypal gateways editor data', 'jet-form-builder' );
	}

	protected function options_list() {
		return array(
			'client_id'    => array(
				'label' => _x( 'Client ID', 'Paypal gateways editor data', 'jet-form-builder' )
			),
			'secret'       => array(
				'label' => _x( 'Secret Key', 'Paypal gateways editor data', 'jet-form-builder' )
			),
			'currency'     => array(
				'label'    => _x( 'Currency Code', 'Paypal gateways editor data', 'jet-form-builder' ),
				'required' => false
			),
			'use_global'   => array(
				'label'    => _x( 'Use Global Settings', 'Paypal gateways editor data', 'jet-form-builder' ),
				'required' => false
			),
			'gateway_type' => array(
				'label'   => _x( 'Gateway Action', 'Paypal gateways editor data', 'jet-form-builder' ),
				'default' => Scenario_Pay_Now::SLUG,
			)
		);
	}

	public function additional_editor_data() {
		return array(
			'gateway_types' => array(
				array(
					'value' => Scenario_Pay_Now::SLUG,
					'label' => _x( 'Pay Now', 'Paypal gateway editor data', 'jet-form-builder' )
				),
				array(
					'value' => Scenario_Subscribe::SLUG,
					'label' => _x( 'Create a subscription', 'Paypal gateway editor data', 'jet-form-builder' )
				)
			)
		);
	}

	public function failed_statuses() {
		return array( 'VOIDED' );
	}

	protected function retrieve_gateway_meta() {
		return Plugin::instance()->post_type->get_gateways( $this->data['form_id'] ?? 0 );
	}

	/**
	 * @return string|void
	 * @throws Gateway_Exception
	 */
	public function get_payment_token() {
		try {
			return Scenarios_Manager::instance()->query_scenario()->get_queried_token();

		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	protected function retrieve_payment_instance() {
		try {
			return Scenarios_Manager::instance()
			                        ->query_scenario()
			                        ->install( $this )
			                        ->process_after();

		} catch ( Handler_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	protected function set_gateway_data_on_result() {
		try {
			//var_dump( $this->payment_instance ); die;

			$this->set_current_gateway_options();
			$this->set_payment_status();
			$this->set_payment_amount();
			$this->set_payer();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function set_payment_status() {
		if ( empty( $this->payment_instance['status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->set_post_meta( 'status', $this->payment_instance['status'] );
	}

	private function set_payer() {
		if ( empty( $this->payment_instance['payer'] ) ) {
			return;
		}
		$this->set_post_meta( 'payer', array(
			'first_name' => $this->payment_instance['payer']['name']['given_name'] ?? '',
			'last_name'  => $this->payment_instance['payer']['name']['surname'] ?? '',
			'email'      => $this->payment_instance['payer']['email_address'] ?? '',
		) );
	}

	private function set_payment_amount() {
		if ( empty( $this->payment_instance['purchase_units'][0]['payments']['captures'] ) ) {
			return;
		}
		$this->set_post_meta(
			'amount',
			$this->payment_instance['purchase_units'][0]['payments']['captures'][0]['amount'] ?? 0
		);
	}


	protected function query_order_token( $order_id, $form_id ) {
		return $this->get_token(
			$this->options['client_id'],
			$this->options['secret']
		);
	}

	/**
	 * Process gateway payment
	 *
	 * @param $action_handler
	 *
	 * @return void [type] [description]
	 * @throws Action_Exception
	 */
	public function after_actions( Action_Handler $action_handler ) {

		if ( ! $this->set_gateway_data() ) {
			return;
		}

		try {
			$order = Scenarios_Manager::instance()
			                          ->scenario_install( $this )
			                          ->process_before();

		} catch ( Handler_Exception $exception ) {
			throw ( new Action_Exception( $exception->getMessage(), $exception->get_additional() ) )->dynamic_error();
		}

		if ( empty( $order['id'] ) ) {
			throw ( new Action_Exception( $order['message'], $order ) )->dynamic_error();
		}

		update_post_meta(
			$this->order_id,
			self::GATEWAY_META_KEY,
			json_encode( array(
				'payment_id' => $order['id'],
				'order_id'   => $this->order_id,
				'form_id'    => $action_handler->form_id,
				'form_data'  => $action_handler->request_data,
			), JSON_UNESCAPED_UNICODE )
		);

		$this->maybe_redirect_to_checkout( $order );
	}

	private function maybe_redirect_to_checkout( $order ) {
		foreach ( $order['links'] as $link ) {
			if ( empty( $link['rel'] ) || 'approve' !== $link['rel'] ) {
				continue;
			}

			$this->get_action_handler()->add_response( array(
				'redirect' => $link['href']
			) );
			break;
		}
	}

	/**
	 * Returns auth token for current client_id and secret combination
	 *
	 * @param bool $client_id
	 * @param bool $secret
	 *
	 * @return mixed|void [description]
	 * @throws Action_Exception
	 */
	public function get_token( $client_id = false, $secret = false ) {
		$hash  = md5( $client_id . $secret );
		$token = get_transient( $hash );

		if ( $token ) {
			return $token;
		}

		if ( ! $client_id || ! $secret ) {
			return;
		}
		try {
			$response = ( new Paypal_Get_Token() )
				->set_credentials( $client_id, $secret )
				->send_request();

		} catch ( Gateway_Exception $exception ) {
			throw ( new Action_Exception( $exception->getMessage() ) )->dynamic_error();
		}

		if ( empty( $response['access_token'] ) ) {
			throw ( new Action_Exception( $response['error_description'] ) )->dynamic_error();
		}

		$token = $response['access_token'];

		set_transient( $hash, $token, 7 * HOUR_IN_SECONDS );

		return $token;

	}

}
