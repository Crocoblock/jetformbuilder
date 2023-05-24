<?php


namespace JFB_Modules\Gateways\Rest_Api;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use JFB_Modules\Gateways\Meta_Boxes\Payment_Details_Box;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Receive_Payment extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	public static function get_rest_base() {
		return 'payment/(?P<id>[\d]+)';
	}

	public function get_common_args(): array {
		return array(
			'id' => array(
				'type'     => 'integer',
				'required' => true,
			),
		);
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function get_box(): Payment_Details_Box {
		return new Payment_Details_Box();
	}

	public function run_callback( \WP_REST_Request $request ) {
		$box = $this->get_box()->set_id( $request->get_param( 'id' ) );

		try {
			$record = $box->get_list();
		} catch ( Not_Found_Page_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Payment not found', 'jet-form-builder' ),
				),
				404
			);
		}

		return new \WP_REST_Response(
			array(
				'list' => $box->prepare_record( $record ),
			)
		);
	}
}
