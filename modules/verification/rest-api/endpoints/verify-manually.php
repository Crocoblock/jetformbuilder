<?php


namespace JFB_Modules\Verification\Rest_Api\Endpoints;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;
use JFB_Modules\Jobs\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Verify_Manually extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'verification/verify';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 * @throws Repository_Exception
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$ids = array_map( 'absint', $request['checked'] ?? array() );

		/** @var Module $jobs */
		$jobs = jet_form_builder()->module( 'jobs' );
		$job  = $jobs->get( \JFB_Modules\Verification\Jobs\Verify_Manually::class );

		foreach ( $ids as $id ) {
			$job->set_args( array( $id ) );
			// clear possible duplicates of the current job
			$job->unschedule();

			// check is exist running jobs
			if ( $job->is_scheduled() ) {
				continue;
			}
			// add new job to queue
			$job->schedule();
		}

		return new \WP_REST_Response(
			array(
				'message' => __( 'Checked items would be verified soon.', 'jet-form-builder' ),
			)
		);
	}
}
