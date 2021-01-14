<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Conditional_Block_Render extends Base {

	public function get_name() {
		return 'conditional-block';
	}

	public function render( $wp_block = null, $template = null ) {
		return sprintf( '<div class="jet-form-builder__conditional" data-conditional="%2$s">%1$s</div>',
			$this->block_type->block_content,
			$this->block_type->get_conditions()
		);
	}
}
