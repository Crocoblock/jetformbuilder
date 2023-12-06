<?php


namespace JFB_Modules\Jobs;

use JFB_Modules\Jobs\Interfaces\Job_It;
use JFB_Modules\Jobs\Traits\Job_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}


class Async_Job implements Job_It {

	use Job_Trait;

	public function schedule(): int {
		if ( ! function_exists( 'as_enqueue_async_action' ) ) {
			return 0;
		}

		return as_enqueue_async_action(
			$this->get_hook(),
			$this->get_args(),
			\JFB_Modules\Post_Type\Module::SLUG
		);
	}
}
