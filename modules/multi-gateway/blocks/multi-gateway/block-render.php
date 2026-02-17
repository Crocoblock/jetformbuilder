<?php

namespace JFB_Modules\Multi_Gateway\Blocks\Multi_Gateway;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Block_Render extends Base {

	public function get_name() {
		return 'multi-gateway';
	}

}
