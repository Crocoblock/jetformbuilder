<?php


namespace JFB_Modules\Verification\Events\Verification_Success;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Types\Base;

class Executor extends Base_Executor {

	public function is_supported(): bool {
		return true;
	}

	protected function is_valid_action( Base $action ): bool {
		return ( ! count( $action->get_events() ) || parent::is_valid_action( $action ) );
	}
}
