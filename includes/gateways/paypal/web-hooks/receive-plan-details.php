<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Show_Plan_Details_Action;
use Jet_Form_Builder\Gateways\Paypal\Prepared_Views;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

class Receive_Plan_Details extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	public static function get_rest_static_base(): string {
		return 'paypal/show-plan-details/';
	}

	public static function get_rest_dynamic_base(): string {
		return '(?P<code>[\w\-]+)';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$subscription_id = $request->get_param( 'code' );

		try {
			$subscription = Prepared_Views::get_subscription_raw( $subscription_id );
		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage()
				),
				404
			);
		}

		$plan_id = $subscription['resource']['plan_id'] ?? '';

		try {
			$token = Paypal\Controller::get_token_by_form_id( $subscription['form_id'] );

			$plan = ( new Show_Plan_Details_Action() )
				->set_bearer_auth( $token )
				->set_path(
					array(
						'plan_id' => $plan_id
					)
				)
				->send_request();

			$product = ( new Paypal\Api_Actions\Show_Product_Details() )
				->set_bearer_auth( $token )
				->set_path(
					array(
						'product_id' => $plan['product_id'],
					)
				)
				->send_request();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage()
				),
				503
			);
		}

		return new \WP_REST_Response(
			array(
				'data' => array(
					'plan_id'      => $plan['id'] ?? '',
					'sub_id'       => $subscription['resource']['id'] ?? '',
					'price'        => $this->get_price_for_cycle( $plan, $subscription ),
					'subscription' => $subscription,
					'plan'         => $plan,
					'product'      => $product,
				),
			)
		);
	}

	private function format_amount( $amount, $quantity = 1 ) {
		$value = $quantity * $amount['value'] ?? 0;

		return sprintf( '%s %s', $value, $amount['currency_code'] ?? '' );
	}

	private function find_tier( $cycle, $quantity = 1 ) {
		$tiers = $cycle['pricing_scheme']['tiers'] ?? array();
		foreach ( $tiers as $tier ) {
			$start = (int) ( $tier['starting_quantity'] ?? 0 );
			$end   = (int) ( $tier['ending_quantity'] ?? 0 ); // 0 -> from start and more

			if ( $quantity >= $start && ( 0 === $end || $quantity <= $end ) ) {
				return $tier;
			}
		}

		return array();
	}

	private function get_price_for_cycle( $plan, $subscription ): string {
		$quantity = (int) $subscription['resource']['quantity'] ?? 1;

		$cycles     = $plan['billing_cycles'] ?? array();
		$last_cycle = array_pop( $cycles );

		$scheme = $last_cycle['pricing_scheme'] ?? array();

		if ( isset( $scheme['fixed_price'] ) ) {
			if ( ! $plan['quantity_supported'] ) {
				return $this->format_amount( $scheme['fixed_price'] );
			}

			return $this->format_amount( $scheme['fixed_price'], $quantity );
		}

		$pricing_model = $last_cycle['pricing_model'];

		switch ( $pricing_model ) {
			case 'TIERED':
			case 'VOLUME':
			default:
				$tier = $this->find_tier( $last_cycle, $quantity );

				return $this->format_amount( $tier['amount'], $quantity );
		}
	}

}