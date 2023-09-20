<?php


namespace JFB_Modules\Verification\Events\Verification_Failed;

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

}
