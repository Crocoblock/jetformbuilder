<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Show_Plan_Details_Action;
use Jet_Form_Builder\Gateways\Paypal\Prepared_Views;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

class Receive_Admin_Subscription_Details extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	public static function get_rest_static_base(): string {
		return 'paypal/admin-subscription-details/';
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

		$notes   = Paypal\Prepared_Views::get_notes_by_id( $subscription['order_id'] );
		$plan_id = $subscription['resource']['plan_id'] ?? '';

		try {
			$token   = Paypal\Controller::get_token_by_form_id( $subscription['form_id'] );
			$plan    = Prepared_Views::get_plan_by_id( $token, (string) $plan_id );
			$product = Prepared_Views::get_product_by_id( $token, (string) ( $plan['product_id'] ?? '' ) );

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
					'plan_id'      => $plan_id,
					'sub_id'       => $subscription_id,
					'subscription' => $subscription,
					'plan'         => $plan,
					'product'      => $product,
					'replace'      => ( new Paypal\Scenarios_Views\Subscribe_Now() )
						->transform_to_columns_values(
							array(
								'price'         => $this->get_price_for_cycle( $plan, $subscription ),
								'product_name'  => $product['name'],
								'plan_name'     => $plan['name'],
								'billing_cycle' => $this->get_billing_cycle( $plan ),
								'notes'         => $notes
							)
						),
				),
			)
		);
	}

	private function format_amount( $amount, $quantity = 1 ) {
		$value = number_format( $quantity * $amount['value'] ?? 0, 2 );

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

	private function get_last_cycle( $plan ) {
		$cycles = $plan['billing_cycles'] ?? array();

		return array_pop( $cycles );
	}

	private function get_price_for_cycle( $plan, $subscription ): string {
		$quantity = (int) $subscription['resource']['quantity'] ?? 1;

		$last_cycle = $this->get_last_cycle( $plan );

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

	private function get_billing_cycle( $plan ) {
		$last_cycle = $this->get_last_cycle( $plan );

		$count = $last_cycle['frequency']['interval_count'] ?? 1;
		$unit  = strtolower( $last_cycle['frequency']['interval_unit'] ?? 'DAY' );

		return sprintf( __( 'Every %d %s', 'jet-form-builder' ), $count, $unit );
	}

}