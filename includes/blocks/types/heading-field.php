<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Heading_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Heading_Field extends Base {

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'heading-field';
	}

	public function general_style_unregister() {
		return array( 'required', 'input' );
	}

	public function get_label_selector() {
		return '__heading.%1$s__heading';
	}

	public function get_description_selector() {
		return '__heading-desc.%1$s__heading-desc';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Heading_Field_Render( $this ) )->render();
	}

}
