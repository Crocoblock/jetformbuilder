<?php


namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Base as Base_Render;

class Color_Picker_Field extends Base {


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'color-picker-field';
	}

	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$color_render = ( new class( $this ) extends Base_Render {
			public function get_name() {
				return 'color-picker-field';
			}
		} );


		return $color_render->render();
	}

}