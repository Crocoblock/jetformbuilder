<?php


namespace JFB_Modules\Verification\Events\Default_Process;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use JFB_Modules\Verification\Actions\Verification;

class Executor extends Default_Process_Executor {

	protected function is_valid_action( Base $action ): bool {
		return $this->get_event()->is_valid_action( $action );
	}

	public function is_supported(): bool {
		return (bool) jet_fb_action_handler()->get_action( Verification::class );
	}

}
