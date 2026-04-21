<?php

namespace JFB_Modules\Blocks_V2\Phone_Field;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * International Phone Field Renderer
 */
class Block_Render extends Base {

	/**
	 * Get block name
	 *
	 * @return string
	 */
	public function get_name() {
		return 'phone-field';
	}
}
