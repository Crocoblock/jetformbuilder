<?php


namespace JFB_Modules\Jobs;

use JFB_Modules\Jobs\Interfaces\Job_It;
use JFB_Modules\Jobs\Interfaces\Once_Job_It;
use JFB_Modules\Jobs\Traits\Job_Trait;
use JFB_Modules\Jobs\Traits\Time_Based_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Once_Job implements Once_Job_It {

	use Job_Trait;
	use Time_Based_Trait;

	public function schedule(): int {
		if ( ! function_exists( 'as_schedule_single_action' ) ) {
			return 0;
		}

		return as_schedule_single_action(
			$this->get_timestamp(),
			$this->get_hook(),
			$this->get_args(),
			\JFB_Modules\Post_Type\Module::SLUG
		);
	}
}
