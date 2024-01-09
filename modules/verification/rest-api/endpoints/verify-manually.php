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
		/** @var \JFB_Modules\Verification\Jobs\Verify_Manually $job */
		$job = $jobs->get( \JFB_Modules\Verification\Jobs\Verify_Manually::class );

		$is_single = 1 === count( $ids );

		foreach ( $ids as $id ) {
			$job->set_args( array( $id, get_current_user_id() ) );
			// clear possible duplicates of the current job
			$job->unschedule();

			// check is exist running jobs
			if ( $job->is_scheduled() ) {
				continue;
			}

			if ( $is_single ) {
				$job->execute( $id, get_current_user_id() );
				break;
			} else {
				// add new job to queue
				$job->schedule();
			}
		}

		$errors = $job->get_logs();

		if ( ! empty( $errors ) ) {
			return new \WP_REST_Response(
				array(
					'message' => $errors[0],
				),
				400
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => $is_single
					? __(
						'This record has been verified.',
						'jet-form-builder'
					)
					: __(
						'Checked records would be verified soon.',
						'jet-form-builder'
					),
			)
		);
	}
}
