<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Form_Break_Field_Render;
use Jet_Form_Builder\Live_Form;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form_Break_Field extends Base {

	public $use_style_manager = false;

	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {
		$result = array();
		$this->set_block_data( $attrs, $content );

		$result[] = $this->get_block_renderer();
		$result[] = Live_Form::instance()->maybe_end_page( false, $this->block_attrs );
		$result[] = Live_Form::instance()->maybe_start_page();

		return implode( "\n", $result );
	}


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'form-break-field';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Form_Break_Field_Render( $this ) )->render();
	}

}
