<?php


namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choice_Render extends Base {

	public function get_name() {
		return 'choice';
	}

	public function render( $wp_block = null, $template = null ) {
		$attrs = get_block_wrapper_attributes(
			array(
				'class' => 'jet-form-builder-choice--item',
			)
		);

		$html = sprintf(
			'<li %1$s>%2$s</li>',
			$attrs,
			$this->block_type->block_content
		);

		return parent::render( null, $html );
	}
}