<?php


namespace JFB_Modules\Verification\Events\Verification_Success;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use JFB_Modules\Verification\Actions\Verification;

class Executor extends Base_Executor {

	public function is_supported(): bool {
		return true;
	}

	public function before_execute() {
		parent::before_execute();

		$verification = jet_fb_action_handler()->get_action( Verification::class );

		if ( ! is_a( $verification, Verification::class ) ) {
			return;
		}

		$success_page = absint( $verification->settings['success_page'] ?? 0 );
		$url          = get_permalink( $success_page );

		if ( ! $url ) {
			return;
		}

		jet_fb_action_handler()->response_data['redirect'] = $url;
	}

	protected function is_valid_action( Base $action ): bool {
		return ( ! count( $action->get_events() ) || parent::is_valid_action( $action ) );
	}
}
