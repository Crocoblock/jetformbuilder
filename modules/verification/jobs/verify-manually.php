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

	public function execute() {
		// phpcs:ignore WordPress.PHP.DevelopmentFunctions
		error_log(
			sprintf(
				'%s is executed! Record ID: %s',
				static::class,
				$this->get_arg( 'record_id' )
			)
		);
	}
}
