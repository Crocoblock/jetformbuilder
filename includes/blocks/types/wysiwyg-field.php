<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Wysiwyg_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Wysiwyg_Field extends Base {

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'wysiwyg-field';
	}

	public function general_style_unregister() {
		return array( 'input' );
	}

	/**
	 * Returns current block render
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		wp_enqueue_editor();

		return ( new Wysiwyg_Field_Render( $this ) )->render();
	}


}
