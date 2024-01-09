<?php


namespace JFB_Modules\Jobs\Traits;

use JFB_Modules\Jobs;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

trait Job_Logger_Trait {

	private $logs = array();

	public function log( string $message ) {
		/** @var Jobs\Module $jobs */
		/** @noinspection PhpUnhandledExceptionInspection */
		$jobs = jet_form_builder()->module( 'jobs' );

		if ( ! $jobs->get_action_id() ) {
			$this->logs[] = $message;

			return;
		}

		\ActionScheduler_Logger::instance()->log(
			$jobs->get_action_id(),
			$message
		);
	}

	public function get_logs(): array {
		return $this->logs;
	}

}
