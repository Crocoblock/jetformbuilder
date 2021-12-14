<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

use Jet_Form_Builder\Gateways\Paypal;

class Receive_Subscriptions extends Rest_Api_Endpoint_Base {

	use Paypal\Web_Hooks\Traits\Paginated_Args;

	public static function get_rest_base() {
		return 'paypal/receive-subscriptions';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		try {
			$subscriptions = Paypal\Prepared_Views::get_subscriptions_raw(
				$this->get_paginate_args( $request )
			);
		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
				),
				404
			);
		}

		$view = new Paypal\Scenarios_Views\Subscribe_Now();

		return new \WP_REST_Response(
			array(
				'list' => $view->prepare_list( $subscriptions ),
			)
		);
	}
}
