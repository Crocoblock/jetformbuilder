<?php


namespace JFB_Modules\Verification\Events\Verification_Failed;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Events\Base_Event;

class Event extends Base_Event {

	public function get_id(): string {
		return 'VERIFICATION.FAILED';
	}

	/**
	 * @inheritDoc
	 */
	public function executors(): array {
		return array();
	}
}
