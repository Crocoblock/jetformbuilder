<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;

use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Shipping_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

class Pay_Now extends Scenario_Logic_Base implements With_Resource_It {

	use Scenarios_Connectors\Pay_Now;

	protected function query_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field( wp_unslash( $_GET['token'] ?? '' ) );
	}

	public function get_failed_statuses() {
		return array( 'VOIDED' );
	}

	/**
	 * @return void
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		$this->set_gateway_data();

		/**
		 * Create payment by /v2/checkout/orders
		 */
		$payment = $this->create_resource();

		/**
		 * By default save payment id & form data to inserted post meta
		 */
		$this->add_context(
			array(
				'payment_id' => $this->save_resource( $payment )
			)
		);

		/**
		 * Redirect to Paypal checkout for approve payment
		 */
		$this->redirect_to_checkout( $payment );
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function create_resource() {
		$payment = ( new Api_Actions\Pay_Now_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_app_context(
				array(
					'return_url' => $this->get_success_url(),
					'cancel_url' => $this->get_failed_url(),
				)
			)
			->set_units(
				array(
					array(
						'currency_code' => $this->controller->current_gateway( 'currency' ),
						'value'         => $this->controller->get_price_var(),
					),
				)
			)
			->send_request();

		if ( empty( $payment['id'] ) ) {
			throw new Gateway_Exception( $payment['message'], $payment );
		}

		return $payment;
	}

	public function save_resource( $payment ) {
		try {
			return ( new Payment_Model() )->insert(
				array(
					'transaction_id'         => $payment['id'],
					'initial_transaction_id' => $payment['id'],
					'form_id'                => jfb_handler()->form_id,
					'user_id'                => get_current_user_id(),
					'gateway_id'             => $this->controller->get_id(),
					'scenario'               => self::scenario_id(),
					'amount_value'           => $this->retrieve_amount( $payment, 'value' ),
					'amount_code'            => $this->retrieve_amount( $payment, 'currency_code' ),
					'type'                   => Paypal\Controller::PAYMENT_TYPE_INITIAL,
					'status'                 => $payment['status'],
				)
			);

		} catch ( Sql_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	private function retrieve_amount( $payment, $key ) {
		$unit = $payment['purchase_units'][0] ?? array();

		return $unit['amount'][ $key ] ?? '';
	}

	/**
	 * Runs after saving the script token,
	 * when receiving form metadata.
	 *
	 * Stores the result in `queried_row`
	 *
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function query_scenario_row() {
		try {
			return Payment_View::findOne(
				array(
					'transaction_id' => $this->get_queried_token(),
				)
			)->query()->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}


	/**
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		$payment = ( new Api_Actions\Capture_Payment_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_order_id( $this->get_scenario_row( 'transaction_id' ) )
			->send_request();

		if ( isset( $payment['message'] ) ) {
			throw new Gateway_Exception( $payment['message'] );
		}

		$model      = new Payment_Model();
		$payer_ship = new Payer_Shipping_Model();

		try {
			$model->update(
				array(
					'status' => $payment['status'],
				),
				array(
					'id' => $this->get_scenario_row( 'id' ),
				)
			);

			/**
			 * We save the current status of the payment,
			 * so that we can then determine which actions
			 * to execute and which message to show to the user
			 */
			$this->scenario_row(
				array(
					'status' => $payment['status'],
				)
			);

			$shipping = $payment['purchase_units'][0]['shipping'] ?? array();

			$payer_id = Payer_Model::insert_or_update(
				array(
					'payer_id'   => $payment['payer']['payer_id'] ?? '',
					'first_name' => $payment['payer']['name']['given_name'] ?? '',
					'last_name'  => $payment['payer']['name']['surname'] ?? '',
					'email'      => $payment['payer']['email_address'] ?? '',
				)
			);

			$payer_ship->insert(
				array(
					'relation_id'    => $this->get_scenario_row( 'id' ),
					'relation_type'  => self::scenario_id(),
					'payer_id'       => $payer_id,
					'full_name'      => $shipping['name']['full_name'] ?? '',
					'address_line_1' => $shipping['address']['address_line_1'] ?? '',
					'address_line_2' => $shipping['address']['address_line_2'] ?? '',
					'admin_area_2'   => $shipping['address']['admin_area_2'] ?? '',
					'admin_area_1'   => $shipping['address']['admin_area_1'] ?? '',
					'postal_code'    => $shipping['address']['postal_code'] ?? '',
					'country_code'   => $shipping['address']['country_code'] ?? '',
				)
			);

		} catch ( Sql_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_gateway_data() {
		$this->controller->set_price_field();
		$this->controller->set_price_from_filed();
	}
}
