<?php


namespace JFB_Modules\Rest_Api\Endpoints;

use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migrator;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Install_Migrations_Endpoint extends Rest_Api_Endpoint_Base {

	/**
	 * @return mixed
	 */
	public static function get_rest_base() {
		return 'migrations/install';
	}

	/**
	 * @return mixed
	 */
	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed
	 */
	public function run_callback( \WP_REST_Request $request ) {
		try {
			Execution_Builder::instance()->transaction_start();

			Migrator::instance()->install();

			Execution_Builder::instance()->transaction_commit();

		} catch ( Migration_Exception $exception ) {
			Execution_Builder::instance()->transaction_rollback();

			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'version' => $exception->get_version(),
				),
				400
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully installed migrations.', 'jet-form-builder' ),
			)
		);
	}
}
