<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;

class List_Subscription_Plans extends Base_Action {

	protected $method = 'GET';

	public function action_slug() {
		return 'LIST_PLANS';
	}

	public function action_endpoint() {
		return 'v1/billing/plans';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function get_plans(): array {
		$response = $this->send_request();

		if ( isset( $response['message'] ) ) {
			throw new Gateway_Exception( $response['message'], $response );
		}

		$plans = $response['plans'] ?? array();

		if ( empty( $plans ) ) {
			throw new Gateway_Exception( 'No plans were found.', $response );
		}

		return $plans;
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function get_plans_as_list(): array {
		$plans    = $this->get_plans();
		$response = array(
			array(
				'key'  => '',
				'name' => __( 'Choose your Subscription Plan', 'jet-form-builder' ),
			),
		);

		foreach ( $plans as $plan ) {
			$is_disabled = 'ACTIVE' !== $plan['status'];

			$response[] = array(
				'key'                => $plan['id'],
				'name'               => $plan['name'],
				'__experimentalHint' => $plan['description'],
				'disabled'           => $is_disabled,
				'className'          => $is_disabled ? 'is-disabled' : '',
			);
		}

		return $response;
	}
}
