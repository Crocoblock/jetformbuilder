<?php


namespace JFB_Modules\Verification\Jobs;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use JFB_Modules\Jobs\Async_Job;
use JFB_Modules\Jobs\Interfaces\Self_Execution_Job_It;
use JFB_Modules\Jobs\Traits\Self_Execution_Job_Trait;

class Verify_Manually extends Async_Job implements Self_Execution_Job_It {

	use Self_Execution_Job_Trait;

	public function __construct() {
		$this->set_hook( 'verification/verify' );
	}

	/**
	 * To secure this job we should modify query args on `as_async_request_queue_runner_query_args` hook
	 * and add our unique token, which stored hashed value in `jet_fb_tokens` sql-table.
	 *
	 * In this method we should validate this token
	 *
	 * @param $record_id
	 */
	public function execute( $record_id ) {
		// clear all duplicating
		$this->set_args( array( $record_id ) );

		define( 'JET_FB_REST_WEBHOOK', true );
	}

	public function init_hooks() {
		add_action( $this->get_hook(), array( $this, 'execute' ) );
	}

	public function remove_hooks() {
		remove_action( $this->get_hook(), array( $this, 'execute' ) );
	}
}
