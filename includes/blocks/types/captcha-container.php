<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Captcha_Container extends Base {

	public $use_style_manager = false;

	/**
	 * Returns block name
	 */
	public function get_name() {
		return 'captcha-container';
	}

	public function render_row_layout() {
		return false;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return jet_form_builder()->captcha->render();
	}

}
