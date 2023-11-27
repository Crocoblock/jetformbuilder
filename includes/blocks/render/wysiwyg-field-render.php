<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Wysiwyg_Field_Render extends Base {

	public function get_name() {
		return 'wysiwyg-field';
	}

	/**
	 * @see \Jet_Form_Builder\Blocks\Render\Calculated_Field_Render::get_fields_label_tag
	 *
	 * @return string
	 */
	protected function get_fields_label_tag(): string {
		return 'div';
	}

}
