<?php

namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Media_Field_Render extends Base {

	public function get_name() {
		return 'media-field';
	}

	public function render( $wp_block = null, $template = null ) {
		$field = parent::render( $wp_block, $template );

		ob_start();

		require Tools::get_global_template( 'fields/image-preview.php' );

		$template_content = ob_get_clean();

		$template = sprintf(
			'<template class="jet-form-builder__preview-template">%s</template>',
			$template_content
		);

		return ( $template . $field );
	}

}
