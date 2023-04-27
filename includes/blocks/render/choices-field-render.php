<?php


namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choices_Field_Render extends Base {

	public function get_name() {
		return 'choices-field';
	}

	public function render( $wp_block = null, $template = null ) {
		$attrs = get_block_wrapper_attributes(
			array(
				'class'         => 'jet-form-builder-choice',
				'data-jfb-sync' => true,
			)
		);

		$html = sprintf(
			'<ul %1$s>%2$s</ul>',
			$attrs,
			$this->block_type->block_content
		);

		jet_form_builder()->wp_experiments->enable_native_layout();

		$html = wp_render_layout_support_flag( $html, Block_Helper::current_block() );

		jet_form_builder()->wp_experiments->remove_native_layout();

		return parent::render( null, $html );
	}

}