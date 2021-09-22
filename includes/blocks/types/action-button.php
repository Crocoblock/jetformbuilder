<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Base as BaseRender;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Action_Button extends Base {

	public function general_style_unregister() {
		return array( 'input', 'label', 'description', 'required' );
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'action-button';
	}

	public function use_preset() {
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
		return ( new class( $this ) extends BaseRender {

			public function get_name() {
				return 'action-button';
			}

			public function label_allowed() {
				return false;
			}

		} )->render();
	}

}
