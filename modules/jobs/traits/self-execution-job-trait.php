<?php


namespace JFB_Modules\Jobs\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

trait Self_Execution_Job_Trait {

	public function rep_item_id() {
		return $this->get_hook();
	}

}
