<?php


namespace Jet_Form_Builder\Actions\Events\Gateway_Success;

use Jet_Form_Builder\Actions\Events\Gateway_Base_Executor;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Gateway_Success_Executor extends Gateway_Base_Executor {

	public function get_gateway_type(): string {
		return 'success';
	}

}
