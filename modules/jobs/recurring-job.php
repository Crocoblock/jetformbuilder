<?php


namespace JFB_Modules\Jobs;

use JFB_Modules\Jobs\Interfaces\Recurring_Job_It;
use JFB_Modules\Jobs\Traits\Job_Trait;
use JFB_Modules\Jobs\Traits\Time_Based_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Recurring_Job implements Recurring_Job_It {

	use Job_Trait;
	use Time_Based_Trait;

	private $interval = 0;

	public function schedule(): int {
		if ( ! function_exists( 'as_schedule_recurring_action' ) ) {
			return 0;
		}

		return as_schedule_recurring_action(
			$this->get_timestamp(),
			$this->get_interval(),
			$this->get_hook(),
			$this->get_args(),
			\JFB_Modules\Post_Type\Module::SLUG
		);
	}

	/**
	 * @param int $interval
	 */
	public function set_interval( int $interval ) {
		$this->interval = $interval;
	}

	/**
	 * @return int
	 */
	public function get_interval(): int {
		return $this->interval;
	}
}
