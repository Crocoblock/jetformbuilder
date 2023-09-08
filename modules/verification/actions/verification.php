<?php


namespace JFB_Modules\Verification\Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;

class Verification extends Base {

	public function get_id() {
		return 'verification';
	}

	public function get_name() {
		return __( 'Verification', 'jet-form-builder' );
	}

	public function do_action( array $request, Action_Handler $handler ) {
		// TODO: Implement do_action() method.
	}
}
