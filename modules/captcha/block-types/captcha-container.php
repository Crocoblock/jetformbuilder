<?php

namespace JFB_Modules\Captcha\Block_Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Captcha\Module;

/**
 * Define Text field block class
 */
class Captcha_Container extends Base {

	use Block_Metadata_Trait;

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
	 * Initialize style manager for the block
	 *
	 * @param Object $style_manager Actual style manager instance.
	 */
	public function maybe_init_style_manager( $style_manager ) {
		// Captcha Field does not use style manager
		return;
	}

	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_block_renderer( $wp_block = null ) {
		/** @var Module $captcha */
		$captcha = jet_form_builder()->module( 'captcha' );

		return $captcha->render();
	}

}
