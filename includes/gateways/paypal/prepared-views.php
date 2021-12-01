<?php


namespace Jet_Form_Builder\Gateways\Paypal;


use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Prepared_Views {

	/**
	 * @param $subscription_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_subscription_raw( $subscription_id ): array {
		return ( new Query_Builder() )
			->set_view(
				( new Paypal\Query_Views\Paypal_Subscriptions_Find_View() )
					->find_by( 'subscription_id', $subscription_id )
			)
			->query_one();
	}

	/**
	 * @param $subscription_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_subscription( $subscription_id ): array {
		$raw_subscription = self::get_subscription_raw( $subscription_id );

		return ( new Scenarios_Views\Subscribe_Now() )->prepare_record( $raw_subscription );
	}

	/**
	 * @param $subscription_id
	 *
	 * @return array
	 */
	public static function get_subscription_raw_safe( $subscription_id ): array {
		try {
			return self::get_subscription_raw( $subscription_id );
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	/**
	 * @param $payment_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_payment_raw( $payment_id ): array {
		return ( new Query_Builder() )
			->set_view(
				( new Paypal\Query_Views\Recurring_Payment_Find_View() )
					->find_by( 'payment_id', $payment_id )
			)
			->debug()
			->query_one();
	}

	/**
	 * @param $payment_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_payment( $payment_id ): array {
		$raw_payment = self::get_payment_raw( $payment_id );

		return ( new Scenarios_Views\Recurring_Payments() )->prepare_record( $raw_payment );
	}

}