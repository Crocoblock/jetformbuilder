<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Blocks\Render\Calculated_Field_Render;
use Jet_Form_Builder\Compatibility\Deprecated;
use Jet_Form_Builder\Compatibility\Jet_Plugins_Ajax\Jet_Plugins_Ajax;
use Jet_Form_Builder\Plugin;

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
		return 'Hello world';
	}

}
