<?php


namespace Jet_Form_Builder\Modules\Advanced_Choices\Block_Types;

use Jet_Form_Builder\Blocks\Types\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choices_Field_Not_Supported extends Base {

	use Block_Metadata_Trait;

	public function get_name() {
		return 'choices-field';
	}

	protected function render_field( array $attrs, $content = null, $wp_block = null ): string {
		$label       = __( 'Advanced Choices not supported', 'jet-form-builder' );
		$instruction = __(
			'You should update your WordPress to version 6.2 or higher',
			'jet-form-builder'
		);

		return sprintf(
			'<p><b>%1$s</b></p><p>%2$s</p>',
			$label,
			$instruction
		);
	}

	public function get_block_renderer( $wp_block = null ) {
		return '';
	}
}
