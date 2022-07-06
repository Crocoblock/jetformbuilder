<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Base as BaseRender;
use Jet_Form_Builder\Form_Break;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form_Break_Start extends Base {

	public $use_style_manager = false;

	public function general_style_unregister() {
		return array( 'input', 'label', 'description', 'required' );
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'form-break-start';
	}

	public function use_preset() {
		return false;
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
		$class_name = $this->block_attrs['class_name'] ?? '';

		return $this->get_current_form_break()->maybe_start_page( true );
	}

}
