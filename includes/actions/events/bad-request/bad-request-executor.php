<?php


namespace Jet_Form_Builder\Actions\Events\Bad_Request;

use Jet_Form_Builder\Actions\Events\Base_Executor;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Bad_Request_Executor extends Base_Executor {
	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}


}
