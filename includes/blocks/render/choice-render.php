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

	protected $choice_check_exist = false;

	public function get_name() {
		return 'choice';
	}

	public function render( $wp_block = null, $template = null ) {
		$this->set_choice_check( $wp_block );

		$accessibility_attrs = $this->has_choice_check()
			? array()
			: array(
				'aria-pressed' => 'false',
				'role'         => 'button',
				'tabindex'     => '0',
			);

		$attrs = get_block_wrapper_attributes(
			array_merge(
				array(
					'class' => 'jet-form-builder-choice--item',
				),
				$accessibility_attrs
			)
		);

		$html = sprintf(
			'<li %1$s>%2$s</li>',
			$attrs,
			( $this->block_type->block_content .
				( $this->has_choice_check() ? '' : $this->get_hidden_input_control() )
			)
		);

		return parent::render( null, $html );
	}

	public function get_hidden_input_control(): string {
		/**
		 * Cannot delete this row.
		 * Although this input will be hidden and has no LABEL, if it is not done,
		 * the availability of other LABEL elements will be broken
		 */
		$this->block_type->get_field_id( $this->block_type->get_raw_field_name(), 'label' );

		return Choice_Check_Render::get_input_control(
			$this->block_type,
			array(
				array( 'style', 'display:none;' ),
			)
		);
	}


	public function has_choice_check(): bool {
		return $this->choice_check_exist;
	}

	protected function set_choice_check( array $wp_block ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			return;
		}

		$control = Block_Helper::find_by_block_name(
			$wp_block['innerBlocks'],
			'jet-forms/choice-check'
		);

		if ( $control ) {
			$this->choice_check_exist = true;
		}
	}
}
