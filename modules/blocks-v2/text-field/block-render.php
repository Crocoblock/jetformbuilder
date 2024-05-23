<?php

namespace JFB_Modules\Blocks_V2\Text_Field;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Render\Base;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Block_Render extends Base {

	public function get_name() {
		return 'text-field';
	}
}
