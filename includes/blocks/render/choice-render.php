<?php


namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Types\Choice;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Choice $block_type
 *
 * Class Choice_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Choice_Render extends Base {

	public function get_name() {
		return 'choice';
	}

	public function get_input_control( array $wp_block ): string {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			return $this->get_hidden_input_control();
		}

		$control = Block_Helper::find_by_block_name(
			$wp_block['innerBlocks'],
			'jet-forms/choice-check'
		);

		return $control ? '' : $this->get_hidden_input_control();
	}

	public function get_hidden_input_control(): string {
		return Choice_Check_Render::get_input_control(
			$this->block_type,
			array(
				array( 'style', 'display:none;' ),
			)
		);
	}

	public function render( $wp_block = null, $template = null ) {
		$attrs = get_block_wrapper_attributes(
			array(
				'class'        => 'jet-form-builder-choice--item',
				// accessibility
				'aria-pressed' => 'false',
				'role'         => 'button',
				'tabindex'     => '0',
			)
		);

		$html = sprintf(
			'<li %1$s>%2$s</li>',
			$attrs,
			( $this->block_type->block_content . $this->get_input_control( $wp_block ) )
		);

		return parent::render( null, $html );
	}
}
